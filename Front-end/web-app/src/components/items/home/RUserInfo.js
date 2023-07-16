import React from "react";

function RUserInfo() {
  return (
    <div className="w-861 h-645">
      <h1 className="mb-2 text-center text-2xl font-bold bg-gray-200 rounded-xl p-2">User Details</h1>
      {/* user details form */}
      <div>
        <table className="min-w-full divide-y divide-gray-200">
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="mb-4">
                  <label htmlFor="livingPlace" className="block text-gray-700 text-sm font-bold mb-2">
                    Living Place
                  </label>
                  <select
                    id="livingPlace"
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                  >
                    <option value="sri lanka">Sri Lanka</option>
                    <option value="canada">Canada</option>
                  </select>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="mb-4">
                  <label htmlFor="religion" className="block text-gray-700 text-sm font-bold mb-2">
                    Religion
                  </label>
                  <select
                    id="religion"
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                  >
                    <option value="tamil">Tamil</option>
                    <option value="hindu">Hindu</option>
                    <option value="catholic">Catholic</option>
                  </select>
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="mb-4">
                  <label htmlFor="age" className="block text-gray-700 text-sm font-bold mb-2">
                    Age
                  </label>
                  <input
                    type="number"
                    id="age"
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                  />
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="mb-4">
                  <label htmlFor="cast" className="block text-gray-700 text-sm font-bold mb-2">
                    Cast
                  </label>
                  <select
                    id="cast"
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                  >
                    <option value="Vellalar">Vellalar</option>
                    <option value="Pallar">Pallar</option>
                    <option value="Nalavar">Nalavar</option>
                    <option value="Koviyar">Koviyar</option>
                    <option value="Karaiyar">Karaiyar</option>
                  </select>
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="mb-4">
                  <label htmlFor="education" className="block text-gray-700 text-sm font-bold mb-2">
                    Education
                  </label>
                  <select
                    id="education"
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                  >
                    <option value="o/l">O/L</option>
                    <option value="a/l">A/L</option>
                    <option value="bachelor">Bachelor</option>
                    <option value="msc">MSc</option>
                    <option value="phd">PhD</option>
                  </select>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="mb-4">
                  <label htmlFor="workDetails" className="block text-gray-700 text-sm font-bold mb-2">
                    Work Details
                  </label>
                  <textarea
                    id="workDetails"
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                  ></textarea>
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="mb-4">
                  <label htmlFor="height" className="block text-gray-700 text-sm font-bold mb-2">
                    Height
                  </label>
                  <input
                    type="text"
                    id="height"
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                  />
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="mb-4">
                  <label htmlFor="weight" className="block text-gray-700 text-sm font-bold mb-2">
                    Weight
                  </label>
                  <input
                    type="text"
                    id="weight"
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RUserInfo;
