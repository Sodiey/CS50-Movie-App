from flask_restful import  Resource, abort, reqparse
from cs50 import SQL
from flask import request

db = SQL("sqlite:///movies.db")


class FavoriteApiHandler(Resource):
  def get(self):
    session_id = request.cookies.get('session_id')

    if not session_id:
      abort(403, description="Session ID was missing")

    results = []

    favorite_movies = db.execute("SELECT DISTINCT(movies.id), url_path, title, year FROM Favorite JOIN movies ON Favorite.movie_id = movies.id WHERE session_id = ?", session_id)

    for favorite in favorite_movies:
      ratings = db.execute("SELECT rating, votes FROM ratings WHERE movie_id = ?", favorite["id"])
      director = db.execute("SELECT name FROM people WHERE id = (SELECT person_id FROM directors WHERE movie_id = ?)", favorite["id"])
      stars = db.execute("SELECT name FROM people WHERE id IN (SELECT person_id FROM stars WHERE movie_id = ?)", favorite["id"])
      payload = {
        "detail": favorite,
        "ratings": ratings,
        "people": {
          "stars": stars,
          "director": director 
        },
      }
      results.append(payload)

    return {
      "results": results
      }
  def delete(self):
    parser = reqparse.RequestParser()
    parser.add_argument('session_id', location='cookies')
    args = parser.parse_args()

    session_id = args['session_id']

    if not session_id:
      abort(403, description="Session ID was missing")
    
    db.execute("DELETE FROM Favorite WHERE session_id = ?", session_id)
    return {
      "status": "Success"
     }

