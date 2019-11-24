import React, { Component } from 'react';
import {
	StyleSheet, Text, View, TouchableOpacity, FlatList,
} from 'react-native'
import { connect } from 'react-redux'
import Expert from './Expert'
import Colors from '../constants/Colors'
import Icons from '../../assets/Icons'
import CustomSvg from './CustomSvg'

class ExpertsScreen extends Component {
  constructor(props) {
    super(props)
    this.goToExpertAdvice = this.goToExpertAdvice.bind(this)
  }

  goToExpertAdvice(i) {
    const { navigation, experts } = this.props
    navigation.navigate('ExpertsAdvice', { expert: experts[i] })
  }

  render() {
    const { experts, navigation } = this.props
    return (
      <View style={styles.container}>
      <Text style={styles.title}>
        Our experts
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
      <FlatList
        data={experts}
        numColumns={2}
        renderItem={({ item, index }) => (
          <Expert
            expert={item}
            goToExpertAdvice={() => this.goToExpertAdvice(index)}
          />
        )}
        keyExtractor={item => item.id}
        extraData={experts}
      />
      </View>
    )
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
    marginBottom: 16,
  },
  burger: {
    position: 'absolute',
    top: 24,
    left: 24,
  },
})

const mapStateToProps = state => {
  const {
    Experts,
  } = state.rootReducer

  const { experts } = Experts

  return {
    experts,
  }
}

export default connect(mapStateToProps)(ExpertsScreen)
