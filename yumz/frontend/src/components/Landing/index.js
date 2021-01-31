import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
import { Grid, Button, ButtonBase } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  cardAction: {
    display: 'block',
    textAlign: 'initial'
  },
  title: {
    fontSize: 14,
  },
  media: {
  	height: 20,
    width: 20,
    objectFit: 'cover',
  },
  pos: {
  	marginTop: 12,
    marginBottom: 12,
  },
  nopad: {
  	padding: 0,
    "&:last-child": {
      paddingBottom: 0
    }
  },
});

export default function LandingPage() {
	const classes = makeStyles();
	return(
		<Grid container direction="column" alignItems="center" justify="center" style={{ minHeight: '100vh' }}>
      <Card className={classes.root} justify = "center">
        <CardContent align = "center">
          <img 
          className={classes.media} 
          src="img/yumz.jpg"
          style={{width: '50%', height: '25%'}}
          ></img>
        </CardContent>
      </Card>
			<Link underline='none' to={'/home'} style={{ textDecoration: 'none' }}>
				<Card className={classes.root}>
			    	<CardContent className={classes.nopad}>
			        	<Typography variant="h1">
			          	HUNGRY ?
			        	</Typography>
			      	</CardContent>
			    </Card>
		    </Link>
		</Grid>
	);
}

