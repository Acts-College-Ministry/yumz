from sqlalchemy.orm import Session

from . import models, schemas

# Users CRUD

def create_user(db: Session, user: schemas.UserCreate):
    db_user = models.User(
        location = user.location
    )

    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


def get_user(db: Session, user_id: int):
    user = db.query(models.User).filter(models.User.id == user_id).first()


    return user


def get_users(db: Session, limit: int = 100):
    users = db.query(models.User).limit(limit).all()

    return users


# business CRUD
def create_business(db: Session, business: schemas.BusinessCreate):
    db_business = models.Business(
        id = business.id,
        name = business.name,
        url = business.url,
    )

    db.add(db_business)
    db.commit()
    db.refresh(db_business)
    return db_business


def get_businesses(db: Session, limit: int = 100):
    businesses = db.query(models.Business).limit(limit).all()

    return businesses

# category CRUD

def create_category(db: Session, category: schemas.CategoryCreate):
    db_category = models.Category(
        name = category.name,
    )

    db.add(db_category)
    db.commit()
    db.refresh(db_category)
    return db_category

def get_categories(db: Session, limit: int = 100):
    categories = db.query(models.Category).limit(limit).all()

    return categories


# Likes crud

def create_like(db: Session, like: schemas.LikeCreate):
    db_like = models.Like(
        user_id = like.user_id,
        liked_image = like.liked_image,
        liked_business_id = like.liked_business_id,
        liked_category_name = like.liked_category_name,
    )

    db.add(db_like)
    db.commit()
    db.refresh(db_like)
    return db_like

def get_likes(db: Session, limit: int = 100):
    likes = db.query(models.Like).limit(limit).all()

    return likes