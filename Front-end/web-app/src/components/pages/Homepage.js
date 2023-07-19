import React from "react";
import { Helmet } from "react-helmet";
import { FaUser, FaSearch, FaLink } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import LottieAnimation from "lottie-react";
import WebBanner from "../items/home/WebBanner";
import Newmember from "../items/home/Newmember";
import ContactForm from "../items/home/ContactForm";
import SucessStories from "../items/home/SucessStories";
import RegisterIcon from "../../assests/home/REGISTER.png";
import ConnectIcon from "../../assests/home/çonnect.png";
import FindIcon from "../../assests/home/search.png";
import Footer from "../items/home/Footer";
import animationData from "../../assests/home/bg-remover/lottie/riarrow.json";
import axios from 'axios';
import axiosInstance from '../../api';

const token = localStorage.getItem('api_token');
// Print the value of the api_token cookie

if (token) {
  axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
 // Print the headers to verify if the authorization header is set
}

axiosInstance.get('/validToken')
  .then(response => {
    // Token is valid, handle the response
   
    // Handle the response based on the message
    if (response.data.message === 'valid') {
      localStorage.setItem('login', 'true'); // Set boolean value as string 'true'
    } else {
      localStorage.setItem('login', 'false'); // Set boolean value as string 'false'
    }
  })
  .catch(error => {
    // Handle the error
    console.error(error);
    localStorage.setItem('login', 'false'); // Set boolean value as string 'false' for error case
  });




const Homepage = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";


  return (
    <div>
      <Helmet>
        {isHomePage && (
          <script type="text/javascript">
            {`
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/64b18508cc26a871b0287207/1h5amvajm';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `}
          </script>
        )}
      </Helmet>

      <div>
        <WebBanner />
        {/* padding 150px section start*****/}
        <div className=" mx-20">
          <div className="container mx-auto ">
            {/* how to work
            if add border: border-solid border-2 border-gray-800 */}
            <div className="h-597 min-w-full mb-20">
              <div className="flex pl-4 pr-4 flex-col items-center justify-center">
                <h2 className="text-amber-500 text-4xl m-2 font-serif">
                  How It Works
                </h2>
                <h1 className="text-6xl m-1 text-black font-serif">
                  Find Your Partner In Just a Few Steps
                </h1>
                <p className="text-2xl mt-4 font-serif text-gray-500 text-center">
                  JaffnaMarriage will help you find your perfect match with just
                  a few steps. You focus on what is most important to you, we do
                  all the work.
                </p>
              </div>
            </div>
            {/* s2 div-sub: */}
            <div className="h-597 min-w-full mb-10 flex flex-col items-center justify-center">
              <div className="flex items-center">
                <table className="min-w-full ">
                  <tbody>
                    <tr>
                      <td className=" px-4 py-2">
                        <div className="flex justify-center hover:scale-110">
                          <img src={RegisterIcon} alt="Register" />
                        </div>
                      </td>
                      <td className=" px-1 py-2">
                        <div className="w-179 h-146">
                          <LottieAnimation
                            lottieRef={(ref) => ref && ref.setSpeed(0.5)}
                            animationData={animationData}
                            loop={true}
                            autoplay={true}
                          />
                        </div>
                      </td>
                      <td className=" px-4 py-2">
                        <div className="flex justify-center hover:scale-110">
                        <img src={FindIcon} alt="Find" />
                        </div>
                      </td>
                      <td className=" px-1 py-2">
                        <div className="w-179 h-146">
                          <LottieAnimation
                            lottieRef={(ref) => ref && ref.setSpeed(0.5)}
                            animationData={animationData}
                            loop={true}
                            autoplay={true}
                          />
                        </div>
                      </td>
                      <td className=" px-4 py-2">
                      <div className="flex justify-center hover:scale-110">
                      <img src={ConnectIcon} alt="Connect" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className=" px-4 py-2">
                        <h2 className="text-2xl font-bold text-center">
                          Registration
                        </h2>
                      </td>
                      <td className=" px-4 py-2"></td>
                      <td className=" px-4 py-2">
                        <h2 className="text-2xl font-bold text-center">
                          Find Your Partner
                        </h2>
                      </td>
                      <td className=" px-4 py-2"></td>
                      <td className=" px-4 py-2">
                        <h2 className="text-2xl font-bold text-center">
                          Connect with Your Partner
                        </h2>
                      </td>
                    </tr>
                    <tr>
                      <td className=" px-4 py-2">
                        <h2 className="text-lg text-justify ">
                          Start by creating your profile and providing
                          information about yourself. Tell us your preferences,
                          interests, and what you're looking for in a partner.
                        </h2>
                      </td>
                      <td className=" px-4 py-2"></td>
                      <td className=" px-4 py-2">
                        <h2 className="text-lg text-justify ">
                          Browse through profiles and find potential matches.
                          Connect with them through our messaging system and get
                          to know each other better.
                        </h2>
                      </td>
                      <td className=" px-4 py-2"></td>
                      <td className=" px-4 py-2">
                        <h2 className="text-lg text-justify">
                          Once you've found your ideal partner, take the next
                          step and start your journey together. Plan dates,
                          share experiences, and build a meaningful
                          relationship.
                        </h2>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* s3 div */}
            <Newmember />
            {/* get started contact form */}
            <ContactForm />
            {/* success stories */}
            <SucessStories />
          
          </div>
        </div>
        {/* padding 150px section end*****/}
        <div className="bg-white">
          <div className="container mx-auto px-150">
            {/* footer section */}
              <Footer/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;


