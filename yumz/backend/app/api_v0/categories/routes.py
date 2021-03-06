# categories routes live here!
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

@router.post("/create", response_model = schemas.Category)
async def create_category(request: Request, category: schemas.CategoryCreate, db: Session = Depends(get_db)):
    db_category = crud.create_category(db, category)

    return db_category



@router.get("/all", response_model = List[schemas.Category])
async def get_categories(request: Request, limit: int = 100, db: Session=Depends(get_db)):
    categories = crud.get_categories(db, limit)

    return categories