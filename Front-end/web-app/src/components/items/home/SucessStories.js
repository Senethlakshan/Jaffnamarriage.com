import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import photo1 from "../../../assests/home/stories.jpeg";
import { useState } from "react";
import { useEffect } from "react";

function SucessStories() {
  const [fullDeviceWidth, setFullDeviceWidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      setFullDeviceWidth(window.innerWidth);
    }

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Initial setup
    handleResize();
  }, [ fullDeviceWidth ]);

  function getCenterSlidePercentage(){
    if(fullDeviceWidth > 1024){
      return 33.33;
    }else if(fullDeviceWidth > 768){
      return 60;
    }else{
      return 100;
    }
  }
  return (
    <div>
      <div className="h-597 min-w-full mt-10 flex flex-col items-center justify-center">
        <h2 className="mb-4  text-amber-500 text-4xl font-serif">Success stories</h2>
        <p className="text-2xl mt-4 font-serif text-center">
          JaffnaMarriage will help you find your perfect match with just a few
          steps. You focus on what is most important to you, we do all the work.
        </p>
      </div>
      {/* Success stories carousel section */}
      <div className="flex justify-center mt-5  py-2 px-4">
        {/* User profile scroll slide bar */}
        <Carousel
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          infiniteLoop={true}
          centerMode={true}
          centerSlidePercentage={getCenterSlidePercentage()}
          className="w-full"
        >
          {/* Success Story Card 1 */}
          <div className="flex justify-center">
            <div
              className="card  rounded-lg pb-2 m-1 shadow"
              style={{ width: "18rem" }}
            >
              <img
                className="card-img-top"
                src={photo1}
                alt="Success Story 1"
              />
              <div className="card-body">
                <p className="card-text mt-3 px-2 text-justify">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <span className="text-3xl" role="img" aria-label="star">⭐️⭐️⭐️⭐️⭐️</span>
              </div>
            </div>
          </div>

          {/* Success Story Card 2 */}
          <div className="flex justify-center">
            <div
              className="card bg-white rounded-lg pb-2 m-1 shadow"
              style={{ width: "18rem" }}
            >
              <img
                className="card-img-top"
                src={photo1}
                alt="Success Story 1"
              />
              <div className="card-body">
                <p className="card-text mt-3 px-2 text-justify">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <span className="text-3xl" role="img" aria-label="star">⭐️⭐️⭐️</span>

              </div>
            </div>
          </div>
          {/* Success Story Card 3 */}
          <div className="flex justify-center">
            <div
              className="card bg-white rounded-lg pb-2 m-1 shadow"
              style={{ width: "18rem" }}
            >
              <img
                className="card-img-top"
                src={photo1}
                alt="Success Story 1"
              />
              <div className="card-body">
                <p className="card-text mt-3 px-2 text-justify">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <span className="text-3xl" role="img" aria-label="star">⭐️⭐️⭐️⭐️⭐️</span>

              </div>
            </div>
          </div>
          {/* Add more success story cards as needed */}
        </Carousel>
      </div>
    </div>
  );
}

export default SucessStories;
