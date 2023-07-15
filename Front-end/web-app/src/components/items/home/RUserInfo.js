import React from "react";

function RUserInfo() {
  return (
    <div>
      <h2 className="m-2 text-center">User Details</h2>
      {/* user details form */}
      <div>
        <table className="min-w-full divide-y divide-gray-200">
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Living Place</td>
              <td className="px-6 py-4 whitespace-nowrap"> Religion</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Age</td>
              <td className="px-6 py-4 whitespace-nowrap">Cast</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Education</td>
              <td className="px-6 py-4 whitespace-nowrap">Work Details</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Height</td>
              <td className="px-6 py-4 whitespace-nowrap">Weight</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RUserInfo;
