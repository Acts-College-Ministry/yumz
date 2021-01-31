from fastapi import FastAPI
from starlette.requests import Request


from .db import models,sql
from .api_v0.users.routes import router as users_router
from .api_v0.businesses.routes import router as businesses_router
from .api_v0.categories.routes import router as categories_router
from .api_v0.likes.routes import router as likes_router
from .yelp.routes import router as yelp_router

models.Base.metadata.create_all(bind=sql.engine)


app = FastAPI(
    title="yumz API",
    version="v1.0-beta",
    redoc_url="/docs",
    docs_url="/",
)



@app.get("/hello")
async def hello(request: Request):
    return {"message": "Hello World"}




app.include_router(
    users_router,
    prefix="/api/v0/users",
    tags=["users"]
)

app.include_router(
    yelp_router,
    prefix="/yelp",
    tags=["yelp"]
)


app.include_router(
    likes_router,
    prefix="/api/v0/likes",
    tags=["likes"]
)


app.include_router(
    businesses_router,
    prefix="/api/v0/businesses",
    tags=["businesses"]
)

app.include_router(
    categories_router,
    prefix="/api/v0/categories",
    tags=["categories"]
)

