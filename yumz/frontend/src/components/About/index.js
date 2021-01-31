import { Button, Card } from '@material-ui/core';
import React, { useState, useEffect } from 'react';


const AboutPage = (props) => {
  const [buttonClicked, setButtonClicked] = useState(true);

  <link rel="Style" href="../src/About/styles.css"></link>

  return (
    <React.Fragment>
      This is the about page.      

    <Button>
      Hello world.
    </Button>
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '15vh'}}>
      <h1> Who We Are </h1>
    </div>

    <Card>
      <img 
      src="FishBoy.jpg" 
      alt="Patrick" 
      style={{width: '25%', height: '50%'}} 
      border = "1px solid #03bfcb"
      border-radius = "50%"
      padding = "7px"
    ></img>
    </Card>
    <div class="card">
      <img 
        src="FishBoy.jpg" 
        alt="Patrick" 
        style={{width: '25%', height: '50%'}} 
        border = "1px solid #03bfcb"
        border-radius = "50%"
        padding = "7px"
      ></img>
      <h1>Patrick Lee</h1>
      <p class="title">CEO & Founder, Example</p>
      <p>Harvard University</p>
    </div>

    </React.Fragment>
  )
}

export default AboutPage;
