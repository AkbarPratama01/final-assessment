import { describe, it } from 'node:test'
import assert from 'node:assert'
import sum from './index.js'

describe("check sum method", () => {
  it('Returning zero when one of the value is less than zero', () => {
    const valueA = -1
    const valueB = 2

    const expectedResult = 0

    const result = sum(valueA, valueB)

    assert.equal(result, expectedResult)
  })

  it('Returning zero when one of the value is not a number', () => {
    const valueA = 2
    const valueB = "b"

    const expectedResult = 0

    const result = sum(valueA, valueB)

    assert.equal(result, expectedResult)
  })

  it('Returning correct value of sum', () => {
    const valueA = 2
    const valueB = 2

    const expectedResult = 4

    const result = sum(valueA, valueB)

    assert.equal(result, expectedResult)
  })
})