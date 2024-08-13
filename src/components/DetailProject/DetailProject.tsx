/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 12/08/2024 22:26:22
*/
import React, { FC, useEffect, useState } from 'react';
import './DetailProject.css';
import { useParams } from 'react-router-dom';

import { Project } from '../../models/Project';
import CarouselImages from '../CarouselImages/CarouselImages';



interface DetailProjectProps {

}


const DetailProject: FC<DetailProjectProps> = () => {

  const { slug } = useParams();
  console.log(slug);

  const [detailProject, setDetailProject] = useState<Project | null>(null);


  const projects: Project[] = [
    {
      _id: "1",
      name: "Un site vitrine pour une agence de voyage",
      description: "Site vitrine, application web, site web, application mobile",
      imageUrl: [
        "/assets/images/projects/Glen.png",
        "/assets/images/projects/dev1.jpg",
        "/assets/images/projects/dev2.jpg"
      ],
      slug: "un-site-vitrine-pour-une-agence-de-voyage874569",
      projetUrl: "https://mudey.fr/",
      updated_at: "",
      created_at: "12 / 08 / 2024"
    },
    {
      _id: "2",
      name: "Un site vitrine pour un compagnie d' assurance",
      description: "Des intégrations (X)HTML / CSS respectueuses des standards du Web",
      imageUrl: [
        "/assets/images/projects/hellostaff.png",
        "/assets/images/projects/dev3.jpg",
        "/assets/images/projects/dev4.jpg"

      ],
      slug: "un-site-vitrine-pour-un-compagnie-d-assurance5487",
      projetUrl: "https://mudey.fr/",
      updated_at: "",
      created_at: "12 / 08 / 2024"
    },
    {
      _id: "3",
      name: "Résérvation de cours en ligne",
      description: "Développement front end et back end",
      imageUrl: [
        "/assets/images/projects/Reserveculinaire.png",
        "/assets/images/projects/dev5.jpg",
        "/assets/images/projects/dev6.jpg"

      ],
      slug: "résérvation-de-cours-en-ligne78954",
      projetUrl: "https://mudey.fr/",
      updated_at: "",
      created_at: "12 / 08 / 2024"
    },
    {
      _id: "4",
      name: "Une platforme de vente au enchères en ligne",
      description: "Compatible tous supports, tablette & application mobile.",
      imageUrl: [
        "/assets/images/projects/reserveculinaire21.png",
        "/assets/images/projects/dev7.jpg",
        "/assets/images/projects/dev8.jpg"
      ],
      slug: "une-platforme-de-vente-au-enchères-en-ligne4587",
      projetUrl: "https://mudey.fr/",
      updated_at: "",
      created_at: "12 / 08 / 2024"
    },
    {
      _id: "5",
      name: "Géstion des réssources humaines",
      description: "Affichage des informations, des pages pour un référencement optimal",
      imageUrl: [
        "/assets/images/projects/altee2.png",
        "/assets/images/projects/work1.jpg",
        "/assets/images/projects/work2.jpg"
      ],
      slug: "géstion- des-réssources-humaines1245",
      projetUrl: "https://mudey.fr/",
      updated_at: "",
      created_at: "12 / 08 / 2024"
    },
    {
      _id: "6",
      name: "Platforme collaborative de gestion de projet",
      description: "Des animations de contenu non intrusives pour embellir votre projet",
      imageUrl: [
        "/assets/images/projects/ecommerce.png",
        "/assets/images/projects/work3.jpg",
        "/assets/images/projects/work4.jpg"
      ],
      slug: "platforme-collaborative-de-gestion-de-projet78451",
      projetUrl: "https://mudey.fr/",
      updated_at: "",
      created_at: "12 / 08 / 2024"
    },
  ]

  console.log(detailProject);

  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {

      const projetSelected: Project[] = projects.filter(((project) => project.slug === slug))
      console.log(projetSelected);

      setDetailProject(projetSelected[0])


    }
    runLocalData()
  }, [slug])

  return (
    <div className="DetailProject">
      <div className='enTeteDetailProject'>
        <img src="/assets/images/acceuil/bacgrounAcceuil.jpg" alt="" />

      </div>
      <div className='opacityenTeteDetailProject'></div>
      <div className="titleEntete">
        <h1>PORTFOLIO DETAILS</h1>
        <strong>Voici les details du projet : <em>{detailProject?.name}</em> </strong>
      </div>

      <div className='container'>

        <div className='row containerDetail'>
          <div className="col-lg-8">
            <CarouselImages images={detailProject?.imageUrl as string[]} />
          </div>
          <div className="col-lg-4">
            <div className="informations">
              <h3>Informations:</h3>
              <p><strong>Nom du Projet: </strong>{detailProject?.name} </p>
              <p><strong> Date du Project: </strong>{detailProject?.created_at} </p>
              <p><strong> Project URL: </strong>{detailProject?.projetUrl} </p>

              <h3>Description du Projet</h3>
              <p>{detailProject?.description}</p>
            </div>

          </div>
        </div>



      </div>

    </div>
  );
}

export default DetailProject;