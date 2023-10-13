import React from "react";

function RUserInfo({ handleChange, values }) {
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
                    name="livingPlace"
                    value={values.livingPlace}
                    onChange={(e) => handleChange('livingPlace', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                  >
                    <option value="">select --</option>
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
                    name="religion"
                    value={values.religion}
                    onChange={(e) => handleChange('religion', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                  >
                    <option value="">select --</option>
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
                  <label htmlFor="gender" className="block text-gray-700 text-sm font-bold mb-2">
                     Gender
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    value={values.gender}
                    onChange={(e) => handleChange('gender', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                  >
                    <option value="">select --</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="mb-4">
                  <label htmlFor="spokenLnguage" className="block text-gray-700 text-sm font-bold mb-2">
                  SpokenLnguage
                  </label>
                  <select
                    id="spokenLnguage"
                    name="spokenLnguage"
                    value={values.spokenLnguage}
                    onChange={(e) => handleChange('spokenLnguage', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                  >
                    <option value="">select --</option>
                    <option value="tamil">Tamil</option>
                    <option value="english">English</option>
                    <option value="sinhala">Sinhala</option>
                  </select>
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="mb-4">
                  <label htmlFor="town" className="block text-gray-700 text-sm font-bold mb-2">
                     City-Town
                  </label>
                  <select
                    id="town"
                    name="town"
                    value={values.town}
                    onChange={(e) => handleChange('town', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                  >
                    <option value="">select --</option>
                    <option value="jaffna">Jaffna</option>
                   
                  </select>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="mb-4">
                  <label htmlFor="pno" className="block text-gray-700 text-sm font-bold mb-2">
                    Phone no
                  </label>
                  <input
                    type="number"
                    id="pno"
                    name="pno"
                    value={values.pno}
                    placeholder="07X-XXXX-XXX"
                    onChange={(e) => handleChange('pno', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                  />
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
              
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
                    name="age"
                    value={values.age}
                    onChange={(e) => handleChange('age', e.target.value)}
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
                    name="cast"
                    value={values.cast}
                    onChange={(e) => handleChange('cast', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                  >
                    <option value="">select --</option>
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
                    name="education"
                    value={values.education}
                    onChange={(e) => handleChange('education', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                  >
                    <option value="">select --</option>
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
                    name="workDetails"
                    value={values.workDetails}
                    onChange={(e) => handleChange('workDetails', e.target.value)}
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
                    name="height"
                    value={values.height}
                    onChange={(e) => handleChange('height', e.target.value)}
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
                    name="weight"
                    value={values.weight}
                    onChange={(e) => handleChange('weight', e.target.value)}
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
