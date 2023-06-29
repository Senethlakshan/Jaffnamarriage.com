import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import web_banner from '../../../assests/home/web-banner.jpeg';

const WebBanner = () => {
  return (
    <div className="relative">
      <img src={web_banner} alt='web-banner' />
      <div className="absolute top-0 left-0 p-4 text-yellow-400" style={{ width: '561px', height: '356px', fontSize: '50px', paddingTop: '100px', fontFamily: 'Berkshire Swash, cursive' }}>
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
              Enjoy life and find your life partner<br />
              <span className='pt-7'>
                <span className="text-white text-lg text-center" style={{ fontFamily: 'Berkshire Swash, cursive' }}>JaffnaMariage.com💕</span><br />
                <span className="text-white text-lg" style={{ fontFamily: 'Times New Roman, serif' }}>"Where love stories begin and dreams come true."</span>
              </span>
            </p>
          </div>
          <div>
            <p className="slider-text text-center">
              Now put your hands together, put your hearts together in your hands.<br />
              <span className="text-white text-lg text-center pt-4" style={{ fontFamily: 'Berkshire Swash, cursive' }}>JaffnaMariage.com💕</span>
            </p>
          </div>
          <div>
            <p className="slider-text text-center">
              "Embark on a new chapter of love and happiness.."<br />
              <span className="text-white text-lg text-center pt-4" style={{ fontFamily: 'Berkshire Swash, cursive' }}>JaffnaMariage.com💕</span>
            </p>
          </div>
        </Carousel>
        <div className="flex justify-center items-center" style={{ height: '100%', marginTop: '2px' }}>
          <div>
            <iframe src="https://embed.lottiefiles.com/animation/96048" style={{ width: '100%', height: '100%' }}></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebBanner;
