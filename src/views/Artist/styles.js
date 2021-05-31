import styled from 'styled-components';

export const StyleArtistWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  opacity: 0;
  animation: 1s fadeIn forwards ease-in;

  @keyframes fadeIn {
    from {
      opacity: 0;
    } to {
      opacity: 1;
    }
  }
`;

export const StyleArtistPicture = styled.img`
  width: 200px;
  height: 200px;
  box-shadow: 1px 1px 9px 1px #1f1a3a;
  border-radius: 50%;
  margin-bottom: 30px;
`;

export const StylePopularityContainer = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 13px;
  color: #e0a802;

  svg {
    width: 50px;
    height: 25px;
  } 
`;

export const StyleGenreList = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;

  span.title {
    font-size: 70%;
    font-weight: 600;
    margin-bottom: 10px;
  }

  div.list {
    display: flex;
    flex-wrap: wrap;

    .genre {
      margin: 3px 10px;
      background: #655aa3;
      color: white;
      padding: 4px 10px;
      border-radius: 10px;
      font-weight: 600;
      font-size: 90%;
      white-space: nowrap;
    }
  }
`;

export const StyleAlbumList = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  width: 100%;
  margin-top: 10px;
  
  .single-album {
    display: flex;
    box-shadow: 1px 1px 7px #0000004d;
    margin: 10px;
    padding: 5px;
    align-items: center;

    .name-date {
      h3 {
        font-size: 80%;
      }
      h4 {
        font-size: 70%;
        margin-top: 5px;
        color: grey;
        font-weight: 400;
      }
    }
   

    img {
      margin-left: auto;
      width: 60px;
      height: 60px;
    }
  }
`;