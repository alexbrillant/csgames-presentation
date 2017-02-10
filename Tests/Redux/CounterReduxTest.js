import test from 'ava'
import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/CounterRedux'

test('increment', t => {
  const state = reducer(INITIAL_STATE, Actions.increment())

  t.is(1, state.counter)
})

test('incrementAsyncRequest', t => {
  const state = reducer(INITIAL_STATE, Actions.incrementAsyncRequest())

  t.true(state.incrementing)
  t.is(INITIAL_STATE.counter, state.counter)
})

test('failure', t => {
  const state = reducer(INITIAL_STATE, Actions.incrementAsyncTerminated())

  t.false(state.incrementing)
  t.is(INITIAL_STATE.counter, state.counter)
})
