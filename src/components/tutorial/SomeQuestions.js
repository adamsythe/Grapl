import React, { Component } from 'react';
import {
	StyleSheet, Text, View, TouchableOpacity,
} from 'react-native'

import {
	headerText,
	subHeaderText,
} from '../../data/SomeQuestionsData'

import PushNotifications from './PushNotifications'

export default class SomeQuestions extends Component{
  render (){
  const { navigation } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{headerText}</Text>
        <PushNotifications />
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation.navigate('Welcome')}
        >
          <View>
            <Text>Next</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    padding: 16,
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 32,
  },
  subHeader: {
    fontSize: 16,
  },
  nextButton: {
  	position: 'absolute',
  	bottom: 32,
  	right: 32,
  },
  buttonRow: {
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'stretch'
  },
  positiveButtonStyle: {
    backgroundColor: 'green',
    padding: 8,
  },
  negativeButtonStyle: {
    backgroundColor: 'red',
    padding: 8,
  },
})
