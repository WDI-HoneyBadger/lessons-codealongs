import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Landing from './views/Landing';
import Profile from './views/Profile';
import Settings from './views/Settings';
import { Container, Header } from 'native-base';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

const MyDrawerNavigator = createDrawerNavigator({
  Profile: {
    screen: Profile
  },
  Settings: {
    screen: Settings
  }
})

const MyApp = createAppContainer(MyDrawerNavigator)

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: false
    }
  }
  renderContent() {
    return this.state.user ? <MyApp></MyApp> : <Landing/>
  }
  render() {
    return (
      <Container>
        {this.renderContent()}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
