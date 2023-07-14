import React from "react";
import { FaUser, FaSearch, FaLink } from "react-icons/fa";
import WebBanner from "../items/home/WebBanner";
import Newmember from "../items/home/Newmember";
import ContactForm from "../items/home/ContactForm";
import SucessStories from "../items/home/SucessStories";


const Homepage = () => {
  return (
    <div>
      <div>
        <WebBanner />
        {/* padding 150px section start*****/}
        <div className="bg-green-400 mx-20">
          <div className="container mx-auto  border-solid border-2 border-gray-800">
            <div className="bg-blue-400 h-597 min-w-full">
              <div className="flex pl-4 pr-4 flex-col items-center justify-center">
                <h2 className="text-gold text-4xl m-2">How It Works</h2>
                <h1 className="text-6xl m-1">
                  Find Your Partner In Just a Few Steps
                </h1>
                <p className="text-2xl mt-4">
                  JaffnaMarriage will help you find your perfect match with just a
                  few steps. You focus on what is most important to you, we do all
                  the work.
                </p>
              </div>
            </div>
            {/* s2 div-sub: */}
            <div className="bg-white h-597 min-w-full flex flex-col items-center justify-center">
              <h2 className="text-3xl mb-4">Website Registration Process</h2>
              <div className="flex items-center">
                <div className="flex flex-col items-center">
                  <FaUser className="text-3xl mb-2" />
                  <span className="text-2xl font-bold">Registration</span>
                </div>
                <span className="text-gray-400 mx-4">➜</span>
                <div className="flex flex-col items-center">
                  <FaSearch className="text-3xl mb-2" />
                  <span className="text-2xl font-bold">Find Your Partner</span>
                </div>
                <span className="text-gray-400 mx-4">➜</span>
                <div className="flex flex-col items-center">
                  <FaLink className="text-3xl mb-2" />
                  <span className="text-2xl font-bold">
                    Connect with Your Partner
                  </span>
                </div>
              </div>
            </div>
            {/* s3 div */}
            <Newmember />
            {/* get started contact form */}
            <ContactForm />
            {/* sucess stories */}
            <SucessStories />
            <Newmember />
          </div>
        </div>
        {/* padding 150px section end*****/}
        <div className="bg-white">
          <div className="container mx-auto px-150">
            {/* footer section */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#273036"
                fillOpacity="1"
                d="M0,128L80,106.7C160,85,320,43,480,58.7C640,75,800,149,960,165.3C1120,181,1280,139,1360,117.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;