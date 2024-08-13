/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 12/08/2024 19:56:55
*/
import React, { FC, useEffect } from 'react';
import './Contact.css';


interface ContactProps {

}


const Contact: FC<ContactProps> = () => {



  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {

    }
    runLocalData()
  })

  return (
    <div className="Contact">

      <div className="container-contact">
        <div className='row'>
          <div className="col-lg-6   container-contact-left">
            <h2>Comment me contacter ?</h2>
            <p className='fs-4'>Une idéé?</p>
            <p className='fs-4'>Un projet?</p>
            <p className='fs-5'>N'hésitez pas à demander des dévis ! [c'est gratuit]</p>

            <div className='d-flex'>
              <img src="/assets/images/contact/gps.png" width={"20px"} height={"22px"} alt="icon" />
              <p> BP 02 B 27 Cotonou, Godomey / Togoudo 110</p>
            </div>

            <div className='d-flex'>
              <img src="/assets/images/contact/appel.png" width={"20px"} height={"22px"} alt="icon" />
              <p> +229 61 46 18 83</p>
            </div>

            <div className='d-flex'>
              <img src="/assets/images/contact/enveloppe.png" width={"15px"} height={"20px"} alt="icon" />
              <p>sessi.polinus@espero-soft.com </p>
            </div>


          </div>
          <div className="col-lg-6 container-contact-right">
            <h2>Envoyez moi un message</h2>

            <form action="">  
            <div className="mb-3">
              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Votre nom..." />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Votre prénoms..." />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Votre address email..." />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Objet de votre message..." />
            </div>
            <div className="mb-3">
              <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Votre message..." rows={3}></textarea>
            </div>

            <button type='submit' className='buttonContact'>Envoyez</button>
            </form>
          </div>
        </div>


      </div>

    </div>
  );
}

export default Contact;