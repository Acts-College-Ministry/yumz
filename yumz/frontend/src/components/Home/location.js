import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@material-ui/core';

const LocationBase = (props) => {
  const [locationInput, setLocationInput] = useState('');
  
  const onChange = (event) => {
    setLocationInput(event.target.value);
  }
  const onSubmit = (event) => {
    console.log(event.target.value);
    props.setLocation(event.target.value);
    props.setSubmit(true);
    event.preventDefault();
  }
  return (
    <React.Fragment>
      <form onSubmit={(event) => onSubmit(event)}>
          <TextField
              label="Location"
              variant="outlined"
              value={locationInput}
              type="text"
              onChange={onChange}
              //InputProps={{ className: classes.input }}
              //className={classes.textfield}
          />
          <Button
              variant="outlined"
              color="primary"
              type="submit"
              disabled={(locationInput.length == 0)}
              //className={classes.submitButton}
          >
          Enter
          </Button>
      </form>
    </React.Fragment>
  )
}

export default LocationBase;