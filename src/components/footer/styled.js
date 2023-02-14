import styled from 'styled-components';

const FooterStyled = styled.footer`

  display: flex;
  align-items: center;

  .formText {
    border: none;
    border-radius: 5px;
    box-sizing: border-box;
    width: 100%;
    height: 75px;
    font-size: x-large;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 400;
    background-color: hsl(235, 24%, 19%);
    box-shadow: 5px 15px 17px 0.5px rgba(0, 0, 0, 0.251);
    color: white;
    text-indent: 70px;
  }

  .formText:focus {
      border: none;
      outline: 0;
  }

  .checkbox {

      position: absolute;
      appearance: none;
      cursor: pointer;
      display: block;
      border: 10px;
      outline: 0px;
      width: 30px;
      height: 30px;
      margin: 15px;
      border: 1px solid hsl(237, 14%, 26%);
      border-radius: 100%;
      box-shadow: none;
  }

`;

export default FooterStyled;
