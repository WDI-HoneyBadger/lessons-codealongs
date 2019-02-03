import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Header, Text, Left, Icon } from 'native-base';

class Settings extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Icon name="md-menu" onPress={() => {this.props.navigation.openDrawer()}}></Icon>
          </Left>
        </Header>
        <View>
          <Text>Placeholder For Settings</Text>
        </View>
      </Container>
    )
  }
}

export default Settings;