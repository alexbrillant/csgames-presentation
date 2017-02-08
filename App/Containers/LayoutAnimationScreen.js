// @flow

import React from 'react'
import { ScrollView, Easing, Animated, LayouAnimation, View, Image } from 'react-native'
import { connect } from 'react-redux'
import RoundedButton from '../Components/RoundedButton'
import Circle from '../Components/Circle'
import { Colors, Images } from '../Themes'

// Styles
import styles from './Styles/LayoutAnimationScreenStyle'

class LayoutAnimationScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      animationValue1: new Animated.Value(0),
      animationValue2: new Animated.Value(0)
    }
    this.interpolateRotation.bind(this)
  }

  componentWillUpdate (nextProps, nextState) {
    LayouAnimation.easeInEaseOut()
  }

  onPressStart = () => {
    this.animate()
  }

  animate = () => {
    Animated.sequence([
      this.animateSpinAndMargin(1, Easing.cubic),
      this.animateSpinAndMargin(0.2, Easing.elastic(1))
    ]).start()
  }

  animateSpinAndMargin (animationToValue, easing) {
    return Animated.timing(
      this.state.animationValue1, {
        toValue: animationToValue,
        duration: 800,
        easing: easing
      }
    )
  }

  animateSize (animationToValue, easing) {
    return Animated.timing(
      this.state.animationValue2, {
        toValue: animationToValue,
        duration: 500,
        easing: easing
      }
    )
  }

  interpolateRotation () {
    return this.state.animationValue1.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })
  }

  interpolateMargin () {
    return this.state.animationValue1.interpolate({
      inputRange: [0, 1],
      outputRange: [30, 0]
    })
  }

  render () {
    const spin = this.interpolateRotation()
    const margin = this.interpolateMargin()
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <Animated.View
            style={{
              flex: 1,
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              transform: [{rotate: spin}]
            }}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Circle margin={margin} size={17} color={Colors.iceberg} />
              <Circle margin={margin} size={17} color={Colors.goldenRod} />
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Circle margin={margin} size={17} color={Colors.mint} />
              <Circle margin={margin} size={17} color={Colors.ruby} />
            </View>
          </Animated.View>
        </ScrollView>
        <View style={{position: 'absolute', left: 0, right: 0, bottom: 0}}>
            <RoundedButton onPress={this.onPressStart}>
              Start Animation
            </RoundedButton>
          </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return{}
}

export default connect(mapStateToProps, mapDispatchToProps)(LayoutAnimationScreen)
