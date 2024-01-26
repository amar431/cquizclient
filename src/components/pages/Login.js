import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleLogin = async(e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', userData,{
        withCredentials: true, // Set withCredentials to true
      });
      
      console.log('Login successful:', response.data);
      toast.success('Login successful.');
      navigate('/')
      
    } catch (error) {
      console.error('Login failed:', error.response.data);
      toast.error('Login failed.');
      
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="max-w-md mx-auto p-4 border rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <input
              type="email"
              className="w-full px-3 py-2 rounded-md border"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="w-full px-3 py-2 rounded-md border"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="w-full bg-blue-500 text-white py-2 rounded-md"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;