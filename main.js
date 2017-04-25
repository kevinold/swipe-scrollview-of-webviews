import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';

class App extends React.Component {
  render() {
    return (
      <WebView source={{ uri: 'https://kevinold.github.io/swipe-scrollview-of-webviews/web/one.html' }} />
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

Expo.registerRootComponent(App);
