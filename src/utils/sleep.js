/**
 * Returns a void promise that waits for the given interval to be resolved
 * @param {*} interval the interval in milliseconds that the promise
 *                     will wait to resolve
 * @returns a void promise
 */

const sleep = interval => new Promise(res => setTimeout(res, interval))

export { sleep }
