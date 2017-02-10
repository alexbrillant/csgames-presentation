// @flow

import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'
import { Metrics } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  animationContainer: {
    marginTop: Metrics.baseMargin,
    padding: Metrics.baseMargin,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  startButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: Metrics.doubleBaseMargin
  }
})
