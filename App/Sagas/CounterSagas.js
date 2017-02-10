import { delay } from 'redux-saga'
import { put, call } from 'redux-saga/effects'
import CounterActions from '../Redux/CounterRedux'

export function * incrementAsyncRequest (api, action) {
  yield call(delay, 1000)
  yield put(CounterActions.increment())
  yield put(CounterActions.incrementAsyncTerminated())
}
