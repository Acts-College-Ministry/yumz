# yelp wrapper routes live here!
from typing import List

from fastapi import Depends, APIRouter, Query, Request
from sqlalchemy.orm import Session
from pydantic import parse_obj_as

from ..db import crud, models, sql, schemas
from .yelp_gql import initQuery
from . import schemas


router = APIRouter()


# dependency
def get_db():
    db = sql.SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/search")
async def search(request: Request, location: str):
    result = initQuery(location)
    
    parsed_result = parse_obj_as(List[schemas.YelpBusiness], result["search"]["business"])

    return parsed_result
