import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-semibold">Quiz App</h1>
        <nav className="space-x-4">
          <Link to="/register" className="text-white hover:underline">
            Register
          </Link>
          <Link to="/login" className="text-white hover:underline">
            Login
          </Link>
          
        </nav>
      </div>
    </header>
  );
}

export default Header;