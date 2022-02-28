import styled from "styled-components";
import { Container,Main } from "../../globalStyles";

export const MainContainer=styled(Main)`
flex-direction:column;

`;

export const TextChange=styled(Container)`
flex-direction:column;
display:flex;
margin-bottom:30px;
ul{
    width:100%;
    display:flex;
    list-style:none;
    justify-content:space-between;
    padding:15px 0;
}
li{
cursor:pointer;
font-size:2vw;
    @media screen and (max-width:550px){
        font-size:3vw;
        font-weight:bold;  
    }
    :hover{
        text-decoration: underline;
    }
}
p{
    text-align:start;
    font-size:1.3vw;
    @media screen and (max-width:550px){
        font-size:3vw;   
    }
}
`;

export const EachContainer=styled(Main)`
background: linear-gradient(180deg, #eeeeee 0%, #f9f9f9 50%, #ffffff 100%);
height:auto;
display:flex;
flex-direction:column;
`;

export const Imaged=styled(Container)`
flex-direction:column;

h5{
    text-align:start;
    color:darkblue;
    margin-top:50px;
}
h1{
    text-align:start;
    @media screen and (max-width:550px){
        font-size:4vw;   
    }
}
p{
    text-align:start;
    font-weight:550;
    padding: 15px 0;
    font-size:1.3vw;
    @media screen and (max-width:550px){
        font-size:3vw;   
    }
}
}
`;

export const Image=styled.img`
max-width: 650px;
width:100%;
height:auto;
align-self:center;
padding:40px 0;
cursor:pointer;
box-shadow:0 0 15px gray;
border-radius:10px;
margin-bottom:50px;
:active{
    max-width:700px;
}
`;