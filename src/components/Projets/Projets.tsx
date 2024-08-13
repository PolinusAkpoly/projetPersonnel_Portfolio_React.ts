/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 11/08/2024 17:21:25
*/
import React, { FC, useEffect } from 'react';
import './Projets.css';
import { Project } from '../../models/Project';
import { Link } from 'react-router-dom';


interface ProjetsProps {

}


const Projets: FC<ProjetsProps> = () => {

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

  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {

    }
    runLocalData()
  })

  return (
    <div className="Projets">
      <div className="col-sm-12">
        <div className="projet-title-content">
          <h3 className="projet-title">
            Mes Projets
          </h3>
          <p className="test-colorV fw-bold">
            Une partie des projets sur lesquels j'ai travaillé et mes projets personnels.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="row gap-4 ">


          {
            projects.length && projects.map((project: Project, index: number) => {
              return <div key={index} className='projet-item col-lg-4 col-md-3 col-sm-2'>
                  <div className="image-project" style={{ backgroundImage: `url(${project.imageUrl[0]})` }}>
                  </div>

                <div className='titl-projet'>
                  <h5>{project.name}</h5>
                  <div className='imagePlus'>
                    <Link to={`/detailproject/${project.slug}`}><img src="/assets/images/projects/plus.png" alt="" /></Link>
                  </div>
                </div>
                <div className='created_at'>
                  {project.created_at}
                </div>
              </div>
            })

          }

        </div>
      </div>

    </div>
  );
}

export default Projets;