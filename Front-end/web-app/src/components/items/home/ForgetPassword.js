import React, { useState, useEffect, useRef  } from 'react';
import { FaUnlockAlt } from 'react-icons/fa';
import { useSpring, animated } from 'react-spring';
import LottieAnimation from 'lottie-react';
import animationData from '../../../assests/home/bg-remover/lottie/fogetpwd.json';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import axiosInstance from '../../../api';

function ForgetPassword() {
  const fadeAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 500 },
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);
  const [stepOne, setStepOne] = useState(true);
  const [sendOtp, setSendOtp] = useState(false);
  const [otpTimer, setOtpTimer] = useState(180); // Initial timer value in seconds (3 minutes)
  const otpRefs = useRef([]);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();

    // Perform validation checks
    if (newPassword.length < 6) {
      toast.error('Password must be at least 6 characters long');
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    setLoading(true);
    const data = {
      email: email,
      confirmPassword: confirmPassword
    };
    
    axiosInstance
      .post('/createForgotPass', data) // Pass data directly as the second argument
      .then((response) => {
        const statusValue = response.data.status; // This will give you the value of the 'status' field
        if (statusValue === "true") {
          setStepOne(false);

          console.log(response.data);
          toast.success(response.data.message);
          const token = response.data.token;
          setLoading(false);
        localStorage.setItem('api_token', token);
        localStorage.setItem('login', 'true');
        // Do something after a successful registration, such as redirecting to the next page
        window.location.href = '/';
        } else {
          setStepOne(true);
          console.log(response.data);
          toast.error(response.data.message);
          setLoading(false);
        }
      })
      .catch((error) => {
        setLoading(false);
        // Handle error
      });
  };
  
  // send otp to email 

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

 const handleSendOTP = async () => {
  if (!validateEmail(email)) {
    toast.error('Invalid email format');
    return;
  }
  
    setLoading(true);
    
// Make Axios POST request to backend API for login
axiosInstance
  .post('/sendotp', { email })
  .then((response) => {
    const statusValue = response.data.status; // This will give you the value of the 'status' field
    if(statusValue === "true"){
      console.log('OTP sent:', response.data);
      setLoading(false);
      setEmail(email);
      setError(null);
      setSendOtp(true);
      toast.success(response.data.message);
      // Start the countdown timer
      setOtpTimer(180); // Reset the timer to 3 minutes
    }else{
      console.log('OTP sent:', response.data);
      setLoading(false);
      setError(response.data);
      setSendOtp(false);
      toast.error(response.data.message);
    }
    
  })
  .catch((error) => {
    // Handle error
    setLoading(false);
    setError(error.message || 'Failed to send OTP');
    setSendOtp(false);
  });

  
};


  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  


  const [isOtpComplete, setIsOtpComplete] = useState(false);

  // ...

  const handleOtpChange = (index, value) => {
    // Make sure the entered value is a number
    if (!isNaN(value)) {
      setOtp((prevOtp) => {
        // Create a new array to update the OTP
        const newOtp = [...prevOtp];
        newOtp[index] = value;
        // Move the focus to the next input field if available
        if (index < otp.length - 1 && value !== '') {
          otpRefs.current[index + 1].focus();
        } else if (index > 0 && value === '') {
          // Move the focus to the previous input field if the current field is empty
          otpRefs.current[index - 1].focus();
        }

        // Check if all 4 digits are entered
        const isCompleteOtpEntered = newOtp.every((digit) => digit !== '');
        setIsOtpComplete(isCompleteOtpEntered);

        return newOtp;
      });
    }
  };
  useEffect(() => {
    if (isOtpComplete) {
      const completeOtp = otp.join('');
      // Add your logic here to submit the OTP or perform any other action
      console.log('Complete OTP:', completeOtp, email);

      const data = {
        email: email,
        completeOtp: completeOtp
      };
      
      axiosInstance
        .post('/checkotp', data) // Pass data directly as the second argument
        .then((response) => {
          const statusValue = response.data.status; // This will give you the value of the 'status' field
          if (statusValue === "true") {
            setStepOne(false);
            console.log(response.data);
            toast.success(response.data.message);
          } else {
            setStepOne(true);
            console.log(response.data);
            toast.error(response.data.message);
          }
        })
        .catch((error) => {
          // Handle error
        });
      
       
    }
  }, [isOtpComplete]);
 
  useEffect(() => {
    let interval;

    if (sendOtp) {
      // Start the countdown timer
      interval = setInterval(() => {
        setOtpTimer((prevTimer) => {
          const newTimer = Math.max(prevTimer - 1, 0);
          if (newTimer === 0) {
            // Timer reached 0, stop sending OTP
            setSendOtp(false);
            clearInterval(interval);
          }
          return newTimer;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [sendOtp]);

  // Format the timer for display
  const formattedTimer = `${Math.floor(otpTimer / 60)
    .toString()
    .padStart(2, '0')}:${(otpTimer % 60).toString().padStart(2, '0')}`;

  return (
    <div className="min-h-screen bg-gradient-to-t from-amber-900 to-yellow-300">
      <animated.div className="" style={fadeAnimation}>
        {/* animated svg */}
        <div className="flex h-screen">
          <div className="w-1/2 flex items-center justify-center">
            <LottieAnimation
              lottieRef={(ref) => ref && ref.setSpeed(0.5)}
              animationData={animationData}
              loop={true}
              autoplay={true}
            />
          </div>
          {/* login form */}
          <div className="w-1/2 flex items-center justify-center  ">
            <div className="p-6 max-w-sm w-full border-2 border-solid border-gray-300 rounded-lg bg-white">
              <h2 className="text-2xl font-semibold  flex items-center justify-center mb-6">
                <FaUnlockAlt className="mr-2" />
                Reset Password
              </h2>
              <form >
              {stepOne && (
  <div>
    <div>
      <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
        Email
      </label>
      <input
        type="email"
        id="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none mb-4"
      />
    </div>
  {(sendOtp &&  <div>
      {/* Your existing OTP input field */}
      <div className="flex items-center mb-4">
        <label htmlFor="otp" className="block text-gray-700 text-sm font-bold mr-2">
          Email OTP
        </label>
        <div className="flex space-x-2">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              id={`otp${index}`}
              maxLength={1}
              className="w-10 h-10 border border-gray-300 rounded text-center"
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              ref={(el) => (otpRefs.current[index] = el)}
            />
          ))}
        </div>
      </div>

      {/* Display the formatted timer */}
      <p style={{ fontSize: '12px', color: 'red', textAlign: 'center' }}>OTP will expire in: {formattedTimer}</p>
    </div>)}
    <button
      type="button"
      className="w-full py-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold"
      onClick={handleSendOTP}
      disabled={loading}
    >
      {loading ? 'Sending OTP...' : 'Send OTP'}
    </button>
  </div>
)}
{!stepOne && (
                <div>
                <div>
                  <label
                    htmlFor="newPassword"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    New Password
                  </label>
                  <input
                    type="password"
                    id="newPassword"
                    placeholder="Enter new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none mb-4"
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none mb-4"
                  />
                </div>
                <button
                  type="button"
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold"
                  onClick={handleResetPassword}
                  disabled={loading}
    >
      {loading ? 'Reseting Password...' : 'Reset Password'} 
                  
                </button>
                </div>
)}
                <Link
                  to="/login"
                  className="block text-center text-gray-600 text-sm mt-4"
                >
                  Back to Login
                </Link>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer />
      </animated.div>
    </div>
  );
}

export default ForgetPassword;
