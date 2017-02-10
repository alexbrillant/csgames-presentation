import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  incrementQuoteIndex: ['authorName'],
  search: ['searchTerm'],
  cancelSearch: null
})

export const QuotesTypes = Types
export default Creators

/* ------------- Initial State ------------- */
import InitialState from './QuotesInitialState'
export const INITIAL_STATE = Immutable(InitialState)

/* ------------- Reducers ------------- */

export const incrementQuoteIndex = (state: Object, authorName: string) => {
  /* À COMPLÉTER */
  return state
}

export const search = (state: Object, { searchTerm }: Object) => {
  return {
    ...state,
    searchTerm: searchTerm
  }
}

export const cancelSearch = (state) => {
  return {
    ...state,
    searchTerm: ''
  }
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.INCREMENT_QUOTE_INDEX]: incrementQuoteIndex,
  [Types.SEARCH]: search,
  [Types.CANCEL_SEARCH]: cancelSearch
})

/* ------------- Selectors ----------------------------- */

const searchAuthors = (state:Object) =>
state.authors.filter((currentAuthor) => {
  const author = currentAuthor.name.toLowerCase()
  const searchTerm = state.searchTerm.toLowerCase()
  return author.includes(searchTerm)
})

export const ListViewAuthorsSelector = (state:Object) => {
  const authors = searchAuthors(state)
  return authors.map((author) => {
    return {
      name: author.name,
      color: author.color,
      quoteIndex: author.quoteIndex,
      quoteCount: author.quotes.length
    }
  })
}

export const CurrentQuoteSelector = (state:Object, authorName:string) => {
  const author = state.authors.find((author) => author.name === authorName)
  const { quotes, quoteIndex } = author
  return {
    quote: quotes[quoteIndex]
  }
}
