// @flow

import React from 'react'
import { ScrollView, Easing, Animated, View, Image, Text } from 'react-native'
import RoundedButton from '../Components/RoundedButton'
import CirclesSquare from '../Components/CirclesSquare'
import { Images } from '../Themes'

// Styles
import styles from './Styles/LayoutAnimationScreenStyle'
const CIRCLE_SIZE = 35
const INITIAL_SQUARE_SIZE = 50
const MARGIN_AND_SPIN_DURATION = 800

class LayoutAnimationScreen extends React.Component {
  constructor (props) {
    super(props)
    this.animate = this.animate.bind(this)
    this.state = {}
    this.state.animation1 = new Animated.Value(0)
    this.state.squareSize = INITIAL_SQUARE_SIZE
    this.state.spin = '0deg'
  }

  animate () {
    /* À COMPLÉTER */
  }

  render () {
    const { squareSize, spin } = this.state
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <View style={styles.section} >
          <Text style={styles.sectionText} >
              Créez la première partie de l'animation de Slack(les cercles qui tournent et se cognent) en utilisant l'Animated API de react native!
            </Text>
        </View>
        <ScrollView style={styles.container}>

          <Animated.View
            style={[styles.animationContainer, {
              transform: [{
                rotate: spin
              }]
            }]} >
            <CirclesSquare squareSize={squareSize} circleSize={CIRCLE_SIZE} />
          </Animated.View>

        </ScrollView>
        <View style={styles.startButton}>
          <RoundedButton onPress={this.animate}>
            Start Animation
          </RoundedButton>
        </View>
      </View>
    )
  }
}

export default LayoutAnimationScreen
