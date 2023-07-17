import React, { useState } from 'react';
import { FaUnlockAlt } from 'react-icons/fa';
import { useSpring, animated } from 'react-spring';
import LottieAnimation from 'lottie-react';
import animationData from '../../../assests/home/bg-remover/lottie/fogetpwd.json';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

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

    if (!validateEmail(email)) {
      toast.error('Invalid email format');
      return;
    }

    const otpValue = otp.join('');
    if (otpValue.length !== 4) {
      toast.error('Invalid OTP');
      return;
    }

    // Make API call to reset password endpoint
    axios
      .post('your-reset-password-endpoint', { newPassword, email, otp: otpValue })
      .then((response) => {
        // Display success message
        toast.success('Password reset successful');
        // Redirect to login page
        navigate('/login');
      })
      .catch((error) => {
        // Display error message
        toast.error('Password reset failed');
        // Handle the error or display an appropriate message
      });
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleOtpChange = (index, value) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);
  };

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
              <form onSubmit={handleResetPassword}>
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none mb-4"
                  />
                </div>
                <div className="flex items-center mb-4">
                  <label
                    htmlFor="otp"
                    className="block text-gray-700 text-sm font-bold mr-2"
                  >
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
                        onChange={(e) =>
                          handleOtpChange(index, e.target.value)
                        }
                      />
                    ))}
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold"
                >
                  Reset Password
                </button>
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
