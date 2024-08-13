/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 13/08/2024 18:02:10
*/
import React, { FC, useEffect } from 'react';
import './CarouselImages.css';
import Carousel from 'react-bootstrap/Carousel';

interface CarouselImagesProps {
 images: Array<string>
}


const CarouselImages : FC<CarouselImagesProps> = ({images}) =>{

console.log(images);


    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

    return (
      <>
        {images?.length ? (
          <Carousel fade>
            <Carousel.Item>
              <img src={`${images[0]}`} alt="" width="100%" height="400px" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={`${images[1]}`} alt="" width="100%" height="400px" />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={`${images[2]}`} alt="" width="100%" height="400px" />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        ) : null}
      </>
    );
    
}

export default CarouselImages;