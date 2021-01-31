# yelp wrapper routes live here!
from typing import List, Optional

from fastapi import Depends, APIRouter, Query, Request
from sqlalchemy.orm import Session
from pydantic import parse_obj_as

from ..db import crud, models, sql, schemas
from .yelp_gql import initQuery
from . import schemas as yelpSchemas


router = APIRouter()


# dependency
def get_db():
    db = sql.SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.get("/search")
async def search(request: Request,
    location: str,
    categories: Optional[str] = None, 
    db: Session = Depends(get_db)
    ):

    result = initQuery(location)
    
    # parse json results into yelp schema
    parsed_result = parse_obj_as(List[yelpSchemas.Business], result["search"]["business"])

    # create businesses / categories if they do not exist
    for business in parsed_result:

        # parse yelp business into our business
        parsed_business = schemas.BusinessCreate.parse_obj(business)
        crud.create_or_get_business(db, parsed_business)

        for category in business.categories:

            # parse yelp category to our category
            parsed_category = schemas.CategoryCreate.parse_obj(category)
            crud.create_or_get_category(db, parsed_category)
        

    return parsed_result
