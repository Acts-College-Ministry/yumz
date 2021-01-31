from typing import List

from pydantic import BaseModel, HttpUrl

from ..db import schemas as native_schemas


class Business(BaseModel):
    id: str = "abcdef"
    name: str = "alPHObet soup"
    url: HttpUrl
    photos: List[HttpUrl]

    phone: str
    is_closed: bool = False
    rating: float

    categories: List[native_schemas.CategoryBase]
