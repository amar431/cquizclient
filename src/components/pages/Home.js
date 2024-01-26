import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import { authSuccess,authFailure } from '../../redux/user/userSlice'; 
import axios from 'axios';


function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const {isAuthenticated} = useSelector((state)=>state.user);
  
  
  
 
  // Use useEffect to check authentication status when the component mounts
  useEffect(() => {
    axios.get('http://localhost:3000/api/auth/quiz', { withCredentials: true })
      .then((response) => {
        if (response.data.authenticated) {
          console.log('user is authenticated');
          dispatch(authSuccess(true))
        }
             
        
      })
      .catch((error) => {
        dispatch(authFailure(false))
        console.error('Error not authenticated:', error);
       
        
      });
  }, []);
  

  // Define what to render based on the user's authentication status
  // const renderContent = isAuthenticated ? (
  //   <Link to="/quiz" className="flex justify-center">
  //     <button className="bg-blue-500 hover:bg-blue-600 text-white py-4 px-6 rounded-lg text-2xl">
  //       Take Quiz
  //     </button>
  //   </Link>
  // ) : (
  //   <p className="text-center text-red-500">You must be logged in to take the quiz.</p>
  // );

  return (
    <div className="container mx-auto mt-8">
    <h1 className="text-4xl font-semibold mb-8 text-center">Welcome to the Quiz App</h1>
    {isAuthenticated ? (
      
      <button onClick={() => navigate("/quiz")} className="bg-blue-500 hover:bg-blue-600 text-white py-4 px-6 rounded-lg text-2xl">
        Take Quiz
      </button>
    
    ) : (
      <div className="text-center mt-4">
        <p className="text-sm text-gray-500">
          To take the quiz, please log in or register.
        </p>
        <Link to="/login" className="text-blue-500 hover:underline">
          Log In
        </Link>
        <span className="text-gray-500 mx-2">or</span>
        <Link to="/register" className="text-blue-500 hover:underline">
          Register
        </Link>
      </div>
    )}
  </div>
);
}

export default Home;