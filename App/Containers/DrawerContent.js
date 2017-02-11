// @flow

import React, { Component } from 'react'
import { ScrollView, BackAndroid } from 'react-native'
import styles from './Styles/DrawerContentStyle'
import DrawerButton from '../Components/DrawerButton'
import { Actions as NavigationActions } from 'react-native-router-flux'

class DrawerContent extends Component {

  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.context.drawer.props.open) {
        this.toggleDrawer()
        return true
      }
      return false
    })
  }

  toggleDrawer () {
    this.context.drawer.toggle()
  }

  handlePressComponents = () => {
    this.toggleDrawer()
    NavigationActions.reactComponent()
  }

  handlePressReducer = () => {
    this.toggleDrawer()
    NavigationActions.reduxReducer()
  }

  handlePressReduxSaga = () => {
    this.toggleDrawer()
    NavigationActions.reduxSaga()
  }

  handlePressAnimation = () => {
    this.toggleDrawer()
    NavigationActions.layoutAnimation()
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <DrawerButton text='REACT COMPONENT' onPress={this.handlePressComponents} />
        <DrawerButton text='REDUX REDUCERS' onPress={this.handlePressReducer} />
        <DrawerButton text='REDUX SAGA' onPress={this.handlePressReduxSaga} />
        <DrawerButton text='LAYOUT ANIMATION' onPress={this.handlePressAnimation} />
      </ScrollView>
    )
  }
}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}

export default DrawerContent
