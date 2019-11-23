import React from 'react';
import {
	StyleSheet, Text, View, TouchableOpacity,
} from 'react-native'

import {
	headerText,
	subHeaderText,
} from '../../data/SomeQuestionsData'

export default function PushNotifications(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.subHeader}>Our questions are challening and some may even make you a little uncomfortable, would you like to answer these questions through push notifications?</Text>
      <View style={styles.buttonRow}>
      <TouchableOpacity
        style={styles.positiveButtonStyle}
        onPress={() => console.log('yes')}
      >
        <View>
          <Text>Yes</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.negativeButtonStyle}
        onPress={() => console.log('no')}
      >
        <View>
          <Text>No</Text>
        </View>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    padding: 16,
    alignItems: 'center',
  },
  subHeader: {
    fontSize: 16,
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
