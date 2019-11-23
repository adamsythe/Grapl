import React, { Component } from 'react';
import {
	StyleSheet, Text, View, TouchableOpacity, TextInput,
} from 'react-native'
import { connect } from 'react-redux'
import Icons from '../../assets/Icons'
import CustomSvg from './CustomSvg'
import Colors from '../constants/Colors'
import { setQuestionMessage } from '../actions/QuestionMessage'

class QuestionMessage extends Component{
  render (){
  const { navigation, dispatch, message } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Add a message...</Text>
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
          mulitLine={true}
          onChangeText={text => dispatch(setQuestionMessage(text))}
          value={message}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
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
})

const mapStateToProps = state => {
  const {
    QuestionMessage,
  } = state.rootReducer

  const { message } = QuestionMessage

  return {
    message,
  }
}

export default connect(mapStateToProps)(QuestionMessage)

