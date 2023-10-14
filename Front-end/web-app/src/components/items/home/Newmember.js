import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import photo1 from '../../../assests/home/girlphoto.jpeg';
// import { get } from 'react-scroll/modules/mixins/scroller';

const Newmember = () => {

  const [fullDeviceWidth, setFullDeviceWidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      setFullDeviceWidth(window.innerWidth);
    }

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Initial setup
    handleResize();

  }, [fullDeviceWidth]);


  function getCenterSlidePercentage() {

    console.log("Full width - " + fullDeviceWidth);


    if (fullDeviceWidth > 1024) {
      return 33.33;
    } else if (fullDeviceWidth > 768) {
      return 60;
    } else {
      return 100;
    }
  }


  return (
    <div className="bg-white h-708">
      <div className="flex pl-4 pr-4 pt-5  flex-col items-center justify-center">
        <h1 className="text-amber-500 text-4xl m-2 font-serif text-center">Newest Members</h1>
        <p className="text-xl mt-3 font-serif text-center">
          JaffnaMarrige will help you find your perfect match with just a few steps.
          You focus on what is most important to you we do all the work.
        </p>
      </div>
      <div className="flex justify-center mt-10 py-2 px-4">
        {/* user profile scroll slide bar */}
        <Carousel
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          infiniteLoop={true}
          centerMode={true}
          centerSlidePercentage={getCenterSlidePercentage()}
          className="w-full"
        >

          <div className="flex justify-center">
            {/* Card 1 */}
            <div className="gradiantLightGoldBg2 rounded-lg p-4 m-1 shadow" style={{ width: '351px', height: '341px' }}>
              {/* Card content */}
              <img src={photo1} alt='photo1' />
            </div>
          </div>
          <div className="flex justify-center">
            {/* Card 1 */}
            <div className="gradiantLightGoldBg2 rounded-lg p-4 m-1 shadow" style={{ width: '351px', height: '341px' }}>
              {/* Card content */}
              <img src={photo1} alt='photo1' />
            </div>
          </div>
          <div className="flex justify-center">
            {/* Card 1 */}
            <div className="gradiantLightGoldBg2 rounded-lg p-4 m-1 shadow" style={{ width: '351px', height: '341px' }}>
              {/* Card content */}
              <img src={photo1} alt='photo1' />
            </div>
          </div>
          {/* Add more cards as needed */}
        </Carousel>
      </div>
    </div>
  );
};

export default Newmember;
