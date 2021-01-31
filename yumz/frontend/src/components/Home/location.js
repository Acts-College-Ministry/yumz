import React, { useState, useCallback } from 'react';
import { Button, TextField } from '@material-ui/core';

import { USER_CREATE_URL } from '../API';
import request from 'superagent';

const createUser = (lc, setID) => {

  request
      .post(USER_CREATE_URL)
      .send({location:lc})
      .set('Access-Control-Allow-Origin', '*')
      //.withCredentials()
      .set('accept', 'json')
      .end((err,res) => {
          if (!err) {
              console.log(res.body);
              setID(res.body.id)
              } 
          }
      );

}

const LocationBase = (props) => {
  const [locationInput, setLocationInput] = useState('');
  const [id, setID] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  
  const onChange = (event) => {
    setLocationInput(event.target.value);
  }
  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();
      setLoading(true);
      request
        .post(USER_CREATE_URL)
        .send({location:locationInput})
        .then(response => {
          setLoading(false);
          console.log(response.body);
          setID(response.body.id);
          props.setSubmit(true);
        })
        .catch(error => {
          setLoading(false);
          setError(error);
        });
    }
  );

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