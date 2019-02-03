import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Header, Text, Form, Input, Button, Item } from 'native-base';

class Landing extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Text style={styles.myText}>Imma header</Text>
        </Header>
        <Form>
          <Item>
            <Input placeholder="username"></Input>
          </Item>
          <Item>
            <Input placeholder="password"></Input>
          </Item>
          <Button></Button>
        </Form>
      </Container>
    )
  }
}

export default Landing;

const styles = StyleSheet.create({
  myText: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 39
  },
  red: {
    color: 'red'
  }
})