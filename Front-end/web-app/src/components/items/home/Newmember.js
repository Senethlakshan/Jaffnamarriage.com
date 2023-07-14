import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Newmember = () => {
  return (
    <div className="bg-blue-400 h-708">
      <div className="flex pl-4 pr-4 flex-col items-center justify-center">
        <h1 className="text-2xl">Newest Members</h1>
        <p className="text-xl">
          JaffnaMarrige will help you find your perfect match with just a few steps.
          You focus on what is most important to you; we do all the work.
        </p>
      </div>
      <div className="flex justify-center mt-4 py-2 px-4 bg-red-300">
        {/* user profile scroll slide bar */}
        <Carousel
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          infiniteLoop={true}
          centerMode={true}
          centerSlidePercentage={33.33}
          className="w-full"
        >
          <div className="flex justify-center">
            {/* Card 1 */}
            <div className="bg-white rounded-lg p-4 m-1 shadow" style={{ width: '351px', height: '341px' }}>
              {/* Card content */}
            </div>
          </div>
          <div className="flex justify-center">
            {/* Card 2 */}
            <div className="bg-white rounded-lg p-4 m-1 shadow" style={{ width: '351px', height: '341px' }}>
              {/* Card content */}
            </div>
          </div>
          <div className="flex justify-center">
            {/* Card 3 */}
            <div className="bg-white rounded-lg p-4 m-1 shadow" style={{ width: '351px', height: '341px' }}>
              {/* Card content */}
            </div>
          </div>
          {/* Add more cards as needed */}
        </Carousel>
      </div>
    </div>
  );
};

export default Newmember;
