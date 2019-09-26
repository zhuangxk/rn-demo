/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import nodejs from 'nodejs-mobile-react-native';
import React, {Component} from 'react';
import {View, Button} from 'react-native';

export default class App extends Component {
  UNSAFE_componentWillMount() {
    nodejs.start('main.js');
    nodejs.channel.addListener(
      'message',
      msg => {
        alert('From node: ' + msg);
      },
      this,
    );
  }
  render() {
    return (
      <View>
        <Button
          title="Message Node"
          onPress={() => nodejs.channel.send('A message!')}
        />
      </View>
    );
  }
}
