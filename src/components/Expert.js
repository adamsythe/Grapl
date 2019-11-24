import React from 'react';
import {
	StyleSheet, Text, View, TouchableOpacity, Image,
} from 'react-native'
import Colors from '../constants/Colors'

export default function Expert({ expert, goToExpertAdvice }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={goToExpertAdvice}
    >
    <View style={styles.content}>
      <Image
        source={expert.avatar}
        style={styles.avatar}
      />
      <Text style={styles.name}>
        {expert.name}
      </Text>
      <Text style={styles.description}>
        {expert.description}
      </Text>
    </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 24,
    marginTop: 24,
  },
  content: {
    alignItems: 'center',
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 45,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: Colors.textColor,
  },
  description: {
    fontSize: 16,
    color: Colors.textColor,
    textAlign: 'center',
  },
  name: {
    fontSize: 16,
    color: Colors.textColor,
    textAlign: 'center',
    marginBottom: 12,
    fontWeight: 'bold',
  },
})
