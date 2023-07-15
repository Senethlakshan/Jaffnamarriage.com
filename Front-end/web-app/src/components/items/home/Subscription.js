import React from 'react';

const Subscription = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Subscription Plan</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4">Basic Plan</h3>
          <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className="mb-4">Price: $9.99/month</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Select
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4">Standard Plan</h3>
          <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className="mb-4">Price: $19.99/month</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Select
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4">Premium Plan</h3>
          <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className="mb-4">Price: $29.99/month</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
