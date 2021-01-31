import { Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { blueGrey } from '@material-ui/core/colors';
import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@material-ui/core';

import * as ROUTES from '../../constants/routes';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    maxWidth: 345,
  },
});

const AboutPage = (props) => {
  const [buttonClicked, setButtonClicked] = useState(true);

  const onClick = (event) => {
    props.history.push(ROUTES.HOME);
    event.preventDefault();
  }

  const classes = useStyles();
  
  return (
    <React.Fragment>
      <Button
        variant="outlined"
        color="primary"
        type="submit"
        onClick={onClick}
      >
        Back
      </Button>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '15vh'}}>
        <h1> 
          Who We Are
        </h1>
      </div>
      <div style={{justifyContent:'center', alignItems:'center'}}>
        <Typography align='center'>
          We are 4 hungry college boys that love to code! 
          Big shoutout to our friend, Lucy Yang, for giving us the idea
          to create a swiping app to help decide where to eat. 
        </Typography>
      </div>
      <div style = {{ display: "inline-flex" }}>
      <Card  className={classes.root} component="div" >
        <CardContent>
          <img 
          src="FishBoy.jpg" 
          alt="Patrick" 
          style={{width: '100%', height: '100%'}} 
          border = "1px solid #03bfcb"
          border-radius = "50%"
          padding = "7px"
          box-shadow = "blue"
          ></img>
          <Typography gutterBottom variant="h5" component="h2">
            Patrick Lee
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root} component="div" display="inline">
        <CardContent>
          <img 
          src="Corey.jpg" 
          alt="Corey" 
          style={{width: '100%', height: '100%'}} 
          border = "1px solid #03bfcb"
          border-radius = "50%"
          padding = "7px"
          box-shadow = "blue"
          ></img>
          <Typography gutterBottom variant="h5" component="h2">
            Corey Tan
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root} component="div" display="inline">
        <CardContent>
          <img 
          src="John.jpg" 
          alt="John" 
          style={{width: '100%', height: '100%'}} 
          border = "1px solid #03bfcb"
          border-radius = "50%"
          padding = "7px"
          box-shadow = "blue"
          ></img>
          <Typography gutterBottom variant="h5" component="h2">
            John Yu
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root} component="div" display="inline">
        <CardContent>
          <img 
          src="Nate.png" 
          alt="Nate" 
          style={{width: '100%', height: '100%'}} 
          border = "1px solid #03bfcb"
          border-radius = "50%"
          padding = "7px"
          box-shadow = "blue"
          ></img>
          <Typography gutterBottom variant="h5" component="h2">
            Nate Tisuela
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </Card>
      </div>
      
    </React.Fragment>
  )
}

export default AboutPage;
