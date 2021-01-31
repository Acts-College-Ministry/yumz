# user routes live here!
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

@router.post("/user", response_model = schemas.User)
async def create_user(request: Request, user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = crud.create_user(db, user)

    return db_user

@router.get("/user", response_model = schemas.UserCreate)
async def get_user(request: Request, user_id: int, db: Session=Depends(get_db)):
    db_user = crud.get_user(db, user_id)

    return db_user

@router.get("/users", response_model = List[schemas.User])
async def get_user(request: Request, limit: int = 100, db: Session=Depends(get_db)):
    users = crud.get_users(db, limit)

    return users