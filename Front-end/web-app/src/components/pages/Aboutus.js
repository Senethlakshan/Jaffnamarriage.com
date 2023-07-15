import React from 'react';
import LottieAnimation from 'lottie-react';
import animationData from '../../assests/home/bg-remover/lottie/Hand Love.json'; // Replace with the path to your downloaded Lottie animation file

function Aboutus() {
  return (
    <div>
      <h1>login page</h1>
      <LottieAnimation
        lottieRef={(ref) => ref && ref.setSpeed(0.5)} // Optional: Adjust animation speed
        animationData={animationData}
        loop={true}
        autoplay={true}
      />
    </div>
  );
}

export default Aboutus;
