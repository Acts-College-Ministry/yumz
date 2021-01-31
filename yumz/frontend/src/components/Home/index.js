import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';

import Location from './location';
import Swipe from './swipe';
import Recommendation from './recommendation';
import withSession from './session';

import * as ROUTES from '../../constants/routes';

const HomePage = (props) => {
  const [location, setLocation] = useState('');
  const [id, setID] = useState(null);
  const [yelp, setYelp] = useState({});
  const [recommendation, setRecommendation] = useState(false);

  const onClick = (event) => {
    props.history.push(ROUTES.ABOUT);
    event.preventDefault();
  }
  return (
    <React.Fragment>


      {
        (id===null)
        &&
        (!recommendation)
        &&
        <Location
          setLocation={setLocation}
        />
      }
      {
        (id!==null)
        &&
        (!recommendation)
        &&
        <Swipe
          location={location}
          setRecommendation={setRecommendation}
        />
      }
      {
        (id!==null)
        &&
        (recommendation)
        &&
        <Recommendation 
          setLocation={setLocation}
          setID={setID}
          setRecommendation={setRecommendation}
        />
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