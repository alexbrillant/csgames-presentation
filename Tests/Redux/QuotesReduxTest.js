import test from 'ava'
import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/QuotesRedux'

test('attempt', t => {
  const state = reducer(INITIAL_STATE, Actions.quotesRequest('data'))

  t.true(state.fetching)
})

test('success', t => {
  const state = reducer(INITIAL_STATE, Actions.quotesSuccess('hi'))

  t.is(state.payload, 'hi')
})

test('failure', t => {
  const state = reducer(INITIAL_STATE, Actions.quotesFailure(99))

  t.false(state.fetching)
  t.true(state.error)
})
