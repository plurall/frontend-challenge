import { removeUnnecessarySpaces } from 'utils'

describe('removeUnnecessarySpaces test suite', () => {
  it('should accept empty strings', () => {
    expect(removeUnnecessarySpaces('')).toBe('')
  })

  it('should trim unnecessary spaces', () => {
    expect(removeUnnecessarySpaces('  ')).toBe('')
    expect(removeUnnecessarySpaces('a  ')).toBe('a')
    expect(removeUnnecessarySpaces('   a')).toBe('a')
    expect(removeUnnecessarySpaces('      a  ')).toBe('a')
  })

  it('should remove duplicate spaces', () => {
    expect(removeUnnecessarySpaces('a   b')).toBe('a b')
    expect(removeUnnecessarySpaces('  a   b  ')).toBe('a b')
    expect(removeUnnecessarySpaces('  a   b  c ')).toBe('a b c')
  })

  it('should allow ending space when needed', () => {
    expect(removeUnnecessarySpaces(' ')).toBe('')
    expect(removeUnnecessarySpaces(' ', true)).toBe('')

    expect(removeUnnecessarySpaces('  ')).toBe('')
    expect(removeUnnecessarySpaces('  ', true)).toBe('')

    expect(removeUnnecessarySpaces('a ')).toBe('a')
    expect(removeUnnecessarySpaces('a ', true)).toBe('a ')

    expect(removeUnnecessarySpaces(' a   b    ')).toBe('a b')
    expect(removeUnnecessarySpaces(' a   b    ', true)).toBe('a b ')
  })
})
