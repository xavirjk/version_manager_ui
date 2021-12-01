import Styled, { css } from 'styled-components';
import { device } from './device';
import ArrowDown from '../images/svg/dropdown.svg';
const baseInputStyles = css`
  padding: 5px;
  margin: 10px 0;
  border: 0;
  border-bottom: 2px solid #eee;
  @media ${device.mobileS} {
    width: 100%;
  }
  @media ${device.laptop} {
    width: 80%;
  }
`;
const AuthbaseInputStyles = css`
  position: absolute;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const selectStyles = css`
  cursor: pointer;
  background: url(${ArrowDown}) 99% / 3% no-repeat;
`;
export const Form = Styled.form`
    position: absolute;
	top: 20px;
    border:1px solid;
	border-radius: 5px;
    background-color:white;
    @media ${device.mobileS} {
        left: 3%;
        width: 94%;
    }
    @media ${device.laptop} {
        left: 10%;
        width: 40%;
    }
`;
export const Card = Styled.div`
    margin: 0rem 1rem;
    padding: .4rem;
`;
export const Input = Styled.input`
    ${baseInputStyles}
`;
export const Select = Styled.select`
    ${baseInputStyles};
    ${selectStyles};
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    
`;
export const Applogin = Styled.div`
    ${AuthbaseInputStyles}
    @media ${device.mobileS}{
        top: 15vh;
        left: 5%;
        width: 90%;
        
    }
    @media${device.laptop} {
        top: 20vh;
	    left: 35%;
        width: 25%;
    }

`;
export const Notfound = Styled.div`
     width: 100%;
     height: 40px;
     text-align:center;
     font-family: Proxima Nova, Arial, 'sans-serif';
	 color: #353851;
	 line-height: 44px;
`;

export const Passreset = Styled.form`
    margin : .5rem;
    padding: 2px;
    box-shadow: 2px 1.5px 2px 2px rgba(198, 198, 198, 0.5);
   
    @media ${device.mobileS} {
         width: 95%;
    }
    @media ${device.laptop} {
         width: 50%;
    }
`;
export const Pass = Styled(Input)``;

export const ErrorCard = Styled.div`
    text-align: center;
    font-style: italic;
    width: 90%;
    color: red;
`;

export const SuccessCard = Styled.p`
    text-align: center;
    color: green;
    font-style: italic;
`;
