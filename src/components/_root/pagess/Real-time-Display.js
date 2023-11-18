
import React from "react";
import image1 from '../../assets/p.jpg';
import image2 from '../../assets/p.jpg';

export const RealtimeDisplay=()=>{
    return(
        <div>
            <h1>RealtimeDisplay</h1>
        </div>
    );
};

export const RealtimeDisplayOne=()=>{
    const imageSources = [image1, image2];
    return(
        <>
                <div className="flex flex-wrap mb-4">
                        <h2 className="text-2xl font-bold my-4">Camera1 View</h2>
                        <h3 className="text-md font-semibold my-6">(Control Panel)</h3>
                    </div>
                        <div className="grid grid-cols-2 gap-4 mr-5">
                        {imageSources.map((imageSource, index) => (
                        <div key={index} className="relative overflow-hidden rounded-lg">
                            <span className="absolute top-0 left-0 p-1 bg-gray-800 text-white  bg-opacity-50 ">
                            Camera 1
                            </span>
                            <img
                            src={imageSource}
                            alt=""
                            className="object-cover w-full h-80"
                            />
                        </div>
                        ))}
            </div>
        </>
     

    );
};

export const RealtimeDisplayTwo=()=>{
    const imageSources = [image1, image2];
    return(
        <>
                <div className="flex flex-wrap mb-4">
                        <h2 className="text-2xl font-bold my-4">Camera2 View</h2>
                        <h3 className="text-md font-semibold my-6">(Control Panel)</h3>
                    </div>
                        <div className="grid grid-cols-2 gap-4 mr-5">
                        {imageSources.map((imageSource, index) => (
                        <div key={index} className="relative overflow-hidden rounded-lg">
                            <span className="absolute top-0 left-0 p-1 bg-gray-800 text-white  bg-opacity-50 ">
                            Camera 1
                            </span>
                            <img
                            src={imageSource}
                            alt=""
                            className="object-cover w-full h-80"
                            />
                        </div>
                        ))}
            </div>
        </>
     
    );
};

export const RealtimeDisplayThree=()=>{
    const imageSources = [image1, image2];
    return(
        <>
                <div className="flex flex-wrap mb-4">
                        <h2 className="text-2xl font-bold my-4">Camera3 View</h2>
                        <h3 className="text-md font-semibold my-6">(Control Panel)</h3>
                    </div>
                        <div className="grid grid-cols-2 gap-4 mr-5">
                        {imageSources.map((imageSource, index) => (
                        <div key={index} className="relative overflow-hidden rounded-lg">
                            <span className="absolute top-0 left-0 p-1 bg-gray-800 text-white  bg-opacity-50 ">
                            Camera 1
                            </span>
                            <img
                            src={imageSource}
                            alt=""
                            className="object-cover w-full h-80"
                            />
                        </div>
                        ))}
            </div>
        </>
     
    );
};
