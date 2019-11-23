import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class Resources extends Component {
  render() {
    return (
      <WebView
        originWhitelist={['*']}
        source={{uri: 'http://www.thewarriorproject.org.za/resources/'}}
      />
    );
  }
}
  
export default Resources