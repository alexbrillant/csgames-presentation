import { takeLatest } from 'redux-saga'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugSettings from '../Config/DebugSettings'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { TemperatureTypes } from '../Redux/TemperatureRedux'
import { LoginTypes } from '../Redux/LoginRedux'
import { OpenScreenTypes } from '../Redux/OpenScreenRedux'
import { CounterTypes } from '../Redux/CounterRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { login } from './LoginSagas'
import { getTemperature } from './TemperatureSagas'
import { openScreen } from './OpenScreenSagas'
import { incrementAsyncRequest } from './CounterSagas'

/* ------------- API ------------- */

const api = DebugSettings.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield [
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(LoginTypes.LOGIN_REQUEST, login),
    takeLatest(OpenScreenTypes.OPEN_SCREEN, openScreen),
    takeLatest(TemperatureTypes.TEMPERATURE_REQUEST, getTemperature, api),
    takeLatest(CounterTypes.INCREMENT_ASYNC_REQUEST, incrementAsyncRequest)
  ]
}
