import styled from 'styled-components';
import { colorsDark } from '../../config/colors';

const FooterStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0px 0px 4px 4px;
  background-color: ${colorsDark.veryDarkDesaturatedBlue};
  padding: 15px;

  * {
    color: ${colorsDark.darkGrayishBlue};
    font-size: 20px;
    margin: 15px;
  }

  .radio {
    display: none;
  }

  label {
    cursor: pointer;

  }
  .radio:checked + label{
    pointer-events: none;
    color: ${colorsDark.BrightBlue};
  }

  button:hover, label:hover {
    color: ${colorsDark.lightGrayishBlue};
  }

  @media (max-width: 1440px) {
      .radioButtons {
        position: absolute;
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        left: 0px;
        bottom: -100px;
        width: 100%;
        margin: 0px;
        background-color: ${colorsDark.veryDarkDesaturatedBlue};
        border-radius: 4px;
        box-shadow: 1px 10px 60px -15px black;

      }
  }
`;

export default FooterStyled;
