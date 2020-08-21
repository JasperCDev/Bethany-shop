import React from 'react';
import { FooterSection } from './styles';

export const Footer: React.FC = () => {


  return (
    <FooterSection>
      <p>developed by Jasper Chauvin</p>
      <p style={{paddingLeft: '20px'}}><a href="https://www.linkedin.com/in/jasper-chauvin/">Linkedin/JasperChauvin</a></p>
    </FooterSection>
  )
}