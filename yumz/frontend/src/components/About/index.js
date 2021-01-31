import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@material-ui/core';

import * as ROUTES from '../../constants/routes';

const AboutPage = (props) => {
  const [buttonClicked, setButtonClicked] = useState(true);

  const onClick = (event) => {
    props.history.push(ROUTES.HOME);
    event.preventDefault();
  }

  return (
    <React.Fragment>
      This is the about page.
      <Button
        variant="outlined"
        color="primary"
        type="submit"
        onClick={onClick}
      >
        Back
      </Button>
    </React.Fragment>
  )
}

export default AboutPage;
