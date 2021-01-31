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

@router.post("/create", response_model = schemas.User)
async def create_like(request: Request, like_category: schemas.LikeCategoryCreate, db: Session = Depends(get_db)):
    db_user = crud.create_user(db, user)

    return db_user

