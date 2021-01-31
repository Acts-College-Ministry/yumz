import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';

import Location from './location';
import Swipe from './swipe';
import Recommendation from './recommendation';

import * as ROUTES from '../../constants/routes';

const HomePage = (props) => {
  const [location, setLocation] = useState('');
  const [submit, setSubmit] = useState(false);
  const [recommendation, setRecommendation] = useState(false);

  const onClick = (event) => {
    props.history.push(ROUTES.ABOUT);
    event.preventDefault();
  }
  return (
    <React.Fragment>


      {
        (location === '')
        &&
        (!submit)
        &&
        (!recommendation)
        &&
        <Location
          setLocation={setLocation}
          setSubmit={setSubmit}
        />
      }
      {
        (submit)
        &&
        (!recommendation)
        &&
        <Swipe
          setRecommendation={setRecommendation}
        />
      }
      {
        (submit)
        &&
        (recommendation)
        &&
        <Recommendation />
      }
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