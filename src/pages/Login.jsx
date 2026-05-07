import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError('');
  setLoading(true);

  try {
    // fake login (no backend)
    localStorage.setItem("token", "dummy-token");
    navigate("/templates");
  } catch (err) {
    setError("Login failed");
  } finally {
    setLoading(false);
  }
};
  function routeregister() {
    navigate('/');
  }

 return (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">

    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-xl w-full max-w-md p-8 flex flex-col gap-5"
    >
      
      {/* Title */}
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>

        <p className="mt-2 text-sm text-gray-600">
          <span
            className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer"
            onClick={routeregister}
          >
            create a new account
          </span>
        </p>
      </div>

      {/* Error */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded">
          {error}
        </div>
      )}

      {/* Inputs */}
      <div className="flex flex-col gap-4">
        <input
          name="email"
          type="email"
          required
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
          className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <input
          name="password"
          type="password"
          required
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-2 rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition disabled:opacity-50"
      >
        {loading ? "Signing in..." : "Sign In"}
      </button>

    </form>
  </div>
);
};

export default Login;