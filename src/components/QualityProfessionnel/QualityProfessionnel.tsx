/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 11/08/2024 19:22:38
*/
import React, { FC, useEffect } from 'react';
import './QualityProfessionnel.css';

import { Qualite } from '../../models/Qualite';


interface QualityProfessionnelProps {

}


const QualityProfessionnel: FC<QualityProfessionnelProps> = () => {

  const qualites: Qualite[] = [
    {
      _id: "1",
      name: "95% de clients satisfaits",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae in quis voluptates fugiat officiis quidem ad accusamus ",
      imageUrl: "/assets/images/qualiteProfess/personnes.png",
      updated_at: "",
      created_at: ""
    },
    {
      _id: "2",
      name: "Site Web Durable",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae in quis voluptates fugiat officiis quidem ad accusamus ",
      imageUrl: "/assets/images/qualiteProfess/cadenas.png",
      updated_at: "",
      created_at: ""
    },
    {
      _id: "3",
      name: "Solution Diversifier",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae in quis voluptates fugiat officiis quidem ad accusamus ",
      imageUrl: "/assets/images/qualiteProfess/solutionsDiversifie.png",
      updated_at: "",
      created_at: ""
    },

  ]





  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {

    }
    runLocalData()
  })

  return (
    
    <div className="QualityProfessionnel ">
<div className="container row">
      {
        qualites && qualites.map((qualite: Qualite, index: number) => {
          return <div key={index} className='col-lg-4 col-md-6 col-sm-12'>
            <div className='quality'>
              <div className="icon">
                <img src={qualite.imageUrl} alt="" />
              </div>
              <h4>{qualite.name}</h4>
              <p>
                {qualite.description}
              </p>
            </div>
          </div>

        })
      }

</div>
    </div>
  );
}

export default QualityProfessionnel;