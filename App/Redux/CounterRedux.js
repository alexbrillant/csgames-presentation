import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  increment: null,
  incrementAsyncRequest: null,
  incrementAsyncTerminated: null
})

export const CounterTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  counter: 0,
  incremeting: false
})

/* ------------- Reducers ------------- */

export const incrementAsyncRequest = (state, action) => {
  return {
    ...state,
    incrementing: true
  }
}

export const increment = (state, action) => {
  return {
    ...state,
    counter: state.counter + 1
  }
}

export const incrementAsyncTerminated = (state, action) => {
  return {
    ...state,
    incrementing: false
  }
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.INCREMENT]: increment,
  [Types.INCREMENT_ASYNC_REQUEST]: incrementAsyncRequest,
  [Types.INCREMENT_ASYNC_TERMINATED]: incrementAsyncTerminated
})
