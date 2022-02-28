import React from 'react'
import { H1 } from '../../globalStyles'
import { FooterContainer,BlueContainer,Links } from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
        <BlueContainer>
            <H1>Create a free account to get started.</H1>
            <button>Get started For Free</button>
            <p>Join 1,609,349 Bubblers today and start building.</p>
        </BlueContainer>

        <Links>
        <p>© 2022, Bubble Group, Inc. All Rights Reserved.</p>
        <ul>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Marketplace Policies</li>
            <li>Acceptable Policies</li>
            <li>Acceptable Uses</li>
            <li>GDPR / DPA</li>
        </ul>

        </Links>

    </FooterContainer>
  )
}

export default Footer