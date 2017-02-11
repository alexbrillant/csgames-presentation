// @flow

import React from 'react'
import { ScrollView, Text, View, Image } from 'react-native'
import { connect } from 'react-redux'

import CounterActions from '../Redux/CounterRedux'
import { Images, Colors } from '../Themes'
import RoundedButton from '../Components/RoundedButton'

import styles from './Styles/ReduxSagaScreenStyle'

class ReduxSagaScreen extends React.Component {

  handleIncrementPress = () => {
    this.props.increment()
  }

  handleIncrementAsyncPress = () => {
    this.props.incrementAsync()
  }

  render () {
    const { counter, incrementing } = this.props
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <Text style={styles.counter}>
            {counter}
          </Text>
          <Text style={styles.incrementing}>
            {incrementing && 'incrementing...'}
          </Text>
          <RoundedButton color={Colors.steel} onPress={this.handleIncrementPress}>
            Increment
          </RoundedButton>
          <RoundedButton color={Colors.iceberg} onPress={this.handleIncrementAsyncPress}>
            Increment Async
          </RoundedButton>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter.counter,
    incrementing: state.counter.incrementing
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(CounterActions.increment()),
    incrementAsync: () => dispatch(CounterActions.incrementAsyncRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxSagaScreen)
