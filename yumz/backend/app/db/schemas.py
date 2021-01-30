from pydantic import BaseModel

class UserBase(BaseModel):
    location: str = "Irvine"


class UserCreate(UserBase):

    class Config:
        orm_mode = True