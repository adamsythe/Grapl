import React, { Component } from 'react';
import {
	StyleSheet, Text, View, TouchableOpacity,
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
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    padding: 32,
    alignItems: 'center',
    justifyContent: 'center',
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

