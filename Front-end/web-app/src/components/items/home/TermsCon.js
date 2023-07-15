import React, { useState } from 'react';

const TermsCon = () => {
  const [agree, setAgree] = useState(false);

  const handleAgreeChange = () => {
    setAgree(!agree);
  };

  return (
    <div className="container mx-auto">
      <div className="max-w-lg mx-auto">
        <h1 className="text-2xl font-bold mb-4">Terms and Conditions</h1>
        <div
          className="max-h-72 overflow-y-auto border border-gray-300 p-4 mb-4"
          style={{ scrollbarWidth: 'thin' }}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis diam in nisl
            sagittis hendrerit. Curabitur in purus pretium, gravida turpis vel, ultricies quam.
            Duis lacinia leo ut purus congue, id scelerisque neque luctus. Morbi ut semper ex.
          </p>
          {/* Add more content here */}
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
            checked={agree}
            onChange={handleAgreeChange}
          />
          <label className="ml-2 text-sm text-gray-700">
            I have read and agree to the Terms and Conditions
          </label>
        </div>
        <button
          className={`mt-4 py-2 px-4 rounded-md text-white ${
            agree ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-gray-400 cursor-not-allowed'
          }`}
          disabled={!agree}
        >
          Agree
        </button>
      </div>
    </div>
  );
};

export default TermsCon;
