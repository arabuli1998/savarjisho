import { Main,Container } from "../../globalStyles";
import styled from "styled-components";



export const FooterContainer=styled(Main)`
margin-top:80px;
min-height:300px;
display:flex;
flex-direction:column;
background: #dee1eb;

`;
export const BlueContainer=styled.div`
width: 100%;
background-color:#050230;
padding: 40px 3px;
min-height:350px;
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;

button{
    max-width:300px;
    width:100%;
    background: white;
    color:darkblue;
    font-weight:bolder;
    font-size:20px;
    border:none;
    padding:10px 0px;
    border-radius:10px;
    margin-top:20px;
    :hover{
        background: #b0aaff;
    }
    @media screen and (max-width:600px){
        font-size:15px;
    }
};
p{
    color:white;
    padding:20px 0;
}
`;

export const Links=styled(Container)`
padding:20px 0;
text-align:center;
display: flex;
justify-content:center;
flex-wrap:wrap-reverse;
align-items:center;
display:none;
ul{
    flex:1 2 150px;
    display: flex;
    list-style:none;
    max-width:670px;
    width:100%;
    justify-content:space-between;
    li{
        cursor:pointer;
        :hover{
            color:darkblue;
            text-decoration:underline;
        }
    }
}


`;