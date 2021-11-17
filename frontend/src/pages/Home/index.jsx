import React from 'react';
import GridContainer from '../../components/GridContainer';
import GridItem from '../../components/GridItem';
import Parallax from '../../components/Parallax';
import { Button } from '@material-ui/core';

function Home() {
  return (
    <React.Fragment>
      <Parallax>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <h1>Travel made simple</h1>
            <h4>Get inspired. Find new destinations. Travel the world. Discover
              new destinations and venues based on your preferences. 
            </h4>
            <Button href="/signin">
              Sign up here
            </Button>
          </GridItem>
        </GridContainer>
      </Parallax>
    </React.Fragment>
  )
}

export default Home;