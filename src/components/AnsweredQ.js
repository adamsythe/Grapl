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
        <View>
        <Text style={styles.pageDescription}>Congratulations for answering todays question! {'\n'} {'\n'} Have a look at some other ways to further explore todays question.</Text>
        </View>
        <Button
          title={'See what the experts have to say'}
          onPress={() => navigation.navigate('Experts')}
        />
        <Button
          title={'Link a message with your answer'}
          onPress={() => navigation.navigate('Message')}
        />
        <Button
          title={'Read some of our favourite answers'}
          onPress={() => navigation.navigate('Favourite answers')}
        />
        <Button
          title={'Give us a suggestion for a question'}
          onPress={() => navigation.navigate('Suggestion')}
        />
        <Button
          title={'Create a new answer'}
          onPress={() => navigation.navigate('QuestionScreen')}
        />
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
    backgroundColor: Colors.backgroundColor,
    padding: 20,
  },
  title: {
    fontSize: 32,
    color: Colors.TextColor,
    textAlign: 'center',
    marginBottom: 32,
  },
  help: {
    position: 'absolute',
    top: 24,
    right: 24,
  },
  pageDescription: {
    fontSize: 18,
    color: Colors.TextColor,
    marginBottom: 100,
    marginTop: 24,
    textAlign: 'center',
  },
  burger: {
    position: 'absolute',
    top: 24,
    left: 24,
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

