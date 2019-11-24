import React, { Component } from 'react';
import {
	StyleSheet, Text, View, TouchableOpacity, Button,
} from 'react-native'
import { connect } from 'react-redux'
import { fetchData } from '../actions/OnStart'
import Icons from '../../assets/Icons'
import CustomSvg from './CustomSvg'
import Colors from '../constants/Colors'

class AnsweredQ extends Component{
  async componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchData())
  }

  render (){
  const { navigation, question } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Explore Further</Text>
        <View style={styles.descriptionHolder}>
          <Text style={styles.pageDescription}>Congratulations for answering todays question! {'\n'} {'\n'} Have a look at some other ways to further explore todays question.</Text>
        </View>
        <View style={styles.optionsHolder}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Experts')}
            style={styles.buttonOption}
          >
            <Text style={styles.buttonText}>Expert opinions</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Message')}
            style={styles.buttonOption}
          >
            <Text style={styles.buttonText}>
              Message us with your answer
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Favourite answers')}
            style={styles.buttonOption}
          >
            <Text style={styles.buttonText}>
              Our favourite answers
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Suggestion')}
            style={styles.buttonOption}
          >
            <Text style={styles.buttonText}>
              Suggest a question
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('QuestionScreen')}
            style={styles.buttonOption}
          >
            <Text style={styles.buttonText}>
              Create a new answer
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={navigation.openDrawer}
          style={styles.burger}
        >
          <CustomSvg
            D={Icons.menu.D}
            fill={Colors.iconColor}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dullGreen,
    padding: 24,
  },
  title: {
    fontSize: 24,
    color: Colors.headerTextColor,
    textAlign: 'center',
  },
  help: {
    position: 'absolute',
    top: 24,
    right: 24,
  },
  pageDescription: {
    fontSize: 18,
    color: Colors.textColor,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  optionsHolder: {
    backgroundColor: Colors.lightYellow,
    padding: 32,
    borderRadius: 44,
    marginTop: 40,
  },
  burger: {
    position: 'absolute',
    top: 24,
    left: 24,
  },
  descriptionHolder: {
    backgroundColor: Colors.mintGreen,
    padding: 32,
    borderRadius: 44,
    marginTop: 40,
  },
  buttonOption: {
    borderColor: Colors.textColor,
    borderWidth: 2,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    marginTop: 12,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 13,
    color: Colors.textColor,
    textAlign: 'center',
    fontWeight: 'bold',
  },
})

const mapStateToProps = state => {
  const {
    Question,
  } = state.rootReducer

  const { question, answer } = Question

  return {
    question,
  }
}

export default connect(mapStateToProps)(AnsweredQ)

