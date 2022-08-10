import { formatDate } from 'utils'

const MILLISECONDS_IN_A_DAY = 24 * 60 * 60 * 1000
const TIMESTAMP_1980 = new Date('1980').getTime()

describe('formatDate test suite', () => {
  it('should return an empty string upon invalid date', () => {
    expect(formatDate()).toBe('')
    expect(formatDate(null)).toBe('')
    expect(formatDate('abc')).toBe('')
    expect(formatDate({})).toBe('')
  })

  it('should accept unix timestamp', () => {
    expect(formatDate(0)).toBe('01/01/1970')
    expect(formatDate(MILLISECONDS_IN_A_DAY)).toBe('02/01/1970')
    expect(formatDate(TIMESTAMP_1980)).toBe('01/01/1980')
  })

  it('should accept date string', () => {
    expect(formatDate('1980-05-22')).toBe('22/05/1980')
    expect(formatDate('2012')).toBe('01/01/2012')
    expect(formatDate('2019-02-08T15:36:12')).toBe('08/02/2019')
  })

  it('should accept date object', () => {
    expect(formatDate(new Date('2020'))).toBe('01/01/2020')
    expect(formatDate(new Date('2000-01-31'))).toBe('31/01/2000')
    expect(formatDate(new Date('2010-08-05'))).toBe('05/08/2010')
  })

  it('should accept different timeZone', () => {
    expect(formatDate(0, 'America/Sao_Paulo')).toBe('31/12/1969')
    expect(formatDate('2020', 'America/Sao_Paulo')).toBe('31/12/2019')
    expect(formatDate('2020-01-01T23:59:59', 'Asia/Tokyo')).toBe('02/01/2020')
  })
})
