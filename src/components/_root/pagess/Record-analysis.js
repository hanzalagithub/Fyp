import { useNavigate } from 'react-router-dom';

const RecordAnalysis = () => {
  const navigate = useNavigate();

  // Sample data for the records
  const recordsData = [
    { id: 1, tag: 'Tag1', type: 'Dog', condition: 'Normal' },
    { id: 2, tag: 'Tag2', type: 'Cat', condition: 'Abnormal' },
    { id: 3, tag: 'Tag3', type: 'Bird', condition: 'Normal' },
    // Add more records as needed
  ];

  const navigateToAbnormalityTable = () => {
    navigate('/abnormality-table');
  };

  return (
    <div>
      <div className="flex flex-wrap mb-4">
        <h2 className="text-2xl font-bold my-4">Record & Analysis</h2>
        <h3 className="text-md font-semibold my-6">(Control Panel)</h3>
      </div>
        <div>
                     
  
        <button
            onClick={navigateToAbnormalityTable}
            className="flex mb-4 p-3 rounded-md bg-green-500 text-white hover:bg-green-700 focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
            
            >
                    <svg
                    width="25"
                    height="25"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 flex flex-shrink-0"
                    >
                    <g clipPath="url(#clip0_505_95)">
                        <path d="M13.3335 18.6667L5.3335 6.66667V4H26.6668V6.66667L18.6668 18.6667V26.6667L13.3335 29.3333V18.6667Z" fill="white" />
                    </g>
                    <defs>
                        <clipPath id="clip0_505_95">
                        <rect width="25" height="32" fill="white" />
                        </clipPath>
                    </defs>
                    </svg>
            Abnormality Table
        </button>
        
        </div>


      {/* Records table */}
      <div className="bg-slate-50 bg-opacity-40 mr-5 text-center rounded-2xl">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Tag</th>
              <th className="px-4 py-2">Type</th>
              <th className="px-4 py-2">Condition</th>
            </tr>
          </thead>
          <tbody>
            {recordsData.map((record) => (
              <tr key={record.id}>
                <td className="px-4 py-2">{record.tag}</td>
                <td className="px-4 py-2">{record.type}</td>
                <td className="px-4 py-2">{record.condition}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecordAnalysis;
