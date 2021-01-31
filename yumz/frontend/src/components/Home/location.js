import React, { useState, useEffect,useCallback } from 'react';
import { Button, TextField } from '@material-ui/core';

import { YELP_GET_URL, USER_CREATE_URL } from '../../constants/api';
import request from 'superagent';

const LocationBase = (props) => {
  const [locationInput, setLocationInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [id, setID] = useState('');

  const onRequestYelp = useCallback(
      () => {
        setLoading(true);
        request
        .get(`${YELP_GET_URL}?location=${props.location}`)
          .then(response => {
            setLoading(false);
            props.setYelp(response.body.items);
          })
          .catch(error => {
            setLoading(false);
            setError(error);
          });
      },
      [loading, error]
    );

    useEffect(() => {
      onRequestYelp();
      }, [id]
    );
  
  const onChange = (event) => {
    setLocationInput(event.target.value);
    props.setLocation(event.target.value);
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
          console.log(id);
        })
        .catch(error => {
          setLoading(false);
          setError(error);
        });
    },
    [setLoading, setError, setID]
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