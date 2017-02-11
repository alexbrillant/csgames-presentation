import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'
import Quote from '../../App/Components/Quote'

const QUOTE = 'hi'
const COLOR = 'blue'

const wrapper = shallow(<Quote color={COLOR} quote={QUOTE} onPress={() => {}} />)

test('component exists', t => {
  t.is(wrapper.length, 1)
})

test('component structure', t => {
  t.is(wrapper.name(), 'TouchableWithoutFeedback')
  t.is(wrapper.children().length, 1)
  t.is(wrapper.children().first().name(), 'View')
  t.is(wrapper.children().first().children().first().name(), 'Text')
})

test('onPress', (t) => {
  let i = 0
  const onPress = () => i++

  const wrapperPress = shallow(<Quote onPress={onPress} color={COLOR} quote={QUOTE} />)

  t.is(wrapperPress.prop('onPress'), onPress)
  t.is(i, 0)
  wrapperPress.simulate('press')
  t.is(i, 1)
})
