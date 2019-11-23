import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Text,
} from 'react-native'
import Colors from '../constants/Colors'

const styles = StyleSheet.create({
  container: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.22,
    shadowRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.secondaryColor,
    alignSelf: 'stretch',
    height: 50,
  },
  disabledContainer: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.22,
    shadowRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    alignSelf: 'stretch',
    height: 50,
    borderColor: `#00000080`,
    borderWidth: 1,
    borderRadius: 2,
  },
  buttonTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: Colors.textColor,
  },
  disabledButtonTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#00000080',
  },
})


const SubmitButton = ({
  isLoading, title, onPress, isDisabled, containerProps, textProps,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isLoading || isDisabled}
      style={
        isLoading || isDisabled ? styles.disabledContainer : [styles.container, containerProps]
      }
    >
      {
        isLoading
          ? <ActivityIndicator size="large" color={Colors.ON_DARK_PRIMARY} />
          : (
            <Text
              style={
                isLoading || isDisabled ? styles.disabledButtonTitle
                  : [styles.buttonTitle, textProps]
              }
            >
              {title}
            </Text>
          )
      }
    </TouchableOpacity>
  )
}

SubmitButton.propTypes = {
  isLoading: PropTypes.bool,
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
  containerProps: PropTypes.object,
  textProps: PropTypes.object,
}

SubmitButton.defaultProps = {
  isDisabled: false,
  containerProps: {},
  textProps: {},
  isLoading: false,
}

export default SubmitButton
