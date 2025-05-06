import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router";

const Home = () => {
  const [Catagorydata, setCatagorydata] = useState([]);
  
  
  useEffect(() => {
    fetch('/Dcatagorydata.json')
      .then((res) => res.json())
      .then((data) => setCatagorydata(data))
      .catch((error) => console.error(error));
  }, []);

   console.log();
 
   return (
    <main className="mx-auto mt-5 space-y-8 max-w-7xl">
    {Catagorydata.map((category, index) => (
      <div key={index}>
        <h1 className="mb-4 text-2xl font-bold text-black">{category.category}</h1>
  
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          
            <Link
              to={`/app-details/${category.category}/${category.id}`}
              key={category.id}
              className="p-4 transition-all duration-300 bg-gray-800 border border-gray-700 shadow-lg rounded-xl hover:scale-105 hover:shadow-xl"
            >
              <img
                src={category.thumbnail}
                alt={category.name}
                className="object-fill mx-auto mb-4 rounded-full w-30 h-30"
              />
              <h3 className="text-lg font-semibold text-white">{category.name}</h3>
              <p className="text-sm text-gray-400">{category.developer}</p>
              <p className="text-sm text-yellow-400">Rating: {category.rating} ★★★★</p>
            </Link>
        
        </div>
      </div>
    ))}
  </main>
  
  
  );
}

export default Home;
