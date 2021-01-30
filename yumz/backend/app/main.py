from fastapi import FastAPI


app = FastAPI(
    title="yumz API",
    version="v1.0-beta",
    redoc_url="/docs",
    docs_url="/",
)


@app.get("/hello")
async def hello(request: Request):
    return {"message": "Hello World"}