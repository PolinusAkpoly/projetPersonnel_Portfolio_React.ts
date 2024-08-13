/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 13/08/2024 00:25:59
*/
import React, { FC, useEffect } from 'react';
import './Footer.css';

interface FooterProps {}

const Footer: FC<FooterProps> = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
    const runLocalData = async () => {
     
    }
    runLocalData();
  }, []); 

  return (
    <footer>
      <p>&copy;<strong>2024 PORTFOLIO OF Mr S. POLINUS AKPOLY.</strong></p>
    </footer>
  );
}

export default Footer;