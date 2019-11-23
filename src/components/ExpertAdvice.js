import React from 'react';
import {
	StyleSheet, Text, View, TouchableOpacity, Image,
} from 'react-native'
import Colors from '../constants/Colors'
import Icons from '../../assets/Icons'
import CustomSvg from './CustomSvg'

export default function Expert({ navigation }) {
  const { expert } = navigation.state.params
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {expert.name}
      </Text>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <CustomSvg
          D={Icons.arrow_left.D}
          fill={Colors.iconColor}
        />
      </TouchableOpacity>
      <Text style={styles.opinion}>
        {expert.opinion}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 24,
    left: 24,
  },
  title: {
    fontSize: 32,
    color: Colors.TextColor,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 16,
  },
  opinion: {
    fontSize: 16,
    color: Colors.TextColor,
    textAlign: 'center',
    marginBottom: 16,
  },
})
