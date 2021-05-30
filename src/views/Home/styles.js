import styled from 'styled-components';

export const StyleHomeWrapper = styled.div`
  max-width: 1224px;
  padding: 30px 20px;
  margin: 0 auto;
  font: 16px/14px 'Nunito', sans-serif;
  height: calc(100vh - var(--height-nav-bar) - var(--height-footer) - var(--height-sub-header));
  position: relative;

  display: flex;
  flex-direction: column;

  h1 {
    margin: 10px;
    position: absolute;
  }

  a {
    margin: auto;
  }
`; 

export const StyleButtonStart = styled.button`
  padding: 20px 40px;
  border-radius: 38px;
  font-size: 1.5rem;
  background: #655aa3;
  border: none;
  color: white;
  box-shadow: 1px 1px 14px #777777;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 150ms ease-in;

  :hover {
    background: #39335a;
  }
`;