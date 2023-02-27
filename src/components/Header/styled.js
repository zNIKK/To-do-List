import styled from 'styled-components';
import { colorsDark } from '../../config/colors';

const HeaderStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 180px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    color: white;
    letter-spacing: 15px;
    font-size: 55px;
    font-weight: 700;
  }

  form {
    display: flex;
    height: 80px;
  }

  .inputText {
    width: 100%;
    text-indent: 80px;
    border-radius: 4px;
    border: none;
    outline: none;
    background-color: ${colorsDark.veryDarkDesaturatedBlue};
    box-shadow: 1px 10px 60px -15px black;
  }

  .checkbox {
    position: absolute;
    align-self: center;
  }

`;

export default HeaderStyled;
