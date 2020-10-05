import { convertDate } from 'utils/common'

describe('Common methods', () => {
  it('should return a date converted', () => {
    const date = '2020-05-03'
    const dateConverted = '03/05/2020'
    const newDate = convertDate(date);

    expect(newDate).toEqual(dateConverted)
  });
})
