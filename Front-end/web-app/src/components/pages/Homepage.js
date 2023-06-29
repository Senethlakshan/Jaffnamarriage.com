import React, { useState, useEffect } from 'react';
import WebBanner from '../items/home/WebBanner';

const Homepage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation
    setTimeout(() => {
      setIsLoading(false); // Set isLoading to false after a delay
    }, 2000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="loading-icon bg-black h-screen">
        <div className='flex justify-center items-center '>
        <iframe src="https://embed.lottiefiles.com/animation/44579"></iframe>
        <p className="text-lg font-bold mt-4">Loading...</p>
        </div>
        </div>
      ) : (
        <div>
          <WebBanner />
          <h1 className="bg-blue-400">seneth</h1>
        </div>
      )}
    </div>
  );
};

export default Homepage;
