import React, { useState, useEffect, useCallback } from 'react';
import { makeStyles, Button, TextField } from '@material-ui/core';

import request from 'superagent';

import { YELP_GET_URL, LIKES_CREATE_URL } from '../../constants/api';

const useStyles = makeStyles((theme) => ({
	picture: {
		backgroundColor:"#456784",
		position:"absolute",
		top:0,
		bottom:0,
		left:0,
		right:0,
		marginTop: 70,
		marginBottom: 55,
		marginLeft: 5,
		marginRight: 5,
		height:"auto",
		width:"auto",
    }
}));

const SwipeBase = (props) => {
    const MAX_SWIPES = 5;
    const [swipes, setSwipes] = useState(0.0);
    const [button, setButton] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [loadingPicture, setLoadingPicture] = useState(true);
    const [pictureUrl, setPictureUrl] = useState('');
    const [pictureDesc, setPictureDesc] = useState('');

    const onClickLike = (event) => {
        event.preventDefault();
        setButton('like');
        setLoadingPicture(true);
    }
    const onClickDislike = (event) => {
        event.preventDefault();
        setButton('dislike');
        setLoadingPicture(true);
    }
    const onClick = (event) => {
        event.preventDefault();
        setSwipes(0);
        props.handleRecommendation(true);
    }

    useEffect(() => {
        if (swipes<=MAX_SWIPES) {
            if (button==='like') {
                onSwipe();
                props.handleLikes(swipes);
                console.log('liked');
            } else if (button==='dislike') {
                console.log('disliked');
            }
        }
        return() => {
            setButton('');
            setSwipes(swipes+1);
            setPictureUrl(props.yelp[swipes].photos[0]);
            setPictureDesc(props.yelp[swipes].categories[0].title);
        }
    }, [button, swipes]
    );

    useEffect(() => {
        setPictureUrl(props.yelp[swipes].photos[0]);
        setPictureDesc(props.yelp[swipes].categories[0].title);
        return() => {
            setButton('');
        }, []
    })

    useEffect(() => {
        if (swipes===MAX_SWIPES) {
          props.handleRecommendation(true);
        }
      }, [swipes]
      );

    const onSwipe = useCallback(
      () => {
        setLoading(true);
        const likesMessage = {
            user_id:props.id.toString(),
            liked_image:props.yelp[swipes].photos[0],
            liked_business_id:props.yelp[swipes].id,
            liked_category_title:props.yelp[swipes].categories[0].title
        };
        console.log(likesMessage);
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
      [ setLoading, setError]
    );

    return (
        <React.Fragment>
            <img
                src={pictureUrl}
                alt={pictureDesc}
                onLoad={(() => setLoadingPicture(false))}
            />
            <form>
                <Button
                    variant="outlined"
                    color="primary"
                    type="submit"
                    name="dislike"
                    onClick={onClickDislike}
                    disabled={(swipes>=MAX_SWIPES)||(swipes>=props.yelp.length)||(loadingPicture)}
                    //className={classes.submitButton}
                >
                    Nah
                </Button>
                <Button
                    variant="outlined"
                    color="primary"
                    type="submit"
                    name="like"
                    onClick={onClickLike}
                    disabled={(swipes>=MAX_SWIPES)||(swipes>=props.yelp.length)||(loadingPicture)}
                    //className={classes.submitButton}
                >
                    Yum
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