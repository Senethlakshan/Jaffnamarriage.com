import React from "react";
import { FaUser, FaSearch, FaLink } from "react-icons/fa";
import WebBanner from "../items/home/WebBanner";
import Newmember from "../items/home/Newmember";

const Homepage = () => {
  return (
    <div>
      <div>
        <WebBanner />
        {/* s2 div:how to work */}
        <div className="bg-blue-400 h-597 min-w-full">
          <div className="flex pl-4 pr-4 flex-col items-center justify-center">
            <h2 className="text-gold text-4xl m-2">How It Works</h2>
            <h1 className="text-6xl m-1">Find Your Partner In Just a Few Steps</h1>
            <p className="text-2xl mt-4">
              JaffnaMarriage will help you find your perfect match with just a few
              steps. You focus on what is most important to you, we do all the
              work.
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
              <span className="text-2xl font-bold">Connect with Your Partner</span>
            </div>
          </div>
        </div>
        {/* s3 div */}
        <Newmember/>
      </div>
    </div>
  );
};

export default Homepage;
