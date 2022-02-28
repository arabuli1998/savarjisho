import styled from "styled-components";
import { Container,Main } from "../../globalStyles";
import { Link } from "react-router-dom";



export const NavBar=styled(Main)`
background-color:black;
height: 80px;
width:100%;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.2rem;
position: sticky;
top: 0;
z-index: 989;

`;

export const NavBarContainer=styled(Container)`
justify-content:space-between;
align-items:center;
`;


export const NavBarLogo=styled.div`
color:white;
justify-self: flex-start;
cursor: pointer;
text-decoration:none;
font-size:2rem;
display:flex;
align-items: center;
h2{
    display: flex;
    nav{
        color:blue;
    }
}
`;


export const NavBarIcon=styled.div`
display: none;
color:white;
@media screen and (max-width:850px){
    display:block;
}

`;
export const NavBarMenu=styled.div`
display:flex;
align-items:center;
list-style:none;
color: white;
max-width:500px;
width: 100%;
justify-content:space-between;
@media screen and (max-width:850px){
    display:flex;
    flex-direction: column;
    height: calc(100vh - 80px) !important; 
    max-width:950px;
    top:80px;
    position: absolute;
    left:${({click}) =>(click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.4s ease;
    background: linear-gradient(180deg, black 0%, rgba(0,0,0,0.9) 50%, rgba(0,0,0,0.8) 100%);
 
}

`;
export const NavBarLink = styled(Link)`
height:80px;
border-bottom: 4px solid #4b59f7;
display: flex;
align-items:center;
justify-content:center;
cursor: pointer;
flex:1 5 50px;
color:white;
transition: 0.5s;
:hover{
    border-bottom: 4px solid white;
      color:#4b59f7;
    }
@media screen and (max-width:850px){
    width: 100%;
    border: none;
    :hover{
        border: none;
        background: linear-gradient(180deg, black 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.1) 100%);
    }
}


`;
export const NavBarButton=styled.div``;