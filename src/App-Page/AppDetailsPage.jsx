import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';


const AppDetailsPage = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [appDetails, setAppDetails] = useState(null);

  useEffect(() => {
    fetch('/Dcatagorydata.json')
      .then((res) => res.json())
     .then((data) =>  setData(data))
  
     .then(setAppDetails(data.find ((item)=>item.id===id)))
     .then( console.log(data))
  },[]);
  

  if (!appDetails) {
    return (
      <div className="mt-10 text-lg text-center text-red-500">
        <div className="w-16 h-16 mx-auto border-4 border-dashed rounded-full animate-spin dark:border-lime-600"></div>
        App not found or still loading...?
      </div>
    );
  }

  return (
    <div className="max-w-xl p-6 mx-auto mt-10 bg-white rounded-lg shadow-md">
      <h1 className="mb-4 text-3xl font-bold text-gray-800">{appDetails.name}</h1>

      <img
        src={appDetails.images}
        alt={appDetails.name}
        className="object-cover w-40 h-40 mx-auto mb-4 rounded-lg"
      />

      <p className="mb-2 text-gray-700">
        <strong>Developer:</strong> {appDetails.developer}
      </p>
      <p className="mb-2 text-yellow-600">
        <strong>Rating:</strong> {appDetails.rating} ★
      </p>
      <p className="text-gray-600">
        <strong>Category:</strong> {appDetails.category}
      </p>

      <Link to="/" className="block mt-6 text-blue-600 hover:underline">
        ← Back to Home
      </Link>
    </div>
  );
};

export default AppDetailsPage;
