const { test } = require('ava')
const regalia = require('regalia')

const subject = require('.')

test('exports function of arity 1', (t) => {
  t.is(typeof subject, 'function')
  t.is(subject.length, 1)
})

const expectedIOs = [
  {
    io: ['foo'],
    name: '1 value'
  },
  {
    io: ['foo', 'bar'],
    name: '2 values'
  },
  {
    io: ['foo', 'bar', 'baz'],
    name: '3 values'
  },
  {
    io: { a: ['one'] },
    name: '1 value at depth 1'
  },
  {
    io: { a: ['one', 'two'] },
    name: '2 values at depth 1'
  }
]

expectedIOs.forEach(({ io, name }) => {
  test(name, (t) => {
    const tree = regalia(io)
    t.deepEqual(subject(tree), io)
  })
})
