// @flow

import React from 'react'
import { Animated } from 'react-native'

class Circle extends React.Component {

  render () {
    const { marginTop, absolute, marginBottom, marginLeft, marginRight, size, color } = this.props
    return (
      <Animated.View style={{
        marginTop: marginTop,
        marginBottom: marginBottom,
        marginLeft: marginLeft,
        marginRight: marginRight,
        backgroundColor: color,
        position: absolute ? 'absolute' : 'relative',
        width: size,
        height: size,
        borderRadius: this.props.size / 2
      }} />
    )
  }
}

Circle.defaultProps = {
  marginTop: 0,
  marginLeft: 0,
  marginRight: 0,
  marginBottom: 0,
  absolute: false
}

Circle.propTypes = {
  size: React.PropTypes.number.isRequired
}

export default Circle
