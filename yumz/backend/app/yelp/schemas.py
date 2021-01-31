from typing import List

from pydantic import BaseModel, HttpUrl


class Category(BaseModel):
    title: str = "Vietnamese"


class Business(BaseModel):
    id: str = "abcdef"
    name: str = "alPHObet soup"
    url: HttpUrl
    photos: List[HttpUrl]
    categories: List[Category]

    phone: str
    is_closed: bool = False
    rating: float
