// @flow

import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.background
  },
  counter: {
    ...ApplicationStyles.darkLabel,
    fontSize: 20,
    textAlign: 'center',
    color: Colors.ruby
  }
})
