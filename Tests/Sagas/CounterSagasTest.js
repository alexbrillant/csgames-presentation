import test from 'ava'
import { delay } from 'redux-saga'
import { put, call } from 'redux-saga/effects'
import { incrementAsyncRequest } from '../../App/Sagas/CounterSagas'
import CounterActions from '../../App/Redux/CounterRedux'

const getState = () => 0

test('counter Saga', (t) => {
  const generator = incrementAsyncRequest(getState)
  let next

  next = generator.next()
  t.deepEqual(next.value, call(delay, 1000),
    'counter Saga must call delay(1000)'
  )

  next = generator.next()
  t.deepEqual(next.value, put(CounterActions.increment()),
    'counter Saga must call increment after delay'
  )

  next = generator.next()
  t.deepEqual(next.value, put(CounterActions.incrementAsyncTerminated()),
    'counter Saga must call incrementAsyncTerminated after increment'
  )
})
