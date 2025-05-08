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
    
    <div className="bg-black">
    <main className="grid w-full grid-cols-4 gap-6 mx-auto max-w-7xl ">
    {Catagorydata.map((category, index) => (
      <div className="flex flex-col max-w-xl p-8 mt-8 bg-gray-800 divide-y rounded-md shadow-sm text-gray-50" key={index}>
        <h1 className="mb-4 text-2xl font-bold ">{category.category}</h1>
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
              <p className="text-sm text-gray-400">{category.viue}</p>
              <p className="text-sm text-gray-400">{category.downloads}</p>
              <p className="text-sm text-yellow-400">Rating: {category.rating} ★★★★</p>
            </Link>
        </div>
    ))}
  </main>
  </div>
  
  );
}

export default Home;
