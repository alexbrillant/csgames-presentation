// @flow

import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './Styles/RoundedButtonStyle'
import ExamplesRegistry from '../Services/ExamplesRegistry'
import { Colors } from '../Themes'

// Example
ExamplesRegistry.add('Rounded Button', () =>
  <RoundedButton
    text='real buttons have curves'
    onPress={() => window.alert('Rounded Button Pressed!')}
  />
)

type RoundedButtonProps = {
  onPress: () => void,
  color?: string,
  text?: string,
  children?: string,
  navigator?: Object
}

export default class RoundedButton extends React.Component {
  props: RoundedButtonProps

  getText () {
    const buttonText = this.props.text || this.props.children || ''
    return buttonText.toUpperCase()
  }

  render () {
    var buttonStyle = styles.button
    if (this.props.color) {
      buttonStyle = [styles.button, {backgroundColor: this.props.color}]
    }
    return (
      <TouchableOpacity style={buttonStyle} onPress={this.props.onPress}>
        <Text style={styles.buttonText}>
          {this.getText()}
        </Text>
      </TouchableOpacity>
    )
  }
}
