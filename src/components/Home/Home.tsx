/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 02/08/2024 23:13:15
*/
import React, { FC, useEffect } from 'react';
import './Home.css';
import Apropos from '../Apropos/Apropos';
import Services from '../Services/Services';
import QualityProfessionnel from '../QualityProfessionnel/QualityProfessionnel';
import Projets from '../Projets/Projets';
import Contact from '../Contact/Contact';


interface HomeProps {

}


const Home: FC<HomeProps> = () => {



  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {

    }
    runLocalData()
  })

  return (
    <div className="Home">


      <div className='acceille'></div>
      <div className='opacity'></div>

      <div className='accueilContent'>
        <h1 className='accueilContentH1'>SESSI A. POLINUS AKPOLY</h1>
        <h1>Je suis un developpeur web passionné</h1>
      </div>

      <Apropos />
      <Services />
      <QualityProfessionnel />
      <Projets />
      <Contact />
    </div>
  );
}

export default Home;