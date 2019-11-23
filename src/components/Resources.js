import React, { Component } from 'react';
import { WebView } from 'react-native';
import { connect } from 'react-redux'

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

const mapStateToProps = state => { 

}
  
export default connect({})(Resources)