import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@material-ui/core';

const SwipeBase = (props) => {
    const MAXSWIPES = 15;
    const [swipes, setSwipes] = useState(0);

    const onClick = (event) => {
        props.setRecommendation(true);
        event.preventDefault();
    }
    return (
        <React.Fragment>
            <Button
                variant="outlined"
                color="primary"
                type="submit"
                onClick={onClick}
            >
                Swipe Simulator
            </Button>
        </React.Fragment>
    )
}

export default SwipeBase;