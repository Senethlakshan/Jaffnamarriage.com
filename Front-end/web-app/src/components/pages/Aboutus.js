import React from 'react';
import LottieAnimation from 'lottie-react';
import animationData from '../../assests/home/bg-remover/lottie/Hand Love.json'; // Replace with the path to your downloaded Lottie animation file
import Footer from '../items/home/Footer';

function Aboutus() {
  return (
    <div>
      <LottieAnimation
        lottieRef={(ref) => ref && ref.setSpeed(0.5)} // Optional: Adjust animation speed
        animationData={animationData}
        loop={true}
        autoplay={true}
      />

      <Footer />
    </div>
  );
}

export default Aboutus;
