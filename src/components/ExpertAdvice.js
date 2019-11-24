import React from 'react';
import {
	StyleSheet, Text, View, TouchableOpacity, Image, ScrollView,
} from 'react-native'
import Colors from '../constants/Colors'
import Icons from '../../assets/Icons'
import CustomSvg from './CustomSvg'

export default function Expert(props) {
  const { navigation } = props
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
    <ScrollView style={{flex: 1, marginTop: 40}}>
    <View>
      <Text style={styles.opinion}>
        {expert.opinion}{expert.opinion}{expert.opinion}{expert.opinion}{expert.opinion}{expert.opinion}{expert.opinion}{expert.opinion}{expert.opinion}
      </Text>
    </View>
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundColor,
    padding: 24,
    flex: 1,
  },
  backButton: {
    position: 'absolute',
    top: 24,
    left: 24,
  },
  title: {
    fontSize: 24,
    color: Colors.headerTextColor,
    textAlign: 'center',
  },
  opinion: {
    fontSize: 16,
    color: Colors.textColor,
    textAlign: 'center',
    marginBottom: 16,
  },
})
