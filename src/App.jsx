import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Templates from './pages/Template';
import Favourites from './pages/Favourites';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/favorites" element={<Favourites />} />
          <Route path="/" element={<Templates />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
