import React from 'react'
import { TouchableWithoutFeedback, View, Text } from 'react-native'
import styles from './Styles/QuoteStyle'

export default class Quote extends React.Component {
  render () {
    const { onPress, color, quote } = this.props
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={[styles.section, {backgroundColor: color}]}>
          <Text style={styles.sectionText}>{quote}</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

Quote.propTypes = {
  onPress: React.PropTypes.func.isRequired,
  quote: React.PropTypes.string.isRequired,
  color: React.PropTypes.string
}

Quote.defaultProps = {
  color: 'white'
}
