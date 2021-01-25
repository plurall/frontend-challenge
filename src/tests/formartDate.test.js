const formatDate = require('../utils/date');

test('It should format date', () => {
    const date = "2018-02-23";
    expect(formatDate(date)).toBe("23/02/2018");
});