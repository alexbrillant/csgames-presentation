// @flow

import React from 'react'
import { ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
import styles from './Styles/ReactComponentScreenStyle'
import Quote from '../Components/Quote'
import { Colors } from '../Themes'

class ReactComponentScreen extends React.Component {

  constructor (props) {
    super(props)
    this.state = { pressCount: 0 }
  }

  handleYourComponentPress () {
    this.setState({
      pressCount: this.state.pressCount + 1
    })
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <Quote color={Colors.pacificBlue}
          onPress={() => {
            this.setState({ pressCount: this.state.pressCount + 1 })
          }}
          quote={'Work hard, be kind, and amazing things will happen.'} />
        <Text style={styles.counter}>Quote press count: {this.state.pressCount.toString()}</Text>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReactComponentScreen)
