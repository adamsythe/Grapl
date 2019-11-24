import React, { Component } from 'react';
import {
	StyleSheet, Text, View, TouchableOpacity,
} from 'react-native'
import { connect } from 'react-redux'
import { fetchData } from '../actions/OnStart'
import { setAnswer } from '../actions/Question'
import Icons from '../../assets/Icons'
import CustomSvg from './CustomSvg'
import Colors from '../constants/Colors'

class QuestionScreen extends Component{
  async componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchData())
  }

  answerQuestion(answer) {
    const { dispatch, navigation } = this.props
    dispatch(setAnswer(answer))
    navigation.navigate('AnsweredQ')
  }

  render (){
  const { navigation, question } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Grapl
        </Text>
        <TouchableOpacity
          onPress={navigation.openDrawer}
          style={styles.burger}
        >
          <CustomSvg
            D={Icons.menu.D}
            fill={Colors.iconColor}
          />
        </TouchableOpacity>
        <View style={styles.questionHolder}>
          <Text style={styles.question}>{question}</Text>
        </View>
        <View style={styles.triangle} />
        <View style={styles.answers}>
        <TouchableOpacity
          onPress={() => this.answerQuestion(true)}
          style={styles.answerButton}
        >
          <CustomSvg
            D={Icons.checkmark.D}
            fill={'white'}
            size={24}
          />
        </TouchableOpacity>
        <View style={{ flex: 1 }} />
        <TouchableOpacity
          onPress={() => this.answerQuestion(false)}
          style={styles.answerButton}
        >
          <CustomSvg
            D={Icons.close.D}
            fill={'white'}
            size={24}
          />
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightYellow,
    padding: 24,
    alignItems: 'center',
  },
  question: {
    fontSize: 24,
    textAlign: 'center',
    textAlign: 'center',
    color: Colors.textColor,
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
  },
  questionHolder: {
    backgroundColor: Colors.mintGreen,
    padding: 32,
    borderRadius: 44,
    marginTop: 40,
    marginBottom: -5,
  },
  triangle: {
    borderTopWidth: 30,
    borderRightWidth: 30,
    borderBottomWidth: 0,
    borderLeftWidth: 30,
    borderTopColor: Colors.mintGreen,
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
  },
  answers: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    marginLeft: 48,
    marginRight: 48,
    marginTop: 48,
  },
  answerButton: {
    backgroundColor: 'black',
    borderRadius: 20,
    padding: 8,
  },
})

const mapStateToProps = state => {
  const {
    Question,
  } = state.rootReducer

  const { question, answer } = Question

  return {
    question,
    answer,
  }
}

export default connect(mapStateToProps)(QuestionScreen)

