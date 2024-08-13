/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 09/08/2024 16:42:38
*/
import React, { FC, useEffect } from 'react';
import './Services.css';
import { Service } from '../../models/Service';


interface ServicesProps {

}


const Services: FC<ServicesProps> = () => {

const services: Service[] = [
  {
    _id: "1",
    name: "GESTION DE PROJETS WEB",
    description: "Site vitrine, application web, site web, application mobile",
    imageUrl: "/assets/images/services/gestionProjet.png",
    updated_at: "",
    created_at: ""
  },
  {
    _id: "2",
    name: "INTÉGRATION WEB",
    description: "Des intégrations (X)HTML / CSS respectueuses des standards du Web",
    imageUrl: "/assets/images/services/integration.png",
    updated_at: "",
    created_at: ""
  },
  {
    _id: "3",
    name: "DÉVELOPPEMENTS",
    description: "Développement front end et back end",
    imageUrl: "/assets/images/services/developpement.png",
    updated_at: "",
    created_at: ""
  },
  {
    _id: "4",
    name: "Responsive Design",
    description: "Compatible tous supports, tablette & application mobile.",
    imageUrl: "/assets/images/services/responsive.png",
    updated_at: "",
    created_at: ""
  },
  {
    _id: "5",
    name: "RÉFÉRENCEMENT NATUREL",
    description: "Affichage des informations, des pages pour un référencement optimal",
    imageUrl: "/assets/images/services/referencement.png",
    updated_at: "",
    created_at: ""
  },
  {
    _id: "6",
    name: "DYNAMISME DES PAGES",
    description: "Des animations de contenu non intrusives pour embellir votre projet",
    imageUrl: "/assets/images/services/dynamique.png",
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

  const handleMouseOver = (event: any) => {
    const serviceItemHover = event.currentTarget;
    const borderIcon = serviceItemHover.firstElementChild;
    const contentIcon = borderIcon.children[0];
    
    borderIcon.style.backgroundColor = "aqua";
    contentIcon.style.backgroundColor = "crimson";
    
  };
  
  const handleMouseOut = (event: any) => {
    const serviceItemHover = event.currentTarget;
    const borderIcon = serviceItemHover.firstElementChild;
    const contentIcon = borderIcon.children[0];
    
    borderIcon.style.backgroundColor = "crimson";
    contentIcon.style.backgroundColor = "white";
    
  };


  return (
    <div className="Services">
      <div className='bacgrounHeader'></div>
      <div className="col-sm-12">
        <div className="services-title-content">
          <h3 className="services-title">
            Mes Services
          </h3>
          <p className="test-colorV fw-bold">
            Des prestations adaptées à vos besoins !
          </p>

        </div>
      </div>

      <div className="container">
        <div className="row gap-4 ">
          {/* <div className=""> */}

            {
              services.length && services.map((service: Service, index: number) => {
              return <div key={index} className='service-item col-lg-4 col-md-3 col-sm-2'
               onMouseOver={(event)=> handleMouseOver(event)}
               onMouseOut={(event)=> handleMouseOut(event)}
               >
              <div className="border-icon">
                <div className="content-icon" >
                  <img src={service.imageUrl} alt="gestionProjet" />
                </div>
              </div>
              <h4>{service.name}</h4>
              <p className=''>{service.description}</p>
            </div>

              }) 
              
            }
            
          </div>
        </div>
      </div>
    // </div>
  );
}

export default Services;