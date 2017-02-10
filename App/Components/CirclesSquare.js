// @flow

import React from 'react'
import { View } from 'react-native'
import styles from './Styles/CirclesSquareStyle'
import Circle from './Circle'
import { Colors } from '../Themes'

class CirclesSquare extends React.Component {

  render () {
    const {
      circleSize,
      squareSize,
      colorTopLeft,
      colorTopRight,
      colorBottomLeft,
      colorBottomRight
    } = this.props

    return (
      <View>
        <View style={styles.row}>
          <Circle
            marginBottom={squareSize}
            marginRight={squareSize}
            size={circleSize}
            color={colorTopLeft} />
          <Circle
            marginBottom={squareSize}
            marginLeft={squareSize}
            size={circleSize}
            color={colorTopRight} />
        </View>
        <View style={styles.row}>
          <Circle
            marginTop={squareSize}
            marginRight={squareSize}
            size={circleSize}
            color={colorBottomLeft} />
          <Circle
            marginTop={squareSize}
            marginLeft={squareSize}
            size={circleSize}
            color={colorBottomRight} />
        </View>
      </View>
    )
  }
}

CirclesSquare.propTypes = {
  circleSize: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.number
  ]),
  squareSize: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.number
  ]),
  colorTopLeft: React.PropTypes.string,
  colorTopRight: React.PropTypes.string,
  colorBottomLeft: React.PropTypes.string,
  colorBottomRight: React.PropTypes.string
}

CirclesSquare.defaultProps = {
  colorTopLeft: Colors.iceberg,
  colorTopRight: Colors.goldenRod,
  colorBottomLeft: Colors.mint,
  colorBottomRight: Colors.ruby
}

export default CirclesSquare
