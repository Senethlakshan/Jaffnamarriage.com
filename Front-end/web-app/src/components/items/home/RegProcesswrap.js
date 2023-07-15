import React, { useState } from 'react';
import RUserInfo from './RUserInfo';
import TermsCon from './TermsCon';
import Subscription from './Subscription';

function RegProcesswrap() {
  const [step, setStep] = useState(1);
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    cardNumber: '',
    cardExpiry: ''
  });

  const handleChange = (input) => (e) => {
    setValues({ ...values, [input]: e.target.value });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    // Handle form submission logic
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <div className="w-11/12 md:w-847 h-11/12 md:h-647 bg-white rounded-lg shadow-xl">
        <div className="p-6">
          <div className="flex justify-center items-center mt-4">
            <div
              className={`w-6 h-6 rounded-full ${
                step >= 1 ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            >
              <p className="text-white text-center leading-6">
                {step >= 1 ? '1' : '✓'}
              </p>
            </div>
            <div
              className={`w-6 h-6 mx-2 rounded-full ${
                step >= 2 ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            >
              <p className="text-white text-center leading-6">
                {step >= 2 ? '2' : '✓'}
              </p>
            </div>
            <div
              className={`w-6 h-6 rounded-full ${
                step === 3 ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            >
              <p className="text-white text-center leading-6">
                {step === 3 ? '3' : '✓'}
              </p>
            </div>
          </div>
        </div>

        <div className="p-6">
          {step === 1 && (
            <RUserInfo nextStep={nextStep} handleChange={handleChange} values={values} />
          )}
          {step === 2 && (
            <TermsCon
              nextStep={nextStep}
              prevStep={prevStep}
              handleChange={handleChange}
              values={values}
            />
          )}
          {step === 3 && (
            <Subscription prevStep={prevStep} handleSubmit={handleSubmit} values={values} />
          )}
        </div>

        <div className="flex justify-between p-6">
          {step !== 1 && (
            <button
              className="bg-gray-500 text-white py-2 px-4 rounded"
              onClick={prevStep}
            >
              Previous
            </button>
          )}
          {step !== 3 ? (
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded"
              onClick={nextStep}
            >
              Next
            </button>
          ) : (
            <button
              className="bg-green-500 text-white py-2 px-4 rounded"
              onClick={handleSubmit}
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default RegProcesswrap;
