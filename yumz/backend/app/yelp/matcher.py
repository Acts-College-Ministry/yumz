from collections import defaultdict

from sqlalchemy.orm import Session

from ..db import crud, models
from ..yelp import yelp_gql

class Matcher:

    def __init__(self, user_id: str, db: Session):
        '''
        get user info
        compile top likes
        '''
        self.user = db.query(models.User).filter(models.User.id == user_id).first()
        self.top_categories = self._get_top_categories(self.user)
        

    def _get_top_categories(self, user, threshold: int = 2): 
        '''
        Get categories sorted by most liked
        to least liked
        '''
        top_categories = []
        for category,likes in user.get_top_categories():
            top_categories.append(category)

            if len(top_categories) >= threshold:
                break
        
        return top_categories

    
    def get_matches(self):
        location = self.user.location

        return yelp_gql.queryCategories(location, self.top_categories)





    
    


    
