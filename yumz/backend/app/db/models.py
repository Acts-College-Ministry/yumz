import datetime

from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, DateTime
from sqlalchemy.orm import relationship, scoped_session

from .sql import Base



class User(Base):

    __tablename__ = "user"

    id = Column(Integer, primary_key=True)
    location = Column(String)
    created = Column(DateTime, default = datetime.datetime.utcnow)

    likes = relationship("Like")

class Business(Base):
    __tablename__ = "business"

    id = Column(String, primary_key=True)
    name = Column(String, nullable=True)
    url = Column(String, nullable=False)

    likes = relationship("Like")

class Category(Base):
    __tablename__ = "category"

    name = Column(String, primary_key=True)
    likes = relationship("Like")


class Like(Base):
    __tablename__ = "like"
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("user.id"), nullable=False)
    
    # all likes are based on an image & business
    liked_image = Column(String, nullable = False)
    liked_business_id = Column(String, ForeignKey("business.id"), nullable=False)
    liked_category_name = Column(String, ForeignKey("category.name"), nullable=False)

    created = Column(DateTime, default = datetime.datetime.utcnow)

    user = relationship("User", back_populates="likes")
    business = relationship("Business", back_populates="likes")
    category = relationship("Category", back_populates="likes")


