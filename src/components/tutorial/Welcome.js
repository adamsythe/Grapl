import React from 'react';
import {
	StyleSheet, Text, View, TouchableOpacity,
} from 'react-native'

import {
	headerText,
	subHeaderText,
} from '../../data/WelcomeData'

export default function Welcome(props) {
  const { navigation } = props
  return (
    <View style={styles.container}>
    	<Text style={styles.header}>{headerText}</Text>
    	<Text style={styles.subHeader}>{subHeaderText}</Text>
    	<TouchableOpacity
    		style={styles.nextButton}
    		onPress={() => navigation.navigate('About')}
    	>
    		<View>
    			<Text>Next</Text>
    		</View>
    	</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
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
  }
})
