from fastapi import FastAPI
from starlette.requests import Request

app = FastAPI(
    title="yumz API",
    version="v1.0-beta",
    redoc_url="/docs",
    docs_url="/",
)


@app.get("/hello")
async def hello(request: Request):
    return {"message": "Hello World"}

@app.get("/")
async def home()
	return {"message": "landing page"}

@app.get("/match")
async def match()
	return {"tinder": "baby"}

@app.get("/about")
async def about():
	return {"message": "this is the about page."}

