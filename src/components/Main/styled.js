import styled from 'styled-components';
import { colorsDark } from '../../config/colors';

const MainStyled = styled.div`
  background-color: ${colorsDark.veryDarkDesaturatedBlue};
  border-radius: 4px 4px 0px 0px;
  height: 500px;
  margin-top: 30px;
  overflow-y: auto;

  .themeLight {
    background-color: white,
  }

  ::-webkit-scrollbar {
    background-color: ${colorsDark.veryDarkDesaturatedBlue};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${colorsDark.VeryDarkBlue};
    border-radius: 10px;
  }


  .empty {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .listContent {
    word-break: break-all;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${colorsDark.veryDarkGrayishBlue};

  }

  li {
    width: 100%;

    display: flex;
    align-items: center;
  }

  li > div {
    margin: 20px 0px 20px 0px;
    width: 570px;
    pointer-events: none
  }

  button {
    width: 50px;
  }

  @media (max-width: 1440px) {
    height: 400px;

    li > div {
      width: 380px;
    }
  }
`;

export default MainStyled;
