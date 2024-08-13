/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 08/08/2024 15:58:35
*/
import React, { FC, useEffect, useState } from 'react';
import './Competance.css';


interface CompetanceProps {
  langage: string;
  percentLangageSuit: number;

}


const Competance: FC<CompetanceProps> = ({ percentLangageSuit, langage }) => {

  const [percentLangageOK, setPercentLangageOK] = useState<number>(0);
  const [percentLangageNoOK, setPercentLangageNoOK] = useState<number>(0);


  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {


      setPercentLangageOK(percentLangageSuit)
      setPercentLangageNoOK(100 - percentLangageOK)
    }
    runLocalData()
  })
  // console.log(`percentLangageNoOK`, percentLangageNoOK);
  return (
    <div>
      <div>
        <h6 className='blue'>{langage} <span className='blue'>{percentLangageOK}%</span></h6>
      </div>
      <div className="competance mb-3">
        <div className="pourcentageOk" style={{ width: `${percentLangageOK}%` }}></div>
        <div className="pourcentageNoOk" style={{ width: `${percentLangageNoOK}%` }}></div>

      </div>
    </div>
  );
}

export default Competance;