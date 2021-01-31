import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';

import Location from './location';

import * as ROUTES from '../../constants/routes';

const HomePage = (props) => {
  //const [buttonClicked, setButtonClicked] = useState(true);
  const onClick = (event) => {
    props.history.push(ROUTES.ABOUT);
    event.preventDefault();
  }
  return (
    <React.Fragment>
      <Location />
      <Button
        variant="outlined"
        color="primary"
        type="submit"
        onClick={onClick}
      >
        About Us
      </Button>
    </React.Fragment>
  )
}

export default HomePage;