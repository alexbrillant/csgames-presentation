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
          <View style={styles.section} >
            <Text style={styles.sectionText}>
              En utilisant redux-saga, incrémenter le compteur après une second au clique du bouton Increment Async.
              La propriété incrementing de ReduxSagaScreen doit être à vrai seulement quand on est en train d'incrémenter de façon asynchrone.
              Il y a seulement le saga à faire : App/Sagas/CounterSagas.js
            </Text>
          </View>
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
