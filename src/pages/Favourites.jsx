import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



function Favourites() {
    const [data, setData] = useState([]);
    
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

  
  if (!token) {
    navigate("/login");
  }

  useEffect(() => {
    axios.get("http://localhost:5000/api/favorites", {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setData(res.data));
  }, []);

  return (
    <div>
      <h2>Favorites</h2>
      {data.map(t => (
        <div key={t.id}>
          <h3>{t.title}</h3>
          <p>{t.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Favourites;