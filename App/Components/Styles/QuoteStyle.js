// @flow

import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  sectionText: {
    color: 'white',
    fontSize: 30
  },
  container: {
    flex: 1,
    paddingTop: Metrics.titlePadding
  }
})
