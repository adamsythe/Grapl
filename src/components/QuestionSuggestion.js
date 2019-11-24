import React, { Component } from 'react';
import {
	StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native'
import { connect } from 'react-redux'
import Icons from '../../assets/Icons'
import CustomSvg from './CustomSvg'
import Colors from '../constants/Colors'
import { setSuggestion } from '../actions/QuestionSuggestion'
import SubmitButton from './SubmitButton'

class QuestionSuggestion extends Component {
  render (){
    const { navigation, dispatch, suggestion } = this.props

    const showAlert = () => {
      Alert.alert(
        'Success',
        'Thank you for your question suggestion. We appreciate you sharing your thoughts!',
        [
          {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
      );
    }

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Suggestion</Text>
          <TouchableOpacity
            onPress={navigation.openDrawer}
            style={styles.burger}
          >
            <CustomSvg
              D={Icons.menu.D}
              fill={Colors.iconColor}
            />
          </TouchableOpacity>
          <TextInput
            placeholder={'Write your suggestion here...'}
            style={styles.input}
            mulitLine={true}
            onChangeText={text => dispatch(setSuggestion(text))}
            value={suggestion}
            autoCapitalize={'sentences'}
          />
          <View style={{flex: 1}} />
          <SubmitButton
            isLoading={false}
            title={'send'}   
            onPress={showAlert}
            containerProps={{backgroundColor: Colors.lightYellow}}  
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
    marginBottom: 72,
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
    color: Colors.textColor,
    marginBottom: 100,
    marginTop: 24,
    textAlign: 'center',
  },
})

const mapStateToProps = state => {
  const {
    QuestionSuggestion,
  } = state.rootReducer

  const { suggestion } = QuestionSuggestion

  return {
    suggestion,
  }
}

export default connect(mapStateToProps)(QuestionSuggestion)

