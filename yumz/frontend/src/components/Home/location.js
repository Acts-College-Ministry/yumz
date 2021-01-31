import React, { useState, useEffect,useCallback } from 'react';
import { Button, TextField } from '@material-ui/core';

import { YELP_GET_URL, USER_CREATE_URL } from '../../constants/api';
import request from 'superagent';

const LocationBase = (props) => {
  const [click, setClick] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [loadingYelp, setLoadingYelp] = useState(false);
  const [errorYelp, setErrorYelp] = useState(false);

  const [locationInput, setLocationInput] = useState('');
  const [id, setID] = useState('');
  const [yelp, setYelp] = useState({});

  const onChange = (event) => {
    event.preventDefault();
    setLocationInput(event.target.value);
  }

  const onClick = (event) => {
    event.preventDefault();
    setClick(true);
  }

  useEffect(() => {
    console.log("yelp data in")
    console.log(yelp);
    props.handleLocation(locationInput);
    props.handleID(id);
    props.handleYelp(yelp);
  }, [yelp]
  );

  const onRequestYelp = useCallback(
      (url) => {
        setLoadingYelp(true);
        request
        .get(url)
          .then(response => {
            setLoadingYelp(false);
            setYelp(response.body)
          })
          .catch(error => {
            setLoadingYelp(false);
            setErrorYelp(error);
          });
      },
      [setLoadingYelp, setErrorYelp]
    );

  useEffect(() => {
    console.log(id);
    let url = YELP_GET_URL+'?location='+locationInput;
    if (locationInput!=='') {
      onRequestYelp(url);
    }
  }, [id]
  );

  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();
      setLoading(true);
      request
        .post(USER_CREATE_URL)
        .send({location:locationInput})
        .then(response => {
          setLoading(false);
          //props.handleID(response.body.id);
          setID(response.body.id);
          setSubmit(true);
          console.log(response.body);
        })
        .catch(error => {
          setLoading(false);
          setError(error);
        });
    },
    [setLoading, setError, setClick]
  );

  return (
    <React.Fragment>
      <form onSubmit={(event) => onSubmit(event)}>
          <TextField
              label="Location"
              variant="outlined"
              value={locationInput}
              type="text"
              onChange={(event) => onChange(event)}
              //InputProps={{ className: classes.input }}
              //className={classes.textfield}
          />
          <Button
              variant="outlined"
              color="primary"
              type="submit"
              align="center"
              disabled={((locationInput==='') || submit)}
              //onClick={onClick}
              //className={classes.submitButton}
          >
          Enter
          </Button>
      </form>
    </React.Fragment>
  )
}

export default LocationBase;