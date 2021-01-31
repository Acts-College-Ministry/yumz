import { Button } from '@material-ui/core';
import React, { useState, useEffect } from 'react';

import * as ROUTES from '../../constants/routes';

const HomePage = (props) => {
  //const [buttonClicked, setButtonClicked] = useState(true);
  const onClick = (event) => {
    props.history.push(ROUTES.ABOUT);
    event.preventDefault();
    //console.log("printed");
  }
  return (
    <React.Fragment>
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