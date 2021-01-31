import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';

import Location from './location';
import Swipe from './swipe';
import Recommendation from './recommendation';
import withSession from './session';

import * as ROUTES from '../../constants/routes';

const HomePage = (props) => {
  const [location, setLocation] = useState('');
  const [id, setID] = useState('');
  const [yelp, setYelp] = useState({});
  const [recommendation, setRecommendation] = useState(false);

  const onClick = (event) => {
    props.history.push(ROUTES.ABOUT);
    event.preventDefault();
  }

  const handleLocation = (location) => {
    setLocation(location);
  }
  const handleID = (id) => {
    setID(id);
  }
  const handleYelp = (yelpData) => {
    setYelp(yelpData);
  }
  return (
    <React.Fragment>


      {
        (location.length===0)
        &&
        <Location
          location={location}
          id={id}
          yelp={yelp}
          handleLocation={handleLocation}
          handleID={handleID}
          handleYelp={handleYelp}
        />
      }
      {
        (location.length!==0)
        &&
        (!recommendation)
        &&
        <Swipe
          id={id}
          yelp={yelp}
          location={location}
          setRecommendation={setRecommendation}
        />
      }
      {
        (id!=='')
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