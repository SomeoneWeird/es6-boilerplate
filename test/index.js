/*global describe, it*/

import assert from 'assert'

import sayHello from '../src/index.js'

describe('sayHello', function () {
  it('should say hello', function () {
    let result = sayHello('john doe')

    assert.equal(result, 'Hello john doe')
  })
})
