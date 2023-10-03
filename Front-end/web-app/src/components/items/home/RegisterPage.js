import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import LottieAnimation from 'lottie-react';
import animationData from '../../../assests/home/bg-remover/l2/goldenhart.json';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import axiosInstance from '../../../api';

function RegisterPage() {
  const fadeAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 500 },
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [name, setName] = useState('');
  const [marriedStatus, setMarriedStatus] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleRegister = (e) => {
    e.preventDefault();

   
    // Perform field validations
    if (!validateName(name)) {
      toast.error('Invalid name');
      return;
    }

    if (!validateMarriedStatus(marriedStatus)) {
      toast.error('Invalid married status');
      return;
    }

    if (!validateEmail(email)) {
      toast.error('Invalid email format');
      return;
    }

    if (password.length < 6) {
      toast.error('Password must be at least 6 characters long');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    // Create data object to send to the backend API
    const data = {
      name: name,
      marriedStatus: marriedStatus,
      email: email,
      password: password,
    };

    // Make Axios POST request to backend API
    axiosInstance
  .post('/register', data)
  .then((response) => {
      console.log(response.data);
        // Get the token from the response
        const token = response.data.token;
    
        localStorage.setItem('api_token', token);
        // Display success message
        toast.success('Registration successful');
        localStorage.setItem('login', 'true');
        // Do something after a successful registration, such as redirecting to the next page
        window.location.href = '/regiter-process';
  })
  .catch((error) => {
    // Check if the error response contains validation errors
    if (error.response && error.response.data && error.response.data.errors) {
      const errorMessages = error.response.data.errors;
      // Display the error message for the 'email' field
      if (errorMessages.email && errorMessages.email.length > 0) {
        toast.error(errorMessages.email[0]);
      } else {
        toast.error('Registration failed');
      }
    } else if (error.response && error.response.data && error.response.data.message) {
      // Display the error message from the response
      toast.error(error.response.data.message);
    } else {
      // Handle other types of errors
      toast.error('Registration failed');
    }
  });
  }
  const validateName = (name) => {
    return name.trim().length > 0;
  };

  const validateMarriedStatus = (status) => {
    return ['single', 'married', 'divorce'].includes(status);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div className="min-h-screen bg-gradient-to-t from-amber-900 to-yellow-300">
      <animated.div className="" style={fadeAnimation}>
        {/* animated svg */}
        <div className="loginContainer flex">
          <div className="registerArt w-1/2 flex items-center justify-center">
            <LottieAnimation
              lottieRef={(ref) => ref && ref.setSpeed(0.5)}
              animationData={animationData}
              loop={true}
              autoplay={true}
            />
            <div>
              <h1
                className="text-3xl text-white"
                style={{
                  fontFamily: 'Berkshire Swash, cursive',
                }}
              >
                "Marriage is a new beginning, let it be completed with just one eye."
              </h1>
              <p className="mt-2 text-gray-100 ">
                திருமணம் ஒரு புதிய ஆரம்பம், அதை ஒரு கண்ணே முடிக்க வேண்டும்.
              </p>
            </div>
          </div>
          {/* Register form */}
          <div className="loginForm w-1/2 flex items-center justify-center  ">
            <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold flex items-center justify-center mb-6">
                <FaUserAlt className="mr-2" />
                Register
              </h2>
              <form onSubmit={handleRegister}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="marriedStatus" className="block text-gray-700 text-sm font-bold mb-2">
                    Married Status
                  </label>
                  <select
                    id="marriedStatus"
                    value={marriedStatus}
                    onChange={(e) => setMarriedStatus(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                  >
                    <option value="">Select Status</option>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                    <option value="divorce">Divorce</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                  />
                </div>
                <div className="mb-4 relative">
                  <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={passwordVisible ? 'text' : 'password'}
                      id="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none pr-10"
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
                </div>
                <div className="mb-4">
                  <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                  />
                </div>
                {/* Next button */}
                
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-gradient-to-tr from-amber-900 to-yellow-300 text-white font-bold"
                >
                  Next
                </button>
              
              </form>
            </div>
          </div>
        </div>
      </animated.div>
      <ToastContainer />
    </div>
  );
}

export default RegisterPage;


// futture developemt *****

// 01.if all field fill sucessfull enable next parent or enable button
// 02.add google auth
// 03.add next icon next button
