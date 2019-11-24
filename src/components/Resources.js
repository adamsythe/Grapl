import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'
import CustomSvg from './CustomSvg'
import Icons from '../../assets/Icons'
import Colors from '../constants/Colors'

class Resources extends Component {
  render() {
    const { navigation } = this.props

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Grapl</Text>
            <TouchableOpacity
                onPress={navigation.openDrawer}
                style={styles.burger}
            >
                <CustomSvg
                    D={Icons.menu.D}
                    fill={Colors.iconColor}
                />
            </TouchableOpacity>
            <WebView
                originWhitelist={['*']}
                source={{uri: 'http://www.thewarriorproject.org.za/resources/'}}
            />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.dullGreen,
      paddingTop: 24,
    },
    title: {
    fontSize: 24,
    color: Colors.headerTextColor,
    textAlign: 'center',
    marginBottom: 24,
  },
    burger: {
      position: 'absolute',
      top: 24,
      left: 24,
    },
  })
  
export default Resources