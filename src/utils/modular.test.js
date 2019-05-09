import { formatDate } from "./modular";

it('Check if date string is parsed', () => {
    var date = new Date()
    var patt = new RegExp(/([0-9]{2})\/([0-9]{2})\/([0-9]{4})/)
    var currentISODate = date.toISOString().match(/[0-9]+\-[0-9]+\-[0-9]+/)[0]
    var test = patt.test(formatDate(currentISODate) + "t")

    expect(test == true).toBeTruthy()
})
