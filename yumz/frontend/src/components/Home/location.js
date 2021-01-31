import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@material-ui/core';

import * as ROUTES from '../../constants/routes';

const LocationBase = (props) => {
  const [location, setLocation] = useState('');
  const [submitt, setSubmitt] = useState(false);
  const [suggest, setSuggest] = useState(false);
  
  const onClick = (event) => {
    props.history.push(ROUTES.ABOUT);
    event.preventDefault();
  }
  const onChange = (event) => {
    setLocation(event.target.value);
  }
  const onSubmit = (event) => {
    console.log(event.target.value);
  }
  return (
    <React.Fragment>
      <form onSubmit={(event) => onSubmit(event)}>
          <TextField
              label="Location"
              name="location"
              variant="outlined"
              value={location}
              type="text"
              onChange={onChange}
              //InputProps={{ className: classes.input }}
              //className={classes.textfield}
          />
          <Button
              variant="outlined"
              color="primary"
              type="submit"
              disabled={(location.length == 0)}
              //className={classes.submitButton}
          >
          Enter
          </Button>
      </form>
    </React.Fragment>
  )
}

export default LocationBase;