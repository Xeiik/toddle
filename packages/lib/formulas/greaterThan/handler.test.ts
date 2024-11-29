import { describe, expect, test } from '@jest/globals'
import handler from './handler'

describe('Formula: Greater than', () => {
  test('Should return true if the first value is greater than the second', () => {
    expect(handler([2, 1], undefined as any)).toBe(true)
    expect(handler(['and', 'aa'], undefined as any)).toBe(true)
  })
  test('Should return false if the first value is equal to the second', () => {
    expect(handler([2, 2], undefined as any)).toBe(false)
    expect(handler(['andreas', 'andreas'], undefined as any)).toBe(false)
  })
  test('Should return false if the first value is smaller than the second', () => {
    expect(handler([1, 2], undefined as any)).toBe(false)
    expect(handler(['andreas', 'bobo'], undefined as any)).toBe(false)
  })
})
