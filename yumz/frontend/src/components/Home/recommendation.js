import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';

const RecommendationBase = (props) => {
    const onClick = (event) => {
        event.preventDefault();
        props.handleLocation('');
        props.setID('');
        props.handleRecommendation(false);
    }
    function getRandomInt() {
        return Math.floor(Math.random() * Math.floor(props.yelp.length));
      }
    const index = getRandomInt();
    return (
        <React.Fragment>
            {
            (props.likes.length!==0)
            ?
            <div>
                <h2>We recommend:</h2>
                <h4>{props.yelp[index].name}</h4>
                <img
                    src={props.yelp[index].photos[0]}
                    alt={props.yelp[index].id}
                />
            </div>
            : <div> Swipe right at least once to get a recommendation! </div>
            }
            <Button
              variant="outlined"
              color="primary"
              type="submit"
              onClick={onClick}
              //className={classes.submitButton}
            >
            Swipe Again!
            </Button>
        </React.Fragment>
    )
}

export default RecommendationBase;