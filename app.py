from flask import Flask
from flask_restful import Api
from api.MovieApiHandler import MovieApiHandler
from api.ReleaseYearApiHandler import ReleaseYearApiHandler
from api.FavoriteApiHandler import FavoriteApiHandler
from flask_cors import CORS

# Configure application
app = Flask(__name__)

CORS(app, supports_credentials=True)

api = Api(app)

api.add_resource(MovieApiHandler, '/api/movies')
api.add_resource(ReleaseYearApiHandler, '/api/filterOptions')
api.add_resource(FavoriteApiHandler, '/api/favorite')