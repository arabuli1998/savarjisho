import styled from "styled-components";

export const Main = styled.div`
width:100%;
display: flex;
justify-content:center;
align-items:center;

`


export const Container = styled.div`
z-index: 1;
display:flex;
height: 100%;
width: 80%;

@media screen and (max-width:850px){
    width: 100%;
    padding: 0px 10px;
}
`;

export const H1 = styled.h2`
font-size:3.5vw;
color:white;
@media screen and (max-width:600px){
    font-size:25px;
}
`;
export const buttons = styled.button`
width:100%;
    outline:none;
    border:none;
    padding: 10px 0;
    font-size:21px;
    font-weight:bold;
    border-radius:10px;
    cursor: pointer;
    @media screen and (max-width:600px){
        font-size:17px;
        padding:5px 0;
    }
`;