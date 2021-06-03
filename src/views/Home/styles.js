import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1224px;
  padding: 30px 20px;
  margin: 0 auto;
  font: 16px/14px 'Nunito', sans-serif;

  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    line-height: 2rem;
    text-align: center;
    font-size: 1.5rem;
    max-width: 20rem;
  }

  a {
    color: #252525;
    text-decoration: none;

    margin-top: 1rem;
    padding: 1rem 2rem;
    background-color: #bcb3f2;
    border: 2px solid #655aa3;
    border-radius: 10px;
    font-weight: 600;
    transition: background 0.2s;

    &:hover {
      background-color: #a497f0;
    }
  }
`
