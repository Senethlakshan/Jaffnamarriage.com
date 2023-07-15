import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useSpring, animated } from 'react-spring';
import LottieAnimation from 'lottie-react';
import animationData from '../../../assests/home/bg-remover/lottie/login.json'; 

function LoginPage() {
  const fadeAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 500 },
  });

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="min-h-screen">
      
      <animated.div className=" " style={fadeAnimation}>
      
      <div className="flex h-screen ">
      <div className="w-1/2 bg-gradient-to-t from-amber-900 to-yellow-300 flex items-center justify-center">
      <LottieAnimation
        lottieRef={(ref) => ref && ref.setSpeed(0.5)}
        animationData={animationData}
        loop={true}
        autoplay={true}
      />
      </div>
      <div className="w-1/2 bg-white flex items-center justify-center shadow-lg">
      <div className="p-6 max-w-sm w-full">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Login</h2>
        <form>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none mb-4"
            />
          </div>
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type={passwordVisible ? 'text' : 'password'}
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none pr-10 mb-4"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 flex items-center pr-3"
            >
              {passwordVisible ? (
                <FaEyeSlash className="h-5 w-5 text-gray-500" />
              ) : (
                <FaEye className="h-5 w-5 text-gray-500" />
              )}
            </button>
          </div>
        </form>
        <button
          type="button"
          className="w-full py-3 rounded-lg bg-blue-500 text-white font-bold hover:bg-blue-700"
        >
          Login
        </button>
      </div>
    </div>
    </div>

      </animated.div>
    </div>
  );
}

export default LoginPage;