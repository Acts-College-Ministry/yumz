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
