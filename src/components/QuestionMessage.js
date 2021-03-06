import React, { Component } from 'react';
import {
	StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native'
import { connect } from 'react-redux'
import Icons from '../../assets/Icons'
import CustomSvg from './CustomSvg'
import Colors from '../constants/Colors'
import { setQuestionMessage, sendQuestionMessage } from '../actions/QuestionMessage'
import SubmitButton from './SubmitButton'

class QuestionMessage extends Component{
  render (){
  const { navigation, dispatch, message, question } = this.props
    return (
      <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Message</Text>
        <TouchableOpacity
          onPress={navigation.openDrawer}
          style={styles.burger}
        >
          <CustomSvg
            D={Icons.menu.D}
            fill={Colors.iconColor}
          />
        </TouchableOpacity>
        <Text style={styles.pageDescription}>{question}</Text>
        <TextInput
          placeholder={'Write your message here...'}
          style={styles.input}
          multiline={true}
          onChangeText={text => dispatch(setQuestionMessage(text))}
          value={message}
          autoCapitalize={'sentences'}
        />
        <View style={{flex: 1}} />
        <SubmitButton
          isLoading={false}
          title={'send'}
          containerProps={{backgroundColor: Colors.lightYellow}}  
          onPress={() => dispatch(sendQuestionMessage())}
        />
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.dullGreen,
    padding: 20,
    flex: 1,
  },
  content: {
    flex: 1,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    color: Colors.headerTextColor,
    textAlign: 'center',
    marginBottom: 32,
  },
  burger: {
    position: 'absolute',
    top: 24,
    left: 24,
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.underLineTextInput,
    paddingBottom: 12,
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

