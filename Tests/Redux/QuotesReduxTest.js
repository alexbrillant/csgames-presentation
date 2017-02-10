import test from 'ava'
import Actions, { reducer, CurrentQuoteSelector, ListViewAuthorsSelector, INITIAL_STATE } from '../../App/Redux/QuotesRedux'
import Immutable from 'seamless-immutable'

test('search', t => {
  const expectedSearchTerm = 'searchTerm'
  const state = reducer(INITIAL_STATE, Actions.search(expectedSearchTerm))
  t.is(expectedSearchTerm, state.searchTerm)
})

test('cancelSearch', t => {
  const initialState = Immutable({ searchTerm: 'searchTerm' })
  const state = reducer(initialState, Actions.cancelSearch())
  t.is('', state.searchTerm)
})

test('CurrentQuoteSelector', t => {
  const firstAuthorName = INITIAL_STATE.authors[0].name
  const authorQuoteIndex = INITIAL_STATE.authors[0].quoteIndex
  const actualQuote = CurrentQuoteSelector(INITIAL_STATE, firstAuthorName).quote
  const expectedQuote = INITIAL_STATE.authors[0].quotes[authorQuoteIndex]
  t.is(expectedQuote, actualQuote)
})

test('ListViewAuthorsSelector', t => {
  const firstAuthorName = INITIAL_STATE.authors[0].name
  const firstAuthorQuoteCount = 3
  const firstAuthorQuoteIndex = INITIAL_STATE.authors[0].quoteIndex
  const firstAuthorColor = INITIAL_STATE.authors[0].color

  let initialState = Immutable({
    ...INITIAL_STATE,
    searchTerm: firstAuthorName
  })

  const actualAuthors = ListViewAuthorsSelector(initialState)
  t.is(1, actualAuthors.length)
  t.is(firstAuthorName, actualAuthors[0].name)
  t.is(firstAuthorColor, actualAuthors[0].color)
  t.is(firstAuthorQuoteIndex, actualAuthors[0].quoteIndex)
  t.is(firstAuthorQuoteCount, actualAuthors[0].quoteCount)
})
