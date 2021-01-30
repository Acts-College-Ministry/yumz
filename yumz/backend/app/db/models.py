import datetime

from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, DateTime
from sqlalchemy.orm import relationship, scoped_session

from .sql import Base



class User(Base):

    __tablename__ = "user"

    id = Column(Integer, primary_key=True)
    location = Column(String)
    created = Column(DateTime, default = datetime.datetime.utcnow)

    likes = relationship("Like", back_populates= "user")
    category_likes = relationship("LikeCategory", back_populates= "user")

   


class Like(Base):
    __tablename__ = "like"
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("user.id"), nullable=False)
    created = Column(DateTime, default = datetime.datetime.utcnow)

    user = relationship("User", back_populates="likes")


class LikeCategory(Like):
    __tablename__ = "like_category"

    id = Column(Integer, ForeignKey('like.id'), primary_key=True)
    category = Column(String, nullable=False)

    __mapper_args__ = {
        "polymorphic_identity": "like_category"
    }

