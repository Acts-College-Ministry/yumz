from collections import defaultdict

class LikedEntities:

    def __init__(self):

        self.liked = defaultdict(int)
        self.disliked = defaultdict(int)

    def like(self, name: str):
        self.liked[name] += 1

    def top_liked(self):
        return sorted(self.liked.items(), key= lambda item : item[1], reverse=True)

    def top(self):
        return self.top_liked()