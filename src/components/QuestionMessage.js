import React, { Component } from 'react';
import {
	StyleSheet, Text, View, TouchableOpacity, TextInput,
} from 'react-native'
import { connect } from 'react-redux'
import Icons from '../../assets/Icons'
import CustomSvg from './CustomSvg'
import Colors from '../constants/Colors'
import { setQuestionMessage } from '../actions/QuestionMessage'
import SubmitButton from './SubmitButton'

class QuestionMessage extends Component{
  render (){
  const { navigation, dispatch, message, question } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Add a message...</Text>
        <Text style={styles.pageDescription}>{question}</Text>
        <TouchableOpacity
          onPress={() => navigation.openDrawer}
          style={styles.burger}
        >
          <CustomSvg
            D={Icons.menu.D}
            fill={Colors.iconColor}
          />
        </TouchableOpacity>
        <TextInput
          placeholder={'Write your message here...'}
          style={styles.input}
          multiline={true}
          onChangeText={text => dispatch(setQuestionMessage(text))}
          value={message}
          autoCapitalize={'sentences'}
          returnKeyType={'done'}
        />
        <View style={{flex: 1}} />
        <SubmitButton
          isLoading={false}
          title={'send'}   
          onPress={() => console.log('update message!')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    padding: 20,
  },
  title: {
    fontSize: 32,
    color: Colors.TextColor,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 32,
  },
  burger: {
    position: 'absolute',
    top: 24,
    left: 24,
  },
  input: {
  },
  pageDescription: {
    fontSize: 18,
    color: Colors.TextColor,
    marginBottom: 100,
    marginTop: 24,
    textAlign: 'center',
  },
})

const mapStateToProps = state => {
  const {
    QuestionMessage,
    Question,
  } = state.rootReducer

  const { message } = QuestionMessage
  const { question } = Question

  return {
    message,
    question,
  }
}

export default connect(mapStateToProps)(QuestionMessage)

