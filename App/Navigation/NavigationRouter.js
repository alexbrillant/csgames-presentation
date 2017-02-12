// @flow

import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyle'
import NavigationDrawer from './NavigationDrawer'
import NavItems from './NavItems'
import QuotesNavBar from '../Navigation/QuotesNavBar'

// screens identified by the router
import PresentationScreen from '../Containers/PresentationScreen'
import LayoutAnimationScreen from '../Containers/LayoutAnimationScreen'
import ReactComponentScreen from '../Containers/ReactComponentScreen'
import ReduxSagaScreen from '../Containers/ReduxSagaScreen'
import ListviewAuthors from '../Containers/ListViewAuthors'
import QuoteScreen from '../Containers/QuoteScreen'

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key='drawer' component={NavigationDrawer} open={false}>
          <Scene key='drawerChildrenWrapper' navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton}>
            <Scene initial key='presentationScreen' component={PresentationScreen} title='React and Redux' renderLeftButton={NavItems.hamburgerButton} />
            <Scene key='layoutAnimation' component={LayoutAnimationScreen} title='Layout Animation' />
            <Scene key='reduxSaga' component={ReduxSagaScreen} title='Redux Saga' />
            <Scene key='reduxReducer' component={ListviewAuthors} title='Redux reducer' navBar={QuotesNavBar} />
            <Scene key='reactComponent' component={ReactComponentScreen} title='React component' />
            <Scene key='quote' component={QuoteScreen} title='Quote Screen' />
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
