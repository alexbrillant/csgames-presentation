// @flow

import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import Quote from '../Components/Quote'

// Styles
import styles from './Styles/ReactComponentScreenStyle'

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
        <View style={styles.section} >
          <Text style={styles.sectionText} >
              Implémentez un React Component nommé Quote qui prend une citation(string),
              une couleur(string) et un callback en paramètres(props). {'\n'}{'\n'}
              Le callback est déclanché lorsqu'on appuie n'importe où sur le component. {'\n'}{'\n'}
              Il faut aussi faire des tests avec enzyme(voir les exemples dans Tests/Components).{'\n'}{'\n'}
              Ce component sera utilisé dans le prochain exemple, mais vous pouvez l'essayer ici en lui passant this.handleYourComponentPress comme callback.
            </Text>
        </View>
        <Quote quote={'hello world'} color={'blue'} onPress={this.handleYourComponentPress} />
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
