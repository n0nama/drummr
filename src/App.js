import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { Container, Grid, Header, Icon } from 'semantic-ui-react';

import DrummrGrid from './components/DrummrGrid';

class App extends Component {
  render(){
    return (
      <Container>
        <Grid padded>
          <Grid.Column width={16}>
            <Header as='h1'>
              <Icon name='th' />
              <Header.Content>DRUMMR</Header.Content>
            </Header>
          </Grid.Column>
          <Grid.Column width={4} textAlign='center'></Grid.Column>
          <Grid.Column width={8} textAlign='center'>
            <DrummrGrid />
          </Grid.Column>
          <Grid.Column width={4} textAlign='center'></Grid.Column>
        </Grid>
      </Container>
    )
  }

}

export default App;
