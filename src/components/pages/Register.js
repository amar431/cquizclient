import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault();
    // Implement registration logic
    const userData = {
      name: name,
      email: email,
      password: password,
    };
    try {
      const response = await axios.post('http://localhost:3000/api/auth/register', userData);
      console.log(response)
      console.log('Registration successful:', response.data);
      toast.success('Registration successful.');

      // Display a success message
      setSuccessMessage('Registration successful.');

      // Redirect to the login page after a successful registration
      navigate('/login')
    } catch (error) {
      // Handle registration errors, e.g., display an error message
      
      setError('Registration failed. Please try again.');
      toast.error('Registration failed.');
      
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="max-w-md mx-auto p-4 border rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Register</h2>
        <form>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          {successMessage && <div className="text-green-500 mb-4">{successMessage}</div>}
          <div className="mb-4">
            <input
              type="text"
              className="w-full px-3 py-2 rounded-md border"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
            onClick={handleRegister} 
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;