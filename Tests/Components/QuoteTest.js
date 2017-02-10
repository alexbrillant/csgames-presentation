import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'
import Quote from '../../App/Components/Quote'

const QUOTE = 'hi'
const wrapper = shallow(<Quote color={'blue'} quote={QUOTE} onPress={() => {}} />)

test('component exists', t => {
  t.is(wrapper.length, 1) // exists
})

test('component structure', t => {
  t.is(wrapper.name(), 'View') // the right root component
  t.is(wrapper.children().length, 1) // has 1 child
  t.is(wrapper.children().first().name(), 'Text') // that child is Text
})

test('onPress', (t) => {
  let i = 0 // i guess i could have used sinon here too... less is more i guess
  const onPress = () => i++
  const wrapperPress = shallow(<Quote onPress={onPress} color={'blue'} quote='hi' />)
  t.is(wrapperPress.prop('onPress'), onPress) // uses the right handler
  t.is(i, 0)
  wrapperPress.simulate('press')
  t.is(i, 1)
})

// test('some other things here', t => {
// const wrapper = shallow(<YourComponentNameHere // SomeProps > )
   // You can add in props as shown above, or use the constant wrapper declared
   // at the top of the file.
// })
