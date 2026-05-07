import { useEffect, useState } from "react";

function Favourites() {
  const [data, setData] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const dFavorites = [
      { id: 1, title: " Template 1", description: "This is template 1" },
      { id: 2, title: "Template 2", description: "This is template 2" }
    ];

    setData(dFavorites);
  }, [token]);

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      
      
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
        ❤️ Favorites
      </h2>

      
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        
        {data.map(t => (
          <div
            key={t.id}
            className="bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition duration-300"
          >
            
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              {t.title}
            </h3>

            
            <p className="text-gray-600 text-sm">
              {t.description}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}

export default Favourites;