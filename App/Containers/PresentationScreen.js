// @flow

import React from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'
import RoundedButton from '../Components/RoundedButton'
import { Actions as NavigationActions } from 'react-native-router-flux'
import * as Animatable from 'react-native-animatable'

// Styles
import styles from './Styles/PresentationScreenStyle'

export default class PresentationScreen extends React.Component {
  render () {
    return (
      <View style={styles.mainContainer}>

        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Animatable.Image animation='zoomIn' duration={4000} iterationCount={1} source={Images.csGamesLogo} style={styles.logo} />
          </View>

          <View style={styles.section} >
            <Text style={styles.sectionText} >
              Séminaire 7 : React Native & Redux {'\n'}
              Alexandre Brillant
            </Text>
          </View>

          <RoundedButton onPress={NavigationActions.reactComponent}>
            React Component
          </RoundedButton>

          <RoundedButton onPress={NavigationActions.reduxReducer}>
            Redux Reducer
          </RoundedButton>

          <RoundedButton onPress={NavigationActions.reduxSaga}>
            Redux Saga
          </RoundedButton>

          <RoundedButton onPress={NavigationActions.layoutAnimation}>
            Layout Animation
          </RoundedButton>

          <View style={styles.centered}>
            <Text style={styles.subtitle}>Made using Ignite ❤️ </Text>
          </View>

        </ScrollView>
      </View>
    )
  }
}
