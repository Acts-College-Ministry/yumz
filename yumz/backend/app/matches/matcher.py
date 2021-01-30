from .liked_categories import LikedCategories

class Matcher:

    def __init__(self):
        self.liked_categories = LikedCategories()

    def like(self, name: str):
        self.liked_categories.like(name)
        print(self.liked_categories.top())