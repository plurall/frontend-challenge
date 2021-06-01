import styled from 'styled-components';

export const StyleContetWrapper = styled.div`
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
    line-height: 1;
  }

  a {
    margin: auto;
  }
`;