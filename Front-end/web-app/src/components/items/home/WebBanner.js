import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import web_banner from '../../../assests/home/web-banner.jpeg';

const WebBanner = () => {
    return (
      <div className="relative">
        <img src={web_banner} alt='web-banner' />
        <div className="absolute top-0 left-0 p-4 text-yellow-400 " style={{ width: '561px', height: '356px',fontSize:'50px',paddingTop:'100px',fontFamily: 'Berkshire Swash, cursive'}}>
          <Carousel
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
            showArrows={false}
            autoPlay
            infiniteLoop
            interval={5000}
            style={{ width: '100%', height: '100%' }}
          >
            <div>
              <p className="slider-text">
                Enjoy life and find your
                your life partner
            </p>
            </div>
            <div>
              <p className="slider-text">"A promise of forever, sealed with love..."</p>
            </div>
            <div>
              <p className="slider-text">"Embark on a new chapter of love and happiness.."</p>
            </div>
          </Carousel>
        </div>
      </div>
    );
  };
  
  export default WebBanner;