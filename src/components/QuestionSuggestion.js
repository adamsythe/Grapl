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
import { setSuggestion } from '../actions/QuestionSuggestion'

class QuestionSuggestion extends Component {
  render (){
  const { navigation, dispatch, suggestion } = this.props
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Add a Question Suggestion</Text>
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
          />
        </View>
       </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    padding: 20,
  },
  content: {
    flex: 1,
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
    QuestionSuggestion,
  } = state.rootReducer

  const { suggestion } = QuestionSuggestion

  return {
    suggestion,
  }
}

export default connect(mapStateToProps)(QuestionSuggestion)

