import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Header, Text, Left, Icon } from 'native-base';


class Profile extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Icon name="md-menu" onPress={() => {this.props.navigation.openDrawer()}}></Icon>
          </Left>
        </Header>
        <View>
          <Text>Placeholder For Profile</Text>
        </View>
      </Container>
    )
  }
}

export default Profile;

