import datetime
from typing import List

from pydantic import BaseModel, HttpUrl

class UserBase(BaseModel):
    location: str = "Irvine"


class UserCreate(UserBase):

    class Config:
        orm_mode = True


class LikeBase(BaseModel):
    user_id: int = 316
    liked_image: HttpUrl
    liked_business_id: str
    liked_category_name: str

    

class LikeCreate(LikeBase):

    class Config:
        orm_mode = True



class Like(LikeBase):
    created: datetime.datetime = None

    class Config:
        orm_mode = True

class BusinessBase(BaseModel):
    id: str
    name: str
    url: str

class BusinessCreate(BusinessBase):

    class Config:
        orm_mode=True

class Business(BusinessBase):
    likes: List[Like] = []

    class Config:
        orm_mode=True

class CategoryBase(BaseModel):
    name: str

class CategoryCreate(CategoryBase):

    class Config:
        orm_mode=True

class Category(CategoryBase):
    likes: List[Like] = []

    class Config:
        orm_mode=True

class User(UserBase):
    id: int = 316
    created: datetime.datetime = None
    likes: List[Like] = []

    class Config:
        orm_mode = True



