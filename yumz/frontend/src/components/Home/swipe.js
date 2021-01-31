import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@material-ui/core';

const SwipeBase = (props) => {
    const onClick = () => {
        props.setRecommendation(true);
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