// @flow

import { StyleSheet, Dimensions } from 'react-native'
import { ApplicationStyles } from '../../Themes/'
import { Metrics } from '../../Themes'
var { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  animationContainer: {
    marginTop: height / 4,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  row: {
    flex: 1,
    flexDirection: 'row'
  },
  startButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: Metrics.doubleBaseMargin
  }
})
