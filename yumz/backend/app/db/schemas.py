import datetime
from typing import List

from pydantic import BaseModel

class UserBase(BaseModel):
    location: str = "Irvine"


class UserCreate(UserBase):

    class Config:
        orm_mode = True


class LikeBase(BaseModel):
    user_id: int = 316
    

class LikeCreate(LikeBase):

    class Config:
        orm_mode = True



class Like(LikeBase):
    created: datetime.datetime = None

    user: UserBase = None

    class Config:
        orm_mode = True


class LikeCategoryCreate(LikeBase):
    category: str = "Mexican"

    class Config:
        orm_mode = True


class LikeCategory(Like):
    category: str = "Mexican"

    class Config:
        orm_mode = True


class User(UserBase):
    id: int = 316
    created: datetime.datetime = None
    likes: List[Like] = []
    category_likes: List[LikeCategory] = []

    class Config:
        orm_mode = True



