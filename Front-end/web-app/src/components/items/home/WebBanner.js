import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import web_banner from '../../../assests/home/web-banner.jpeg';

const WebBanner = () => {
  return (
    <div className="relative">
      <img src={web_banner} alt='web-banner' />
      <div className="absolute top-0 left-0 p-4 text-yellow-400  " style={{ width: '561px', height: '356px', fontSize: '50px', paddingTop: '100px', fontFamily: 'Berkshire Swash, cursive' }}>
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

              <div className='pt-7'>
                <p className="text-white text-lg text-center mb-1" style={{ fontFamily: 'Berkshire Swash, cursive' }}>JaffnaMariage.com💕</p>
                <p className="text-white text-lg" style={{ fontFamily: 'Times New Roman, serif' }}>"Where love stories begin and dreams come true."</p>       
              </div>
            </p>
          </div>
          <div>
            {/* <p className="slider-text">"A promise of forever, sealed with love..."</p> */}
            <p className="slider-text text-center">
              Now put your hands together, put your hearts together in your hands.
              <p className="text-white text-lg text-center pt-4" style={{ fontFamily: 'Berkshire Swash, cursive' }}>JaffnaMariage.com💕</p>
              {/* <p className="text-white text-sm pt-2" style={{ fontFamily: 'Times New Roman, serif' }}>தமிழ் மரபுகள் மற்றும் இதயப்பூர்வமான காதல் உலகில், கனவுகள் பின்னிப்பிணைந்து, பிணைப்புகள் என்றென்றும் பிணைக்கப்பட்டுள்ளன, நித்திய ஒற்றுமையின் பயணத்தைத் தொடங்க உங்களை அழைக்கிறோம்.</p> */}
            </p>
          </div>
          <div>
            {/* <p className="slider-text">"Embark on a new chapter of love and happiness.."</p> */}
            <p className="slider-text text-center">
            "Embark on a new chapter of love and happiness.."
            <p className="text-white text-lg text-center pt-4" style={{ fontFamily: 'Berkshire Swash, cursive' }}>JaffnaMariage.com💕</p>
              {/* <p className="text-white text-lg pt-2" style={{ fontFamily: 'Times New Roman, serif' }}>"Where love stories begin and dreams come true."</p> */}
            </p>
          </div>
        </Carousel>
        <div>
           <div className='bg-blue-400 '>
           <iframe src="https://embed.lottiefiles.com/animation/96048"></iframe>
           </div>
        </div>
      </div>
    </div>
  );
};

export default WebBanner;