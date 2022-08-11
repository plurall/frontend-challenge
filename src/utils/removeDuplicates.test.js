import { removeDuplicates } from 'utils'

describe('removeDuplicates test suite', () => {
  it('should give a brand new array', () => {
    const a = []
    expect(removeDuplicates(a)).not.toBe(a)
    expect(removeDuplicates(a)).toEqual(a)

    const b = ['b']
    expect(removeDuplicates(b)).not.toBe(b)
    expect(removeDuplicates(b)).toEqual(b)
  })

  it('should remove duplicated values by default', () => {
    expect(removeDuplicates(['a', 'b', 'a'])).toEqual(['a', 'b'])
    expect(removeDuplicates([1, 0, 1])).toEqual([1, 0])
  })

  it('should remove accept custom key extractor function', () => {
    const people = [
      { name: 'John', age: 26 },
      { name: 'Samantha', age: 26 },
      { name: 'John', age: 31 },
    ]

    expect(removeDuplicates(people)).toEqual(people)
    expect(removeDuplicates(people, p => p.name)).toEqual(people.slice(0, 2))
    expect(removeDuplicates(people, p => p.age)).toEqual([people[0], people[2]])
  })

  it('should preserve the array elements order', () => {
    const ids = [
      { id: 1, tag: 'a' },
      { id: 2, tag: 'b' },
      { id: 3, tag: 'c' },
      { id: 1, tag: 'd' },
      { id: 2, tag: 'e' },
      { id: 4, tag: 'f' },
      { id: 5, tag: 'g' },
    ]

    expect(removeDuplicates(ids, e => e.id)).toEqual([
      { id: 1, tag: 'a' },
      { id: 2, tag: 'b' },
      { id: 3, tag: 'c' },
      { id: 4, tag: 'f' },
      { id: 5, tag: 'g' },
    ])
  })
})
