// @flow

import React from 'react'
import { ScrollView, Easing, Animated, View, Image } from 'react-native'
import RoundedButton from '../Components/RoundedButton'
import Circle from '../Components/Circle'
import { Colors, Images } from '../Themes'

// Styles
import styles from './Styles/LayoutAnimationScreenStyle'
const CIRCLE_SIZE = 25
const INITIAL_MARGIN_VALUE = 25
const MARGIN_AND_SPIN_DURATION = 800
const SIZE_DURATION = 400

class LayoutAnimationScreen extends React.Component {
  constructor (props) {
    super(props)
    this.animate = this.animate.bind(this)
    this.state = {}
    this.state.animation1 = new Animated.Value(0)
    this.state.animation2 = new Animated.Value(0)
    this.state.marginValue = this.state.animation1.interpolate({
      inputRange: [0, 1],
      outputRange: [INITIAL_MARGIN_VALUE, 0]
    })
    this.state.spinValue = this.state.animation1.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })
    this.state.sizeValue = this.state.animation2.interpolate({
      inputRange: [0, 1],
      outputRange: [CIRCLE_SIZE, CIRCLE_SIZE * 6]
    })
  }

  animate () {
    Animated.sequence([
      Animated.timing(
        this.state.animation1, {
          toValue: 1,
          duration: MARGIN_AND_SPIN_DURATION,
          easing: Easing.cubic
        }
      ),
      Animated.timing(
        this.state.animation1, {
          toValue: 0,
          duration: MARGIN_AND_SPIN_DURATION,
          easing: Easing.elastic(1)
        }
      ),
      Animated.timing(
        this.state.animation2, {
          toValue: 1,
          duration: SIZE_DURATION,
          easing: Easing.linear
        }
      )
    ]).start()
  }

  render () {
    const { marginValue, spinValue } = this.state
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <Animated.View
            style={[styles.animationContainer, {
              transform: [{
                rotate: spinValue
              }]
            }]}>
            <View style={[styles.row]}>
              <Circle
                marginBottom={marginValue}
                marginRight={marginValue}
                size={CIRCLE_SIZE}
                color={Colors.iceberg} />
              <Circle
                marginBottom={marginValue}
                marginLeft={marginValue} size={CIRCLE_SIZE}
                color={Colors.goldenRod} />
            </View>
            <View style={[styles.row]}>
              <Circle
                marginTop={marginValue}
                marginRight={marginValue}
                size={CIRCLE_SIZE}
                color={Colors.mint} />
              <Circle
                marginTop={marginValue}
                marginLeft={marginValue}
                size={CIRCLE_SIZE}
                color={Colors.ruby} />
            </View>
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
