from .liked_entities import LikedEntities

class LikedCategories(LikedEntities):

    def __init__(self, *args, **kwargs):
        super(LikedCategories, self).__init__(*args, **kwargs)