import React,{useState} from 'react'
import { MainContainer,PricingContainer,Compare,CompareContainer,DedicatedSolutions,Firstbutton,Secondbutton} from './PricingElements';
import {data,Pricing} from './PricingData'
import Carousels from './carousel/Carousels';


const PricingPage = () => {

    //price change function
    const[price,setPrice]=useState(0);
    function ChangePrice(){
            setPrice(1)
    }
    function ChangePricemonth(){
            setPrice(0)
    }
    
  return (
      //main container
    <MainContainer>
        <PricingContainer>
            <h5>PRIcING</h5>
            <h1>Free to learn and build.
                 Pay as you grow.
            </h1>
            <Firstbutton>Get started for free</Firstbutton>
        </PricingContainer>


        <Compare>
            <CompareContainer>
                <p>Our Free plan enables you to learn the platform and build your application. Paid plans offer additional features, such as white-labeling, a custom domain, access to the Bubble API and reserved server capacity</p>
                <div>
                <h4 onClick={ChangePrice}>Pay Unusually</h4>
                <h4 onClick={ChangePricemonth}>Pay Monthly</h4>
                </div>
                <nav> 
            {Pricing.map((item,index)=>(


               <li key={index}>
                   <h4>{item.title}</h4>
                   <p>{item.text}</p>
                   <h5>${item.price[`${price}`]}</h5>
                   </li> 
            ))}
            </nav>
            <Secondbutton>Compare Plans</Secondbutton>
            </CompareContainer>
            
        </Compare>
        
        
        {data.map((item,index)=>(
            <DedicatedSolutions key={index}>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
            </DedicatedSolutions>
        ))}
    </MainContainer>
  )
}

export default PricingPage