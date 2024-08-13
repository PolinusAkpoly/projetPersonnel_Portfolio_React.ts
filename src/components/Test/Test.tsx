/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 13/08/2024 11:35:04
*/
import React, { FC, useEffect } from 'react';
import './Test.css';


interface TestProps {
 
}


const Test : FC<TestProps> = () =>{



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
      <div className="Test">
          Test Component
      </div>
  );
}

export default Test;