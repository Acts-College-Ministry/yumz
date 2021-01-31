# likes routes live here!
from typing import List

from fastapi import Depends, APIRouter, Query, Request
from sqlalchemy.orm import Session

from ...db import crud, models, sql, schemas


router = APIRouter()


# dependency
def get_db():
    db = sql.SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/create", response_model = schemas.Like)
async def create_like(request: Request, like: schemas.LikeCreate, db: Session = Depends(get_db)):
    db_like = crud.create_like(db, like)

    print("AAAHHHH")
    return db_like



@router.get("/all", response_model = List[schemas.Like])
async def get_like(request: Request, limit: int = 100, db: Session=Depends(get_db)):
    likes = crud.get_likes(db, limit)

    return likes