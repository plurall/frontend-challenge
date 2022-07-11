// react-testing-library renders your components to document.body,
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom'

// eslint-disable-next-line func-names
window.matchMedia = window.matchMedia || function () {
  return {
      matches: false,
      addListener() {},
      removeListener() {},
  }
}
