import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

const Home = () => {
  const [Catagorydata, setCatagorydata] = useState([]);
  
  const Data = {
    "TrendingApps": { "app1": { "name": "App One", "type": "Training" } },
    "PreducativityApps": { "app2": { "name": "Pet App", "type": "Preducativity" } },
    "HealthcareApps": { "app3": { "name": "Handle King", "type": "Healthcare" } }
  
  };
  
const useData = useLoaderData();
  useEffect(() => {
    fetch('/Dcatagorydata.json')
      .then((res) => res.json())
      .then((data) => setCatagorydata(data))
      .catch((error) => console.error(error));
  }, []);

   console.log( useData,Data);
   
     return (
      <main className="mx-auto mt-5 space-y-8 max-w-7xl">
        <h1></h1>
       <ul>
        {Catagorydata.map((item, index) => (
          <>
          <li key={index}></li>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                 <div className="p-4 transition-all duration-300 bg-gray-800 border border-gray-700 shadow-lg rounded-xl hover:scale-105 hover:shadow-xl">
                    <img src={item.images}  class="w-30 mx-auto h-30 object-fill rounded-full mb-4" />
                     <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                    <p className="text-sm text-gray-400">Pemutar & Editor Video</p>
                     <p className="text-sm text-yellow-400">Rating: 4.3 ★</p>
               </div>
           </div>
           </>
        ))}
      </ul>

  </main>
  );
};

export default Home;
