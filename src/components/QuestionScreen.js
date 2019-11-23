import React, { Component } from 'react';
import {
	StyleSheet, Text, View, TouchableOpacity,
} from 'react-native'
import { connect } from 'react-redux'
import { fetchData } from '../actions/OnStart'
import Icons from '../../assets/Icons'
import CustomSvg from './CustomSvg'
import Colors from '../constants/Colors'

class QuestionScreen extends Component{
  async componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchData())
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
        <TouchableOpacity
          onPress={() => navigation.openDrawer}
          style={styles.chat}
        >
          <CustomSvg
            D={Icons.chat.D}
            fill={Colors.iconColor}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Experts')}
          style={styles.help}
        >
          <CustomSvg
            D={Icons.help.D}
            fill={Colors.iconColor}
          />
        </TouchableOpacity>
        <View style={styles.yesNo}>
          <TouchableOpacity
          onPress={null}
          style={styles.yesButton}
        >
          <CustomSvg
            D={Icons.checkmark.D}
            fill={Colors.iconColor}
            size={24}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={null}
          style={styles.noButton}
        >
          <CustomSvg
            D={Icons.close.D}
            fill={Colors.iconColor}
            size={24}
          />
        </TouchableOpacity>
        </View>
        <Text style={styles.header}>{question}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    padding: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 32,
    textAlign: 'center',
    fontWeight: 'bold',
    color: Colors.textColor,
  },
  burger: {
    position: 'absolute',
    top: 24,
    left: 24,
  },
  help: {
    position: 'absolute',
    top: 24,
    right: 24,
  },
  chat: {
    position: 'absolute',
    bottom: 24,
    left: 24,
  },
  yesNo: {
    position: 'absolute',
    bottom: 20,
    right: 24,
    flexDirection: 'row',
  },
  yesButton: {
    marginRight: 24,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 24,
    paddingRight: 24,
    backgroundColor: 'green',
    borderRadius: 4,
  },
  noButton: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 24,
    paddingRight: 24,
    backgroundColor: 'red',
    borderRadius: 4,
  },
  title: {
    fontSize: 32,
    color: Colors.TextColor,
    textAlign: 'center',
    fontWeight: 'bold',
    position: 'absolute',
    top: 20,
  },
})

const mapStateToProps = state => {
  const {
    Question,
  } = state.rootReducer

  const { question } = Question

  return {
    question,
  }
}

export default connect(mapStateToProps)(QuestionScreen)

