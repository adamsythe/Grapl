import React, { Component } from 'react';
import {
	StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView,
} from 'react-native'
import { connect } from 'react-redux'
import Icons from '../../assets/Icons'
import CustomSvg from './CustomSvg'
import Colors from '../constants/Colors'
import {
  setAge,
  setGender,
  setRace,
  setSexOrient,
  setCity,
} from '../actions/User'

class Profile extends Component{
  render (){
  const {
    navigation,
    dispatch,
    age,
    gender,
    sexOrient,
    race,
    city,
  } = this.props
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Profile</Text>
          <Text style={styles.pageDescription}>While using this app you will always be anonymous, even to us.  However we would really love to know a little bit about our users so if you could fill in the information below it would be a big help!</Text>
          <TouchableOpacity
            onPress={navigation.openDrawer}
            style={styles.burger}
          >
            <CustomSvg
              D={Icons.menu.D}
              fill={Colors.iconColor}
            />
          </TouchableOpacity>
          <View style={styles.rowInput}>
            <TextInput
              placeholder={'Age'}
              style={styles.input}
              onChangeText={text => dispatch(setAge(text))}
              keyboardType={'numeric'}
              value={age}
              maxLength={3}
            />
            <View style={{ flex: 1 }} />
            <TextInput
              placeholder={'Gender'}
              style={styles.input}
              onChangeText={text => dispatch(setGender(text))}
              value={gender}
              maxLength={10}
            />
          </View>
          <View style={styles.rowInput}>
            <TextInput
              placeholder={'Sexual Orientation'}
              style={styles.input}
              onChangeText={text => dispatch(setSexOrient(text))}
              value={sexOrient}
              maxLength={20}
            />
            <View style={{ flex: 1 }} />
            <TextInput
              placeholder={'Race'}
              style={styles.input}
              onChangeText={text => dispatch(setRace(text))}
              value={race}
              maxLength={20}
            />
          </View>
          <TextInput
            placeholder={'City'}
            style={styles.cityInput}
            onChangeText={text => dispatch(setCity(text))}
            value={city}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightYellow,
    padding: 20,
    alignItems: 'center',
  },
  pageDescription: {
    fontSize: 18,
    color: Colors.textColor,
    marginBottom: 72,
    marginTop: 24,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    paddingTop: 20,
  },
  burger: {
    position: 'absolute',
    top: 24,
    left: 24,
  },
  title: {
    fontSize: 24,
    color: Colors.headerTextColor,
    textAlign: 'center',
    marginBottom: 40,
  },
  input: {
    paddingBottom: 12,
    borderBottomWidth: 2,
    borderBottomColor: Colors.underLineTextInput,
    width: 144,
    textAlign: 'center',
    marginBottom: 32,
    color: Colors.textColor,
  },
  rowInput: {
    flexDirection: 'row',
  },
  cityInput: {
    paddingBottom: 12,
    borderBottomWidth: 2,
    borderBottomColor: Colors.underLineTextInput,
    textAlign: 'center',
    marginBottom: 32,
    marginTop: 16,
    color: Colors.textColor,
  },
})

const mapStateToProps = state => {
  const {
    User,
  } = state.rootReducer

  const { age,
    gender,
    sexOrient,
    race,
    city,
  } = User

  return {
    age,
    gender,
    sexOrient,
    race,
    city,
  }
}

export default connect(mapStateToProps)(Profile)

