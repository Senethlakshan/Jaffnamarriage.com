import React from 'react';
import Footer from '../items/home/Footer';
import { FaArrowLeft, FaCar, FaEnvelope, FaGlobe } from 'react-icons/fa';



const Contactpage = () => {


  return (
    <div>
      <div class="map">
        <div id='map' >  </div>
        <div class="map-c">
          <h1>Jaffna Marriage</h1>
          <p>If you have any questions or concerns about these Terms, please contact us</p>

          <div class="det"><FaEnvelope />info@JaffnaMarriage.com</div>
          <div class="det"><FaGlobe /> JaffnaMarriage.com</div>
          <center>
            <button><FaEnvelope />  </button>
          </center>
        </div>
      </div>

      <Footer />
    </div>

  );
};

export default Contactpage;