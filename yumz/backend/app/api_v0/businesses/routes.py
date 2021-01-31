# businesses routes live here!
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

@router.post("/create", response_model = schemas.Business)
async def create_business(request: Request, business: schemas.BusinessCreate, db: Session = Depends(get_db)):
    db_business = crud.create_business(db, business)

    return db_business

