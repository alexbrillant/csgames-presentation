// @flow

import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.background
  },
  row: {
    flex: 1,
    backgroundColor: Colors.pacificBlue,
    borderRadius: 8,
    marginHorizontal: Metrics.doubleBaseMargin,
    marginVertical: Metrics.baseMargin,
    padding: Metrics.baseMargin,
    justifyContent: 'center'
  },
  boldLabel: {
    fontWeight: '500',
    color: Colors.snow,
    fontSize: Fonts.size.h1,
    marginBottom: Metrics.smallMargin
  },
  label: {
    fontSize: Fonts.size.h4,
    color: Colors.snow
  },
  listContent: {
    marginTop: Metrics.baseMargin
  }
})
