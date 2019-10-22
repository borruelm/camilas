import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Image from 'material-ui-image';
import camilasCartel from '../img/camilasCartel.png'; 
import imgCar3 from '../img/imgCar3.jpg';
import imgCar2 from '../img/imgCar2.jpg';
import ImgMediaCard from './cardElement';
 
export default class MainCarousel extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={1}
        naturalSlideHeight={1}
        totalSlides={3}
        isPlaying={true}
      >
        <Slider>
            <Slide index={0}>
                <Image src={camilasCartel}></Image> 
            </Slide>
            <Slide index={1}>
                <Image src={imgCar3}></Image> 
            </Slide>
            <Slide index={2}>
                <ImgMediaCard img={imgCar2} />
                <ImgMediaCard img={imgCar2} />
            </Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
            <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    );
  }
}