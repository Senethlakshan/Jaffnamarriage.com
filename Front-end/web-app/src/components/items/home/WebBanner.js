
// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import web_banner from '../../../assests/home/web-banner.jpeg';
// import { useMediaQuery } from 'react-responsive';

import React, { useState, useEffect } from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import web_banner from "../../../assests/home/web-banner.jpeg";
import { useMediaQuery } from "react-responsive";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const WebBanner = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 769px) and (max-width: 1024px)",
  });
  const [lookingFor, setLookingFor] = useState('');
  const [ageFrom, setAgeFrom] = useState('');
  const [ageTo, setAgeTo] = useState('');
  const [religion, setReligion] = useState('');
  const navigate = useNavigate();
  const handleSearch = () => {
    // Handle the search here using the selected values (lookingFor, ageFrom, ageTo, religion)
    console.log('Looking For:', lookingFor);
    console.log('Age From:', ageFrom);
    console.log('Age To:', ageTo);
    console.log('Religion:', religion);
    navigate(`/browse?lookingFor=${lookingFor}&ageFrom=${ageFrom}&ageTo=${ageTo}&religion=${religion}`);
  };


  const boxStyles = {

    // top: '549px',
    // left: '180px',
    // right: '180px',
    // height: '107px',
    // width: '90%',
    // maxWidth: '1105px',
    // background: 'rgba(255, 255, 255, 0.8)',
    // borderRadius: '15px',

    // top: "549px",
    // left: "180px",
    // right: "180px",
    // height: "107px",
    // width: "1105px",
    background: "rgba(255, 255, 255, 0.8)",
    // background: 'linear-gradient(to right, rgba(0, 0, 0, 0.6) 10%, rgba(255, 215, 0, 0.6) 50%, rgba(0, 0, 0, 0.6) 100%)',
    borderRadius: "15px",

  };

  return (
    <div className="relative banner-cont">
      <img src={web_banner} alt="web-banner" />
      <div
        className="absolute top-0 left-0 p-4 text-yellow-400"
        style={{

          width: isMobile ? '90%' : '561px',
          height: isMobile ? 'auto' : '356px',
          fontSize: isMobile ? '24px' : '50px',
          paddingTop: isMobile ? '50px' : '100px',
          fontFamily: 'Berkshire Swash, cursive'


        }}
      >
        {/* carousel text */}
        <Carousel
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          showArrows={false}
          autoPlay
          infiniteLoop
          interval={5000}
          style={{ width: "100%", height: "100%" }}
        >
          <div>
            <p className="slider-text">
              Enjoy life and find your life partner
              <br />
              <span className="pt-7">
                <span className="text-white text-lg font-serif">
                  "Where love stories begin and dreams come true."
                </span>
                <br />
                <span className="text-white text-lg text-center font-berkshire">
                  JaffnaMariage.com💕
                </span>
              </span>
            </p>
          </div>
          <div>
            <p className="slider-text text-center">
              Now put your hands together, put your hearts together in your
              hands.
              <br />
              <span className="text-white text-lg text-center pt-4 font-berkshire">
                JaffnaMariage.com💕
              </span>
            </p>
          </div>
          <div>
            <p className="slider-text text-center">
              "Embark on a new chapter of love and happiness.."
              <br />
              <span className="text-white text-lg text-center pt-4 font-berkshire">
                JaffnaMariage.com💕
              </span>
            </p>
          </div>
        </Carousel>
        <div className="flex justify-center items-center h-full mt-2">
          <iframe
            src="https://embed.lottiefiles.com/animation/96048"
            className="w-full h-full"
            title="Animation"
            allowFullScreen
            frameBorder="0"
          ></iframe>

          {/* lottiefiles hart animated */}
          <iframe
            src="https://embed.lottiefiles.com/animation/96048"
            className="w-full h-full"
          ></iframe>
        </div>
        <div className="flex justify-center items-center h-full mt-2">
          {isTablet ? <></> : <></>}

        </div>
        {!isTablet && (
          <div className="flex justify-center items-center h-full mt-2">
            {/* Additional content for non-tablet devices */}
          </div>
        )}
      </div>
      {/* box like serach Members */}

      <div className="typeSelectionContainer">
        <div className=" p-2 typeSelection">

          <div className="w-full userTasteFilter">
            <div className="eachElemTypeFilter">
              <div className="eachOption">I'm Looking For a</div>
              <div className="eachOption optionCont">
                <select
                  className="selectOptionTypeFilt"
                  value={lookingFor}
                  onChange={(e) => setLookingFor(e.target.value)}
                >
                  <option value="">Looking for</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>

            <div className="eachElemTypeFilter">
              <div className="eachOption">Age</div>
              <div className="eachOption optionCont">
                <select
                  className="selectOptionTypeFilt"
                  value={ageFrom}
                  onChange={(e) => setAgeFrom(e.target.value)}
                >
                  <option value="">Looking for</option>
                  <option value="18">18</option>
                  {/* Add more age options as needed */}
                </select>
              </div>
            </div>

            <div className="eachElemTypeFilter">
              <div className="eachOption">To</div>
            </div>

            <div className="eachElemTypeFilter">
              <div className="eachOption">Age</div>
              <div className="eachOption optionCont">
                <select
                  className="selectOptionTypeFilt"
                  value={ageTo}
                  onChange={(e) => setAgeTo(e.target.value)}
                >
                  <option value="">Looking for</option>
                  <option value="60">60</option>
                  {/* Add more age options as needed */}
                </select>
              </div>
            </div>

            <div className="eachElemTypeFilter">
              <div className="eachOption">Of Religion</div>
              <div className="eachOption optionCont">
                <select
                  className="selectOptionTypeFilt"
                  value={religion}
                  onChange={(e) => setReligion(e.target.value)}
                >
                  <option value="">Looking for</option>
                  <option value="christian">Christian</option>
                  <option value="hindu">Hindu</option>
                  {/* Add more religion options as needed */}
                </select>
              </div>
            </div>

            <div className="eachElemTypeFilter">
              <div className="eachOption optionCont">
                <button
                  className="searchTypeFiltBtn bg-gradient-to-tr from-amber-900 to-yellow-300 text-white py-2 px-4 rounded flex items-center"
                  onClick={handleSearch}
                >
                  Search
                  <FaSearch className="ml-2" />
                </button>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebBanner;
