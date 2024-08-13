/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 06/08/2024 12:57:10
*/
import React, { FC, useEffect } from 'react';
import './Apropos.css';
import Competance from '../Competance/Competance';


interface AproposProps {

}


const Apropos: FC<AproposProps> = () => {



  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {

    }
    runLocalData()
  })

  return (
    <div className="Apropos">
{/* <div className='bacgrounHeader'></div> */}
      <div className="contentApropos">
        <div className="row">
          <div className='col-lg-6 col-sm-12' >
            <div className="presentation">
              <div className="row contentPresentation">
                <div className="profilImage col-lg-5 col-md-5 col-sm-5"></div>
                <div className=" col-lg-7 col-md-7 col-sm-7">

                <div className='mt-2'>
                        <p className="p-contentelt"><h5 >Nom:</h5><span className='test-colorV'> S. POLINUS AKPOLY</span></p>
                        <p className="p-contentelt"><h5 >Profile:</h5><span className='test-colorV'> Développeur Web FullStack</span></p>
                        <p className="p-contentelt"><h5 >Email:</h5> <span className='test-colorV'> poakpoli@gmail.com</span></p>
                        <p className="p-contentelt"><h5 >Phone:</h5> <span className='test-colorV'> +229 61 46 18 83</span></p>
                        <p className="download text-center">                 
                          <a href="cvPolinus.pdf" download="cvPolinus.pdf" className="">Mon CV</a>                  
                        </p> 

                      </div>

              
                </div>
              </div>

            </div>
            <div className="competances">
              <h4 className='title-competances'>Mes Compétences</h4>
              <Competance langage={'HTML5'} percentLangageSuit={100} />
              <Competance langage={'CSS3'}  percentLangageSuit={100} />
              <Competance langage={'JavaScript'}  percentLangageSuit={70} />
              <Competance langage={'JQuery'}  percentLangageSuit={100} />
              <Competance langage={'BOOTSTRAP'}  percentLangageSuit={90} />
              <Competance langage={'PHP'}  percentLangageSuit={40} />
              <Competance langage={'Symfony'}  percentLangageSuit={40} />
              <Competance langage={'Angular JS'}  percentLangageSuit={20} />
              <Competance langage={'React JS '}  percentLangageSuit={80} />
              <Competance langage={'Python'}  percentLangageSuit={100} />
              <Competance langage={'Django'}  percentLangageSuit={10} />
              <Competance langage={'MySql'}  percentLangageSuit={70} />
              <Competance langage={'MongoDB'}  percentLangageSuit={80} />
              <Competance langage={'Wordpress'}  percentLangageSuit={60} />
            </div>
          </div>

          <div className='col-lg-6 col-sm-12'>
            <h2 className='title-apropos'>A propos de moi:</h2>
            <p className="textP">
              Ma passion pour le développement web a commencé en 2020 et m'a demandé un changement radical de cursus afin de pouvoir pleinement l'exploiter.
            </p>
            <p className="textP">Dès lors, j'ai mis tout en œuvre pour percer dans cette voie, tout en prenant du plaisir sur les divers projets développés.</p>
            <p className="textP">
              Bien que je n'aie pas encore d'expérience professionnelle, j'ai réalisé de nombreux projets personnels, et certains sont toujours en cours. Cette expérience m'a permis de cultiver une expertise robuste dans le domaine du développement web. Chaque projet a enrichi mes connaissances et affiné mes compétences, me permettant ainsi de naviguer avec aisance à travers les défis et les innovations de ce secteur en constante évolution.
            </p>
            <p className="textP">
              En juin 2023, j'ai décidé de devenir développeuse web full-stack, ce qui a renforcé mon désir d'explorer une variété de domaines d'activité.

              Ma passion pour le web et ma détermination à toujours me perfectionner m'ont guidée tout au long de cette trajectoire, faisant de moi une professionnelle passionnée et responsable.
            </p>
            <p className="textP">Je veux devenir la meilleure pour l'avenir qui m'attend.
              en tant qu'intégratrice web, cela a renforcé mon désir d'explorer une variété de domaines d'activité.</p>
            <p className="textP">Cette expérience variée m'a permis d'approfondir ma compréhension des attentes et des exigences des clients. En conséquence, j'ai développé la capacité de répondre de manière précise à leurs besoins spécifiques, quel que soit le domaine d'activité. </p>
            <p className="textP">Cette diversité m'a également enrichi en me confrontant à une multitude de défis, me permettant ainsi d'affiner mes compétences et d'offrir des solutions adaptées et efficaces.</p>
          
        </div>
      </div>

    </div>

   </div >
  );
}

export default Apropos;