import React, { Component } from 'react';
import {
	StyleSheet, Text, View, TouchableOpacity, FlatList,
} from 'react-native'
import { connect } from 'react-redux'
import Icons from '../../assets/Icons'
import CustomSvg from './CustomSvg'
import Colors from '../constants/Colors'
import { fetchFavoriteAnswers } from '../actions/FavoriteAnswers'

class FavouriteAnswers extends Component{
    async componentDidMount() {
    const { navigation } = this.props
    this.subs = [
      navigation.addListener('didFocus', () => this.onComponentFocus()),
    ]
  }

  onComponentFocus() {
    const { dispatch } = this.props
    dispatch(fetchFavoriteAnswers())
  }

  render () {
  const { navigation, favoriteAnswers } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Answers</Text>
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
          data={favoriteAnswers}
          renderItem={({ item, index }) => (
            <Text style={styles.textRow}>{item.data}</Text>
          )}
          keyExtractor={item => item.id}
          extraData={favoriteAnswers}
        />
      </View>
    );
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
    marginBottom: 40,
  },
  burger: {
    position: 'absolute',
    top: 24,
    left: 24,
  },
  textRow: {
    marginBottom: 16,
    color: Colors.textColor,
  },
})

const mapStateToProps = state => {
  const {
    FavoriteAnswers,
  } = state.rootReducer

  const { favoriteAnswers } = FavoriteAnswers

  return {
    favoriteAnswers,
  }
}

export default connect(mapStateToProps)(FavouriteAnswers)

