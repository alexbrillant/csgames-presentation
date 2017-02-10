// @flow

import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  counter: {
    ...ApplicationStyles.darkLabel,
    fontSize: 100,
    textAlign: 'center',
    color: Colors.ruby
  },
  incrementing: {
    ...ApplicationStyles.subtitle,
    color: Colors.graniteGrey,
    textAlign: 'center'
  }
})
