import React, { Component } from 'react'
import {
	StyleSheet, SafeAreaView, StatusBar,
} from 'react-native'
import AppBaseNav from '../navigation/AppBaseNav'
import Colors from '../constants/Colors'

export default class AppRoot extends Component {
	render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
        	backgroundColor={Colors.dullGreen}
        	barStyle="light-content"
        />
       	<AppBaseNav />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dullGreen,
  },
});