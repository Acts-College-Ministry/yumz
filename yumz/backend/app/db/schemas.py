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


class Like(LikeBase):
    id: int = 517


class User(UserBase):
    id: int = 316
    created: datetime.datetime = None
    likes: List[Like] = []

    class Config:
        orm_mode = True



