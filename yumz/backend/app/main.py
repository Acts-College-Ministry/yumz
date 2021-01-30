from fastapi import FastAPI
from starlette.requests import Request

from .matches.matcher import Matcher
from .db import models,sql


models.Base.metadata.create_all(bind=sql.engine)

app = FastAPI(
    title="yumz API",
    version="v1.0-beta",
    redoc_url="/docs",
    docs_url="/",
)


matcher = Matcher()


@app.get("/hello")
async def hello(request: Request):
    return {"message": "Hello World"}

@app.get("/")
async def home():
	return {"message": "landing page"}

@app.get("/match")
async def match():
	return {"tinder": "baby"}

@app.get("/like")
async def like(request: Request, name: str):
    matcher.like(name)
    return {"liked": name}

@app.get("/about")
async def about():
	return {"message": "this is the about page."}

