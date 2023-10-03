import React, { useState } from 'react';
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCcDiscover } from 'react-icons/fa';

const Subscription = ({ handleSelectedPlans }) => {
  const [selectedPlans, setSelectedPlans] = useState();

  const handleSelect = (plan) => {
    // Clear the selected plans array
    setSelectedPlans(plan);
  
    // Call the handleSelectedPlans function with the updated selectedPlans array
    handleSelectedPlans(plan);
  };
  
  

  return (
    <div className="w-861 h-645 mx-auto">
      <h1 className="text-2xl text-center font-bold mb-4 bg-gray-200 rounded-xl p-2">
        Subscription Plan
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {/* Basic Plan */}
        <div className="bg-white rounded-lg shadow-lg border-solid border-orange-500 border-2 p-6">
          <h3 className="text-xl font-bold mb-4">Basic Plan</h3>
          <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className="mb-4">Price: $9.99/month</p>
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded"
            onClick={() => handleSelect('Basic Plan')}
          >
            Select
          </button>
        </div>

        {/* Standard Plan */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-lg shadow-lg p-6 border-solid border-orange-500 border-2">
          <h3 className="text-xl font-bold mb-4">Standard Plan</h3>
          <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className="mb-4">Price: $19.99/month</p>
          <button
            className="bg-orange-700 hover:bg-orange-800 bor text-white px-4 py-2 rounded"
            onClick={() => handleSelect('Standard Plan')}
          >
            Select
          </button>
        </div>

        {/* Premium Plan */}
        <div className="bg-white rounded-lg shadow-lg p-6 border-solid border-orange-500 border-2">
          <h3 className="text-xl font-bold mb-4">Premium Plan</h3>
          <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className="mb-4">Price: $29.99/month</p>
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded"
            onClick={() => handleSelect('Premium Plan')}
          >
            Select
          </button>
        </div>
      </div>
      
      {/* Selected Plans */}
      <div className='m-4'>
        <h1>Selected Plans:</h1>
        <ul>
          {selectedPlans}
        </ul>
      </div>

      {/* Payment options */}
      <div className='m-4 flex justify-center'>
        <h1 className='mr-2'>All orders are processed in USD and on Stripe or PayPal.</h1>
        <div className="flex space-x-2">
          <FaCcVisa size={24} />
          <FaCcMastercard size={24} />
          <FaCcAmex size={24} />
          <FaCcDiscover size={24} />
        </div>
      </div>
    </div>
  );
};

export default Subscription;
