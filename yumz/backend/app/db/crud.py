from sqlalchemy.orm import Session

from . import models, schemas

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
