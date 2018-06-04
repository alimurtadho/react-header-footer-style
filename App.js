/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import Header from './src/component/Header';
import Content from './src/component/Content';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Header title="header" backgroundColor="red" />

        <View style={{ backgroundColor: 'green', flex: 2 }}>
          <Text style={{ color: 'white' }}>content header</Text>


        </View>
        <View style={{
          backgroundColor: 'blue',
          // flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <View style={{ width: 150, height: 50, backgroundColor: 'powderblue' }} />
          <View style={{ width: 100, height: 50, backgroundColor: 'skyblue' }} />
          <View style={{ width: 75, height: 50, backgroundColor: 'steelblue' }} />
        </View>

        <TouchableOpacity
          onPress={() => {
            console.log('Press')
          }}
          style={{  alignSelf: 'center', backgroundColor: 'black', padding: 16, width: 200 }}
        >
          <Text style={{ color: 'white' }}>Learn More</Text>
        </TouchableOpacity>

        <View style={{ padding: 16, backgroundColor: 'yellow', flex: 1, }}>
          <View style={{ backgroundColor: '#CCC', flex: 1 }}>
          </View>
          <Content title="content2" />
          <View style={{ backgroundColor: 'black', flex: 1 }}>
          </View>
          <View style={{ backgroundColor: '#CCC', flex: 1 }}>
          </View>
        </View>
        <Content title="content1" backgroundColor="white" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
