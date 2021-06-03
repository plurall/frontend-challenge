import styled from 'styled-components'

export const Container = styled.div`
  font: 16px/14px 'Nunito', sans-serif;

  flex: 1;
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 119px);

  overflow-y: auto;

  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #999;
  }

  @media screen and (min-width: 1024px) {
    padding: 2rem 6rem;
  }
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 40vw;
    height: 40vw;
    border-radius: 50%;
    margin-top: 2rem;
    box-shadow: 6px 6px 23px -4px #000000;
    object-fit: cover;
  }

  main {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;

    span {
      color: #666;
      font-size: 0.8rem;
    }

    h2 {
      line-height: 1.5rem;
      margin-bottom: 1rem;
    }

    div {
      margin-top: 8px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      p {
        padding: 4px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 5px;
        margin: 2px;
        text-transform: capitalize;
      }
    }
  }

  aside {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
      display: flex;
      align-items: center;
      cursor: pointer;

      background-color: #655aa3;
      border: none;
      outline: none;
      border-radius: 5px;
      margin-top: 8px;
      padding: 1rem;

      color: #fff;
      font-weight: 600;
      text-transform: uppercase;
      text-decoration: none;

      svg {
        font-size: 1.2rem;
        margin-right: 8px;
      }
    }

    p {
      text-align: center;
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding: 1rem;

    img {
      width: 30vw;
      height: 30vw;
    }

    main {
      align-items: flex-start;
      padding: 0 1rem;

      div {
      justify-content: flex-start;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    padding: 1rem 4rem;

    img {
      width: 20vw;
      height: 20vw;
    }

    main {
      align-items: flex-start;
      padding: 0 2rem;

      div {
        justify-content: flex-start;
      }
    }
  }
`

export const Albums = styled.section`
  padding: 2rem 0 2rem 1rem;

  h2 {
    line-height: 2rem;
  }

  > div {
    display: flex;
    padding: 1rem 4px;
  }

  @media screen and (min-width: 768px) {
    padding: 2rem 1rem;
  }
`

export const AlbumItem = styled.div`
         padding: 8px;
         display: block;

         img {
           width: 30vw;
           height: 30vw;

           object-fit: cover;
           box-shadow: 0px 7px 18px -2px #000000;
         }

         h3 {
           line-height: 1.1rem;
           font-size: 1rem;
           margin-top: 8px;
           max-width: 30vw;

           overflow: hidden;
           text-overflow: ellipsis;
           display: -webkit-box;
           -webkit-line-clamp: 2;
           -webkit-box-orient: vertical;
         }

         p {
           font-size: 0.7rem;
           margin-top: 4px;
         }

         @media screen and (min-width: 768px) {
           img {
             width: 20vw;
             height: 20vw;
             box-shadow: 0px 7px 18px -2px #000000;
           }

           h3 {
             max-width: 20vw;
           }
         }

         @media screen and (min-width: 1024px) {
           img {
             width: 15vw;
             height: 15vw;
             box-shadow: 0px 7px 18px -2px #000000;
           }

           h3 {
             max-width: 15vw;
           }
         }
       `

