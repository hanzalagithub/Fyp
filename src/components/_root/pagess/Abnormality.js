import React, { useState } from 'react';

const Abnormality = () => {
  const recordsData = [
    { id: 1, tag: 'Tag1', type: 'Dog', Date: '25-10-2023' , Reason: 'Lack of food'},
    { id: 2, tag: 'Tag2', type: 'Cat', Date: '25-10-2023', Reason: 'Lack of food' },
    { id: 3, tag: 'Tag3', type: 'Bird', Date: '25-10-2023' , Reason: 'Lack of food'},
    // Add more records as needed
  ];

  // State for filtering
  const [filter, setFilter] = useState('');

  // Get unique animal names for dropdown options
  const animalNames = Array.from(new Set(recordsData.map((record) => record.type)));

  // Filtered records based on the filter value
  const filteredRecords = recordsData.filter((record) =>
    record.type.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <div className="flex flex-wrap mb-4">
        <h2 className="text-2xl font-bold my-4">Abnormality Table</h2>
        <h3 className="text-md font-semibold my-6">(Control Panel)</h3>
      </div>
      {/* Filter dropdown */}
      <div className="relative w-1/5 cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6 flex items-center mb-3">
            
      <svg
                    width="25"
                    height="25"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 flex-shrink-0"
                    >
                    <g clipPath="url(#clip0_505_95)">
                        <path d="M13.3335 18.6667L5.3335 6.66667V4H26.6668V6.66667L18.6668 18.6667V26.6667L13.3335 29.3333V18.6667Z" fill="#00AD11" />
                    </g>
                    <defs>
                        <clipPath id="clip0_505_95">
                        <rect width="25" height="32" fill="white" />
                        </clipPath>
                    </defs>
                    </svg>
            
          <select
            id="animalFilter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="p-2 rounded-md border cursor-pointer transition duration-300 ease-in-out focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
          >

          <option  value="">All Animals</option>
          {animalNames.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
        <i className="fas fa-caret-down ml-2"></i>
      </div>
      {/* Records table */}
      <div className="bg-slate-50 bg-opacity-40 mr-5 text-center rounded-2xl">
        <table className=" table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Tag</th>
              <th className="px-4 py-2">Type</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Reason</th>
            </tr>
          </thead>
          <tbody>
            {filteredRecords.map((record) => (
              <tr key={record.id}>
                <td className="px-4 py-2">{record.tag}</td>
                <td className="px-4 py-2">{record.type}</td>
                <td className="px-4 py-2">{record.Date}</td>
                <td className="px-4 py-2">{record.Reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Abnormality;
