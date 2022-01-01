from flask_restful import Resource
from utils.helper import getReleaseYearOptions

class ReleaseYearApiHandler(Resource):
  def get(self):
    return {
      "filterOptions": getReleaseYearOptions()
      }

  