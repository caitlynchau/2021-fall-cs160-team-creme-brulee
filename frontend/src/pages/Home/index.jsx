import React from 'react';
import GridContainer from '../../components/GridContainer';
import GridItem from '../../components/GridItem';
import Parallax from '../../components/Parallax';
// import { Button } from '@material-ui/core';

function Home() {
  return (
    <div style={{ backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/9/9a/BellevueAndSeattle.jpg")` }}>
    <React.Fragment>
      <Parallax>
      <div className="home-text">
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <h1>Travel made simple</h1>
            <h4>Get inspired. Find new destinations. Travel the world. Discover
              new destinations and venues based on your preferences. 
            </h4>
            <a href="/signin" className="btn btn-primary btn-lg" role="button">Sign Up Here</a>
          </GridItem>
        </GridContainer>
        </div>
      </Parallax>
    </React.Fragment>
    </div>
  )
}

export default Home;