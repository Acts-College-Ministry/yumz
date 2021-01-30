from pydantic import BaseModel

class UserBase(BaseModel):
    location: str = "Irvine"


