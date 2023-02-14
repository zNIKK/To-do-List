import { createGlobalStyle } from 'styled-components';

const MainStyled = createGlobalStyle`
    * {
      margin: 0px;
      padding: 0px;
      font-family: 'Josefin Sans', sans-serif;
      font-weight: 400;
    }

    #root {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin-bottom: 30px;
    }

    body {
      background-image: url("./images/bg-desktop-dark.jpg");
      background-color: #181824;
      background-size: contain;
      background-repeat: no-repeat;
    }


  .container {
    width: 700px;
  }


  .bg-header {
    margin-bottom: 60px;
    color: white;
    font-size: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;

  }

  .bg-header > h1 {
    margin: none;
    letter-spacing: 0.5em;
    font-weight: 700;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 60px;
  }

  .content {
    height: 100%;
    box-shadow: 5px 15px 17px 0.5px rgba(0, 0, 0, 0.251);
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

  .checkbox:checked:hover, .checkbox:checked {
    background: no-repeat center/60% 
    url("./images/icon-check.svg"), 
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

  @media (max-width: 900px) {
      body {
          background-image: url("./images/bg-mobile-dark.jpg");
          background-size: 100% 30%;
      }
    
    }
`;

export default MainStyled;
