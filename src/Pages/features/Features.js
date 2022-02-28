import React,{useState} from 'react'
import styled
 from 'styled-components'
import { Container } from '../../globalStyles'
import { Firstbutton, PricingContainer } from '../pricing/PricingElements'
import { MainContainer,TextChange,EachContainer,Imaged,Image} from './FeaturesElements'
const Features = () => {
  
  const images=['https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1547039382911x117151079037566720%2FControl.png?w=768&h=&auto=compress&dpr=1&fit=max',
  'https://dd7tel2830j4w.cloudfront.net/f1547041394867x862772289826318300/map.gif?ignore_imgix',
  'https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1531505226961x163477486930787550%2FDeployment.png?w=768&h=&auto=compress&dpr=1&fit=max',

]
const firstclick=["Create pixel-perfect designs and insert images, icons, videos, maps, and more, without any knowledge of HTML or CSS. Use our responsive editor to make apps that look great in mobile browsers, right out of the box.",
    "Display user-generated content or data fetched from services like Stripe, Google, and Facebook. Change the font, color, or visibility of anything on the page based on information from your app with our dynamic elements.",
    "Translate your app’s text and automatically display the right language, currency, and formats for website messages without additional work. Bubble supports 80+ international languages and adding more is easy.",

  ]
  const [text,setText]=useState(firstclick[0]);
 
  return (
    <MainContainer>
      <PricingContainer>
      <h5>FEATURES</h5>
            <h1>
              Build anything without code.
            </h1>
            <Firstbutton>Get started for free</Firstbutton>
      </PricingContainer>
      <EachContainer>
        <Imaged>
        <h5>DEVELOP</h5>
        <h1>Build any web app with no code.</h1>
        <p>Bubble lets you create interactive, multi-user apps for desktop and mobile web browsers and includes all the tools you need to build a site like Facebook or Airbnb.</p>
        
        <Image src={images[0]}></Image>
        </Imaged>
      <TextChange>
        <ul>
          <li onClick={()=>{setText(firstclick[0])}}>Customize the UX</li>
          <li onClick={()=>{setText(firstclick[1])}}>Manage data and Accounts</li>
          <li onClick={()=>{setText(firstclick[2])}}>Integrate with Anithing</li>
        </ul>
        <p>{text}</p>
      </TextChange>
      </EachContainer>

      <EachContainer>
        <Imaged>
        <h5>DEVELOP</h5>
        <h1>Build any web app with no code.</h1>
        <p>Bubble lets you create interactive, multi-user apps for desktop and mobile web browsers and includes all the tools you need to build a site like Facebook or Airbnb.</p>
        
        <Image src={images[1]}></Image>
        </Imaged>
      <TextChange>
        <ul>
          <li onClick={()=>{setText(firstclick[0])}}>Customize the UX</li>
          <li onClick={()=>{setText(firstclick[1])}}>Manage data and Accounts</li>
          <li onClick={()=>{setText(firstclick[2])}}>Integrate with Anithing</li>
        </ul>
        <p>{text}</p>
      </TextChange>
      </EachContainer>

      <EachContainer>
        <Imaged>
        <h5>DEVELOP</h5>
        <h1>Build any web app with no code.</h1>
        <p>Bubble lets you create interactive, multi-user apps for desktop and mobile web browsers and includes all the tools you need to build a site like Facebook or Airbnb.</p>
        
        <Image src={images[2]}></Image>
        </Imaged>
      <TextChange>
        <ul>
          <li onClick={()=>{setText(firstclick[0])}}>Customize the UX</li>
          <li onClick={()=>{setText(firstclick[1])}}>Manage data and Accounts</li>
          <li onClick={()=>{setText(firstclick[2])}}>Integrate with Anithing</li>
        </ul>
        <p>{text}</p>
      </TextChange>
      </EachContainer>

      


    </MainContainer>
  )
}

export default Features;