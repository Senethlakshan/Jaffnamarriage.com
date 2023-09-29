
// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import web_banner from '../../../assests/home/web-banner.jpeg';
// import { useMediaQuery } from 'react-responsive';

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import web_banner from "../../../assests/home/web-banner.jpeg";
import { useMediaQuery } from "react-responsive";
import { FaSearch } from "react-icons/fa";


const WebBanner = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 769px) and (max-width: 1024px)",
  });

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
    <div className="relative">
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
      <div className="absolute p-2 typeSelection" style={boxStyles}>
        {/* <table className="w-full">
          <tbody>
            <tr>
              <th className=" p-2 text-center">I'm Looking For a </th>
              <th className=" p-2 text-center">Age </th>
              <th className=" p-2 text-center"></th>
              <th className=" p-2 text-center">Age </th>
              <th className=" p-2 text-center">Of Religion </th>
              <th className=" p-2 text-center"> </th>
            </tr>
            <tr>
              <td className=" p-2 text-center">
                <select className="w-full bg-white border border-gray-300 rounded py-2 px-4">
                  <option value="">Looking for</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </td>
              <td className=" p-2 text-center">
                <select className="w-full bg-white border border-gray-300 rounded py-2 px-4">
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </td>
              <td className=" p-2 text-center">
                <p>To</p>
              </td>
              <td className=" p-2 text-center">
                <select className="w-full bg-white border border-gray-300 rounded py-2 px-4">
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </td>
              <td className=" p-2 text-center">
                <select className="w-full bg-white border border-gray-300 rounded py-2 px-4">
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </td>
              <td className=" p-2 text-center">
                <button className="bg-gradient-to-tr from-amber-900 to-yellow-300 text-white py-2 px-4 rounded flex items-center">
                  Search
                  <FaSearch className="ml-2" />
                </button>{" "}
              </td>
            </tr>
          </tbody>
        </table> */}


        <div className="w-full userTasteFilter">
          <div className="eachElem">
            <div className=" p-2 text-center">I'm Looking For a </div>
            <div className=" p-2 text-center optionCont">
                  <select className="selectOption w-full bg-white border border-gray-300 rounded py-2 px-4">
                    <option value="">Looking for</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
          </div>
          <div className="eachElem">
            <div className=" p-2 text-center">Age</div>
            <div className=" p-2 text-center optionCont">
                  <select className="selectOption w-full bg-white border border-gray-300 rounded py-2 px-4">
                    <option value="">Looking for</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
          </div>
          <div className="eachElem">
            <div className=" p-2 text-center">To</div>
            </div>
          <div className="eachElem">
            <div className=" p-2 text-center">Age</div>
            <div className=" p-2 text-center optionCont">
                  <select className="selectOption w-full bg-white border border-gray-300 rounded py-2 px-4">
                    <option value="">Looking for</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
          </div>
          <div className="eachElem">
            <div className=" p-2 text-center">Of Religion</div>
            <div className=" p-2 text-center optionCont">
                  <select className="selectOption w-full bg-white border border-gray-300 rounded py-2 px-4">
                    <option value="">Looking for</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
          </div>
          <div className="eachElem">
               <div className=" p-2 text-center optionCont">
                <button className="searchTypeFiltBtn bg-gradient-to-tr from-amber-900 to-yellow-300 text-white py-2 px-4 rounded flex items-center">
                  Search
                  <FaSearch className="ml-2" />
                </button>{" "}
              </div>
          </div>
           
        </div>
      </div>
      </div>
    </div>
  );
};

export default WebBanner;
