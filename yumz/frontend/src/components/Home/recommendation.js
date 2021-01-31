import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@material-ui/core';

const RecommendationBase = (props) => {
    const onClick = (event) => {
        props.setLocation(null);
        props.setID(null);
        props.setRecommendation(false);
        event.preventDefault();
    }
    return (
        <React.Fragment>
            Here's your recommendation.
            Thanks for swiping, come again!
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