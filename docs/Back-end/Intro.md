# Intro to the Back-end

Learn more about our back-end approach here.

## Framework

⚒ Our back-end is built using the ⚡ [FastAPI](https://fastapi.tiangolo.com/) ⚡ framework. 

We definitely would not have a fully functioning REST API (with [documentation!]((https://api.yumz.tisuela.com/))) if it wasn't for FastAPI's tool and aim to speed up development.

* OpenAPI standards enforced along with automatic Swagger documentation. This was an important feature for our front-end team to learn how to communicate with our API. 
* ORM support between database models and API response schemas. This is done through SQLALchemy (database API) and Pydantic (schema library).
* FastAPI is ready for production! Unlike other python frameworks, FastAPI is easily ready for production with minimal changes. Uvicorn helps this process as it runs FastAPI on an ASGI server. 

## Deployment

📤 Our back-end is deployed using [AWS EC2](https://aws.amazon.com/ec2/), along with an [NGINX webserver](https://www.nginx.com/). 

* AWS EC2 allows us to easily scale our website. It offers more control over how our app is served and has better pricing in the long-run.  
* NGINX is easier to learn than Apache as a college student with little background in XML syntax.   

You can check out our REST API [here](https://api.yumz.tisuela.com/).

We get most of our data by quering [Yelp's GraphQL API](https://www.yelp.com/developers/graphql/guides/intro).
