import React from 'react';

// Import your images from the assets folder
import image1 from '../../assets/p.jpg';
import image2 from '../../assets/p.jpg';
import image3 from '../../assets/p.jpg';
import image4 from '../../assets/p.jpg';
import image5 from '../../assets/p.jpg';
import image6 from '../../assets/p.jpg';

const CameraView = () => {
  // Array of imported image sources
  const imageSources = [image1, image2, image3, image4, image5, image6];

  return (
    <div>
      <div className="flex flex-wrap mb-4">
        <h2 className="text-2xl font-bold my-4">Camera View</h2>
        <h3 className="text-md font-semibold my-6">(Control Panel)</h3>
      </div>

      <div className="grid grid-cols-3 gap-4 mr-5">
        {imageSources.map((imageSource, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg">
            <span className="absolute top-0 left-0 p-1 bg-gray-800 text-white  bg-opacity-50 ">
              Camera 1
            </span>
            <img
              src={imageSource}
              alt=""
              className="object-cover w-45 h-55"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CameraView;
