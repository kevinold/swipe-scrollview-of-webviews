import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';
import ScrollReader from './ScrollReader';

//<WebView source={{ uri: 'https://kevinold.github.io/swipe-scrollview-of-webviews/web/one.html' }} />
class App extends React.Component {
  render() {
    return (
      <ScrollReader />
    );
  }
}

Expo.registerRootComponent(App);
