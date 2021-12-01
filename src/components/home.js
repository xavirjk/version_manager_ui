import Styled, { css, keyframes } from 'styled-components';
import { device } from './device';

const btn1Classic = keyframes`
from {
    top:80px;
};
to {
    top: 0px;
};
`;

export const baseDisplay = css`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const Base = Styled.div`
     width: 100%;
     ${baseDisplay}
     padding: 2rem;
`;

export const Components = Styled.div`
    border-radius: 2px;
    box-shadow: 2px 2px 2px 2px gray;
    border-top: 10px solid #1280a5;
`;

export const Form = Styled.form`
    text-align: left;
    width: 100%;
    box-shadow: 2px 1.5px 2px 1px lightblue;
    padding-top: 1rem;
`;
export const ClassicBtn1 = Styled.button`
    padding: 1rem 1.5rem;
    background-color: #1280a5;
    border: .5px solid #1280a5;
    color: white;
    font-family: Impact, fantacy;
    font-size: 18px;
    border-radius: 5px;
    position: relative;
    animation: ${btn1Classic} 1000ms linear;
    cursor: pointer;
`;

export const Login = Styled(ClassicBtn1)``;

export const CustomForm = Styled(Form)`
     width: 80%;
     margin-top: 10px;
`;

export const CustomLogin = Styled(Login)`
    padding: .5rem;
    margin: .5rem;
`;

export const FieldDesc = Styled.div` 
    padding: .5rem;
    font-family: Arial;
    font-size: 14px;
`;

export const HeadDesc = Styled.div`
    border-bottom: .1px solid #1280a5;
    font-family: impact, fantacy;
`;

export const Input = Styled.input`
    border: 0;
    border-bottom: 1px solid black;
    width: 80%;
    padding: 1rem 1rem .2rem 2rem;
    :focus {
        border: 0;
    }
`;

export const SetUpBtns = Styled.div`
    border: .1px solid gray;
    padding: .5rem 4rem .5rem .5rem;
    :hover {
        padding: .8rem 1.5rem;
        background-color: beige;
        cursor: pointer;
    }
`;

export const InpField = Styled.div`
    width: 100%;
    padding: .6rem .5rem;
`;

export const SmediaFields = Styled(InpField)`
    width: 70%;
    padding: .4rem .2rem;
`;
export const SMInputs = Styled(Input)`
   padding: .5rem 0 0 2rem;
   border-bottom: .1px solid grey;
   margin-bottom: 5px;
`;

export const Updater = Styled.div`
    margin-left: 2rem;
    flex: 1 1 40%;
`;

export const Main = Styled.main` 
    background-color: white;

`;

export const MainCont = Styled.div`
    ${baseDisplay};
    position: absolute;
    left: 200px;
    right: 0;
    top: 80px;
    background-color:white;
    justify-content: center;
    @media ${device.mobileS} {
        left: 0px;
    }
    @media ${device.laptop} {
        left: 50px;
    }
    flex: 1 1 10%;
`;

export const Header = Styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: .2rem 2rem;
    border-top: 10px solid #1280a5; 
    border-bottom: .1px solid lightblue;
    z-index: 10;
    background-color: white;
    ${baseDisplay}
`;

export const HeaderCt = Styled.div`
    flex: 1 1 70%;
`;

export const BodyCt = Styled.div`
    ${baseDisplay};
`;

export const LogOut = Styled.div`
    padding: 1.5rem;
    text-align: center;
    box-shadow: 2px 2px 2px 2px rgba(198, 198, 198, 0.4);
    :hover {
        box-shadow: 2px 2px 2px 2px rgba(198, 198, 198, 0.9);
        cursor:pointer;
    }
`;

export const SMIconF = Styled.i`
    position: absolute;
`;
