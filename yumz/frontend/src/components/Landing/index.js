import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
import { Grid, Button, ButtonBase } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#ffabc1"
				},
		secondary: {
			main: "#ffffff"
				}
			},
fontFamily: "Roboto"
});

const useStyles = makeStyles({
  root: {
    minWidth: 275,
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
		<div style={{backgroundColor: "#ffabc1"}}>
		<Grid container direction="column" alignItems="center" justify="center" style={{ minHeight: '100vh' }}>
	      <Card className={classes.root} justify="center">
	        <CardContent align="center">
	          <img 
	          className={classes.media} 
	          src="img/yumz2.png"
	          style={{width: '100%', height: '100%'}}
	          ></img>
	        </CardContent>
	      </Card>
			<Link underline='none' to={'/home'} style={{ textDecoration: 'none' }}>
				<Card className={classes.root}>
			    	<CardContent style={{backgroundColor: "pink"}} className={classes.nopad}>
			        	<Typography variant="h3">
			          	Wanna Eat?
			        	</Typography>
			      	</CardContent>
			    </Card>
		    </Link>
		</Grid>
		</div>
	);
}

