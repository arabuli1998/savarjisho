import { Main,Container,buttons} from "../../globalStyles";
import styled from "styled-components";

//**************** main container ***************** *//
export const MainContainer=styled(Main)`
flex-direction:column;
`;

//**************** first container ***************** *//
export const PricingContainer=styled.div`
align-items:center;
width:100%;
display:flex;
flex-direction:column;
background-color:white;
padding:150px 0;

h5{
    color: blue;
    text-transform:uppercase;
    
    font-weight:bold;
};

h1{
    max-width:580px;
    font-weight:bolder;
    padding:10px 0;
    font-size:3.4vw;
    color:#010014;
};
button{
    margin-top:50px;
    max-width:350px;
    
    
}
`;

//**************** first containers button ***************** *//
export const Firstbutton=styled(buttons)`
margin-top:50px;
    max-width:350px;
    background:darkblue;
    color:white;
`;

//**************** second, pricing container ***************** *// 
export const Compare=styled(Main)`
background: linear-gradient(180deg, #eeeeee 0%, #f9f9f9 50%, #ffffff 100%);
height: auto;
margin-bottom:50px;
`;

//**************** pricing container's container for list ***************** *//
export const CompareContainer=styled(Container)`
flex-direction:column;
p{
    text-align:start;
    padding:15px 0;
}
div{
    display:flex;
    flex-wrap:wrap;
    max-width:330px;
    justify-content:space-between;
    h4{
        cursor:pointer;
        @media screen and (max-width:500px){
            font-size:15px;
        }
        :hover{
            text-decoration:underline;
        }
        }
    }
}
nav{
    margin-top:50px;
    display:flex;
    flex-wrap:wrap;
   justify-content:space-around;

li{
    margin-top:25px;
    background: white;
    max-width:250px;
    flex:1 3 250px;
    list-style:none;
    width:100%;
    box-shadow:0 0 19px gray;
    border-radius:10px;
    min-height:300px;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    @media screen and (max-width:540px){
        max-width:350px;
    }
    h4{
       
        color:darkblue;
    };
    p{
        padding:0 25px;
        text-align:center;
    }
}
}

`;

export const Secondbutton=styled(buttons)`
width:100%;
background: darkblue;
color:white;
margin-top:30px;
`;

//**************** main container ***************** *//


//**************** last text's container ***************** *//
export const DedicatedSolutions=styled(Container)`

background-color:#dee1eb;
margin-top:50px;
border-radius:20px;
flex-direction:column;
align-items:flex-start;

h2{
    padding: 15px 10px;
    @media screen and (max-width:600px){
        font-size:20px;
    }
}
p{
   text-align:start;
    padding: 15px 10px;
    font-size:20px;
    @media screen and (max-width:600px){
        font-size:14px;
        padding: 10px 5px;
    }
    nav{
        color:darkblue;
    }
}
`;