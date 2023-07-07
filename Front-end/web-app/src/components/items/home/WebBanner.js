import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import web_banner from '../../../assests/home/web-banner.jpeg';
import { useMediaQuery } from 'react-responsive';


const WebBanner = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 769px) and (max-width: 1024px)' });

  const boxStyles = {
    top: '549px',
    left: '180px',
    right: '180px',
    height: '107px',
    width: '1105px',
    background: 'rgba(255, 255, 255, 0.8)',
    // background: 'linear-gradient(to right, rgba(0, 0, 0, 0.6) 10%, rgba(255, 215, 0, 0.6) 50%, rgba(0, 0, 0, 0.6) 100%)',
    borderRadius: '15px',
    
  
  };

  return (
    <div className="relative">
      <img src={web_banner} alt="web-banner" />
      <div
        className="absolute top-0 left-0 p-4 text-yellow-400"
        style={{
          width: isMobile ? '100%' : '561px',
          height: isMobile ? '100%' : '356px',
          fontSize: isMobile ? '32px' : '50px', // Adjust font size for mobile
          paddingTop: isMobile ? '70px' : '100px', // Adjust top padding for mobile
          fontFamily: 'Berkshire Swash, cursive'
        }}
      >
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
              <span className="pt-7">
                <span className="text-white text-lg text-center font-berkshire">JaffnaMariage.com💕</span><br />
                <span className="text-white text-lg font-times">"Where love stories begin and dreams come true."</span>
              </span>
            </p>
          </div>
          <div>
            <p className="slider-text text-center">
              Now put your hands together, put your hearts together in your hands.<br />
              <span className="text-white text-lg text-center pt-4 font-berkshire">JaffnaMariage.com💕</span>
            </p>
          </div>
          <div>
            <p className="slider-text text-center">
              "Embark on a new chapter of love and happiness.."<br />
              <span className="text-white text-lg text-center pt-4 font-berkshire">JaffnaMariage.com💕</span>
            </p>
          </div>
        </Carousel>
        <div className="flex justify-center items-center h-full mt-2">
         
            <iframe src="https://embed.lottiefiles.com/animation/96048" className="w-full h-full"></iframe>
         
        </div>
        <div className="flex justify-center items-center h-full mt-2">
          {isTablet ? (
            <></>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="absolute p-2" style={boxStyles}>
        <h1 className="text-black">hello</h1>
      </div>
    </div>
  );
};

export default WebBanner;

