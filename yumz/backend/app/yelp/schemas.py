from typing import List

from pydantic import BaseModel, HttpUrl


class YelpCategory(BaseModel):
    title: str = "Vietnamese"
    alias: str = "vietnamese"


class YelpBusiness(BaseModel):
    id: str = "abcdef"
    name: str = "alPHObet soup"
    url: HttpUrl
    photos: List[HttpUrl]
    categories: List[YelpCategory]

    phone: str
    is_closed: bool = False
    rating: float
