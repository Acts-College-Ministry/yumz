import React, { useState, useEffect, useCallback } from 'react';
import { Button, TextField } from '@material-ui/core';

import request from 'superagent';

import { YELP_GET_URL, LIKES_CREATE_URL } from '../../constants/api';

const SwipeBase = (props) => {
    const MAX_SWIPES = 15;
    const [swipes, setSwipes] = useState(0);
    const [button, setButton] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const onClickLike = (event) => {
        event.preventDefault();
        setButton('like');
    }
    const onClickDislike = (event) => {
        event.preventDefault();
        setButton('dislike');
    }
    const onClick = (event) => {
        event.preventDefault();
        setSwipes(0);
        props.setRecommend(true);
    }

    const onSwipe = useCallback(
      (event) => {
        event.preventDefault();
        setSwipes(swipes+1);
        setLoading(true);
        const likesMessage = {
            user_id:'i',
            liked_image:"kk",
            liked_business_id:"ll",
            liked_category_title:"ll"
        };
        request
          .post(LIKES_CREATE_URL)
          .send(likesMessage)
          .then(response => {
            setLoading(false);
            console.log(response.body);
          })
          .catch(error => {
            setLoading(false);
            setError(error);
          });
      },
      [setSwipes, setLoading, setError]
    );

    return (
        <React.Fragment>
            <form onSubmit={(event)=>(button==='like') ? onSwipe(event) : null}>
            <Button
                variant="outlined"
                color="primary"
                type="submit"
                name="like"
                onClick={onClickLike}
                //className={classes.submitButton}
            >
                Yum
            </Button>
            <Button
                variant="outlined"
                color="primary"
                type="submit"
                name="dislike"
                onClick={onClickDislike}
                //className={classes.submitButton}
            >
                Nah
            </Button>
                </form>
                <Button
                    variant="outlined"
                    color="primary"
                    type="submit"
                    onClick={onClick}
                    disabled={swipes!==MAX_SWIPES}
                >
                    Recommend a restuarant!
                </Button>
        </React.Fragment>
    )
}

export default SwipeBase;