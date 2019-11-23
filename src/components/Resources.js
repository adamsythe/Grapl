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
        <View style={styles.content}>
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
    content: {
      flex: 1,
      paddingTop: 20,
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
  })
  
export default Resources