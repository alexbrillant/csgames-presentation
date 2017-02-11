import test from 'ava'
import Actions, { reducer, CurrentQuoteSelector, ListViewAuthorsSelector, INITIAL_STATE } from '../../App/Redux/QuotesRedux'
import Immutable from 'seamless-immutable'

const firstAuthorName = INITIAL_STATE.authors[0].name
const firstAuthorQuoteIndex = INITIAL_STATE.authors[0].quoteIndex
const firstAuthorQuoteCount = INITIAL_STATE.authors[0].quotes.length
const firstAuthorColor = INITIAL_STATE.authors[0].color
const authorsCount = INITIAL_STATE.authors.length

test('when search then should set searchTerm', t => {
  const expectedSearchTerm = 'searchTerm'
  const state = reducer(INITIAL_STATE, Actions.search(expectedSearchTerm))
  t.is(expectedSearchTerm, state.searchTerm)
})

test('when cancelSearch then should set searchTerm to blank', t => {
  const initialState = Immutable({ searchTerm: 'searchTerm' })
  const state = reducer(initialState, Actions.cancelSearch())
  t.is('', state.searchTerm)
})

test('when incrementQuoteIndex then should increment', t => {
  const state = reducer(INITIAL_STATE, Actions.incrementQuoteIndex(firstAuthorName))
  const actualQuoteIndex = state.authors[0].quoteIndex
  t.is(1, actualQuoteIndex)
})

test('when incrementQuoteIndex then should not increment other authors quote index', t => {
  const state = reducer(INITIAL_STATE, Actions.incrementQuoteIndex(firstAuthorName))

  for (var i = 1; i < authorsCount; ++i) {
    let authorQuoteIndex = state.authors[i].quoteIndex
    t.is(0, authorQuoteIndex)
  }
})

test('given quoteIndex at last index when incrementQuoteIndex then should go back to 0', t => {
  let state = INITIAL_STATE
  for (var i = 0; i < firstAuthorQuoteCount; ++i) {
    state = reducer(state, Actions.incrementQuoteIndex(firstAuthorName))
  }
  const actualQuoteIndex = state.authors[0].quoteIndex
  t.is(0, actualQuoteIndex)
})

test('CurrentQuoteSelector', t => {
  const actualQuote = CurrentQuoteSelector(INITIAL_STATE, firstAuthorName).quote
  const expectedQuote = INITIAL_STATE.authors[0].quotes[firstAuthorQuoteIndex]
  t.is(expectedQuote, actualQuote)
})

test('given an author name as search term then should only select this author', t => {
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
