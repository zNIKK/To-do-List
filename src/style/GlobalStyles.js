import { createGlobalStyle } from 'styled-components';
import { colorsDark, colorsLight } from '../config/colors';

const GlobalStyled = createGlobalStyle`
  * {
    font-size: 24px;
    color: ${colorsDark.lightGrayishBlue};
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 400;
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  body {
    background-image: url("./assets/images/bg-desktop-dark.jpg");
    background-color: ${colorsDark.VeryDarkBlue};
    background-position: top;
    background-size: 100% 40vh;
    background-repeat: no-repeat;
  }

  li {
    list-style: none;
  }

  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
  }

  .container {
    position: relative;

    width: 700px;
    max-width: 1200px;

  }

  .content {
    box-shadow: 1px 10px 60px -15px black;

  }
  
  .checkbox {
    appearance: none;
    cursor: pointer;
    display: block;
    border: 10px;
    outline: 0px;
    width: 30px;
    height: 30px;
    border: 1px solid ${colorsDark.veryVeryDarkGrayishBlue};
    border-radius: 100%; 
    box-shadow: none;
    margin: 25px;
  }

  .checkbox:checked:hover, .checkbox:checked {
    background: no-repeat center/60% 
    url("./assets/images/icon-check.svg"), 
    linear-gradient(120deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%));

    background-position: center;
  }
  
  .checkbox:hover {
    border: 1px solid transparent;

    background-image: linear-gradient(hsl(235, 24%, 19%), hsl(235, 24%, 19%)), 
    linear-gradient(120deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
    border-style: solid;
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  .strikeWord {
    color: ${colorsDark.darkGrayishBlue};
    text-decoration: line-through;
  }

  .themeLight {
    background-image: url("./assets/images/bg-desktop-light.jpg");
    background-color: ${colorsLight.VeryLightGray};
  }

  
  .themeLight .inputText, .themeLight .content div {
    background-color: ${colorsLight.VeryLightGray};
    color: ${colorsLight.VeryDarkGrayishBlue};

  }

  .themeLight .strikeWord {
    color: ${colorsLight.LightGrayishBlue} !important;
  }

  .themeLight .listContent {
    border-bottom: 1px solid ${colorsLight.LightGrayishBlue};
  }

  .themeLight .checkbox {
    border: 1px solid ${colorsLight.LightGrayishBlue};
  }

  .themeLight .checkbox:hover {
    border: 1px solid transparent;
    background-image: linear-gradient(${colorsLight.VeryLightGray}, ${colorsLight.VeryLightGray}), 
    linear-gradient(120deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
  }

  .themeLight .checkbox:checked:hover, .checkbox:checked {
    background: no-repeat center/60% 
    url("./assets/images/icon-check.svg"), 
    linear-gradient(120deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%));

    background-position: center;
  }

  @media (max-width: 800px) {
      body {
        background-image: url("./assets/images/bg-mobile-dark.jpg");
      }
      .themeLight {
        background-image: url("./assets/images/bg-mobile-light.jpg");
      }
      .container {
        width: 500px;
      }
    }
`;

export default GlobalStyled;
