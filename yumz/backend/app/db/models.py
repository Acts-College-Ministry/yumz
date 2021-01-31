import datetime
from collections import defaultdict

from sqlalchemy import Boolean, Column, ForeignKey, ARRAY, Integer,Float, String, DateTime
from sqlalchemy.orm import relationship, scoped_session

from .sql import Base



class User(Base):

    __tablename__ = "user"

    id = Column(Integer, primary_key=True)
    location = Column(String)
    created = Column(DateTime, default = datetime.datetime.utcnow)

    likes = relationship("Like", back_populates="user", lazy="subquery")

    def get_top_categories(self):
        '''
        return list of sorted categories
        '''
        top_categories_dict = defaultdict(int)

        for like in self.likes:
            top_categories_dict[like.liked_category_title] += 1
        
        top_categories = sorted(top_categories_dict.items(), key= lambda item : item[1], reverse=True)

        return top_categories



class Business(Base):
    __tablename__ = "business"

    id = Column(String, primary_key=True)
    name = Column(String, nullable=True)
    url = Column(String, nullable=False)
    phone = Column(String, nullable = True)
    is_closed = Column(Boolean, nullable=True)
    rating = Column(Float, nullable = True)


    likes = relationship("Like")

class Category(Base):
    __tablename__ = "category"

    title = Column(String, primary_key=True)

    likes = relationship("Like")


class Like(Base):
    __tablename__ = "like"
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("user.id"), nullable=False)
    
    # all likes are based on an image & business
    liked_image = Column(String, nullable = False)
    liked_business_id = Column(String, ForeignKey("business.id"), nullable=False)
    liked_category_title = Column(String, ForeignKey("category.title"), nullable=False)

    created = Column(DateTime, default = datetime.datetime.utcnow)

    user = relationship("User", back_populates="likes")
    business = relationship("Business", back_populates="likes")
    category = relationship("Category", back_populates="likes")



