import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: var(--color-white);
  }

  html,
  body {
    height: 100%;
  }

  a {
    text-decoration: none;
  }

  ul {
    margin: 0;
    padding: 0;
  }
`
