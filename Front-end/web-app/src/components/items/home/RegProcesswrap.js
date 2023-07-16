import { useState } from 'react';
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

  const getStepStatus = (currentStep) => {
    if (currentStep < step) {
      return 'completed';
    } else if (currentStep === step) {
      return 'active';
    } else {
      return 'inactive';
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-amber-900 to-yellow-300">
      {/* register form stepper window */}
      <div className="w-11/12 md:w-861 h-11/12 md:h-651 max-w-screen-lg mt-5 bg-white rounded-lg shadow-xl">
        <div className="p-6">
          <div className="flex items-center justify-center">
            <div className="flex items-center">
              <div
                className={`rounded-full h-8 w-8 flex items-center justify-center text-white ${
                  getStepStatus(1) === 'completed' ? 'bg-orange-500' : 'bg-gray-500'
                }`}
              >
                {getStepStatus(1) === 'completed' ? (
                  <span className="text-white">✓</span>
                ) : (
                  <span className="text-white">{1}</span>
                )}
              </div>
              <div
                className={`h-1 w-32 ${
                  getStepStatus(1) === 'completed' ? 'bg-orange-500' : 'bg-gray-500'
                }`}
              ></div>
            </div>
            <div className="flex items-center">
              <div
                className={`rounded-full h-8 w-8 flex items-center justify-center text-white ${
                  getStepStatus(2) === 'completed' ? 'bg-orange-500' : 'bg-gray-500'
                }`}
              >
                {getStepStatus(2) === 'completed' ? (
                  <span className="text-white">✓</span>
                ) : (
                  <span className="text-white">{2}</span>
                )}
              </div>
              <div
                className={`h-1 w-32 ${
                  getStepStatus(2) === 'completed' ? 'bg-orange-500' : 'bg-gray-500'
                }`}
              ></div>
            </div>
            <div className="flex items-center">
              <div
                className={`rounded-full h-8 w-8 flex items-center justify-center text-white ${
                  getStepStatus(3) === 'completed' ? 'bg-orange-500' : 'bg-gray-500'
                }`}
              >
                {getStepStatus(3) === 'completed' ? (
                  <span className="text-white">✓</span>
                ) : (
                  <span className="text-white">{3}</span>
                )}
              </div>
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
            <button className="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-gray-200 via-gray-400 to-gray-600 text-white font-bold py-2 px-4 rounded" onClick={prevStep}>
              Previous
            </button>
          )}
          {step !== 3 ? (
            <button className="bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold py-2 px-4 rounded" onClick={nextStep}>
              Next
            </button>
          ) : (
            <button className="bg-gradient-to-r from-orange-600 to-orange-500 font-bold text-white py-2 px-4 rounded" onClick={handleSubmit}>
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default RegProcesswrap;
