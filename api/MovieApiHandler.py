from flask_restful import  Resource, reqparse, abort, Headers
from cs50 import SQL
from flask import request
from utils.helper import getReleaseYearOptions
from uuid import uuid4

db = SQL("sqlite:///movies.db")


class MovieApiHandler(Resource):
  def get(self):
    year = request.args.get("year") or 2021
    offset = request.args.get("offset") or 0
    
    if int(year) not in getReleaseYearOptions():
      abort(403, description="You entered invalid year")

    movies = db.execute("SELECT * FROM movies WHERE year = ? LIMIT 10 OFFSET ?", year, offset)
    total = db.execute("SELECT COUNT(id) FROM movies WHERE year = ?", year)
    return {
      "results": movies,
      "total": total[0]["COUNT(id)"]
      }

  def post(self):
    parser = reqparse.RequestParser()
    parser.add_argument('movie_id', type=str, required=True)
    parser.add_argument('url_path', type=str)
    parser.add_argument('session_id', location='cookies')
    args = parser.parse_args()

    movie_id = args['movie_id']
    url_path = args['url_path']
    session_id = args['session_id']

    if not url_path or len(url_path) != 32:
      url_path = ""

    if not movie_id:
      abort(403, description="Should provide a movie ID")
    
    movie = db.execute("SELECT * FROM movies WHERE id = ?", movie_id)
    if not movie:
      abort(404, description="Movie ID does not exists")
    
    if session_id:
      headers = Headers()
      headers.add("Set-Cookie", "session_id={}; Path=/".format(session_id))
      final_res = {"status": "Success"}, 200, headers
    else:
      headers = Headers()
      session_id = uuid4().hex
      headers.add("Set-Cookie", "session_id={}; Path=/".format(session_id))
      final_res = {"status": "Success"}, 200, headers
    
    db.execute("INSERT INTO Favorite (movie_id, session_id, url_path)  VALUES (?, ?, ?)", 
    movie_id, session_id, url_path)

    return final_res


