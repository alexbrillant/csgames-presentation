// @flow

import React from 'react'
import { ScrollView } from 'react-native'
import { connect } from 'react-redux'
import QuoteActions, { CurrentQuoteSelector } from '../Redux/QuotesRedux'
import Quote from '../Components/Quote'

import styles from './Styles/QuoteScreenStyle'

class QuoteScreen extends React.Component {

  render () {
    const { incrementQuoteIndex, getQuote, authorName } = this.props
    const { quote, color } = getQuote(authorName)
    return (
      <ScrollView style={styles.container}>
        <Quote quote={quote} color={color} onPress={() => incrementQuoteIndex(authorName)} />
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    getQuote: (authorName: string) => CurrentQuoteSelector(state.quotes, authorName)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    incrementQuoteIndex: (authorName: string) => {
      dispatch(QuoteActions.incrementQuoteIndex(authorName))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuoteScreen)
