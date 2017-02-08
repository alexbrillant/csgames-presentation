// @flow

import React from 'react'
import { View, Animated, Text } from 'react-native'
import styles from './Styles/CircleStyle'
import { Colors } from '../Themes'

export default class Circle extends React.Component {

  render () {
    return (
      <Animated.View style={{
        backgroundColor: this.props.color,
        margin: this.props.margin,
        width: this.props.size,
        height: this.props.size,
        borderRadius: this.props.size / 2
      }} />
    )
  }
}

// // Prop type warnings
// Circle.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// Circle.defaultProps = {
//   someSetting: false
// }
