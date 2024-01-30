import React, { useState, useEffect } from 'react';
import Question from '../quizcomponents/Question';
import { useSelector, useDispatch } from 'react-redux';
import { MoveNextQuestion,MovePrevQuestion } from '../../hooks/FetchQuestion';
import { PushAnswer } from '../../hooks/setResult';

import { useNavigate } from "react-router-dom";


const Quiz = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector(state=>state)
  const result = useSelector(state=>state.result.result)
  const trace = useSelector((state) => state.questions.trace);
  const queue = useSelector(state=>state.questions.queue.questions)
  const [check, setChecked] = useState(undefined);

  useEffect(()=>{
  //   // console.log(queue.length,"idi queue")
    // console.log(trace,"idi trace")
    // console.log("result",result)
    console.log(state)

  })

  const handlePreviousQuestion = async() => {
    // Implement your logic for handling the previous question
    try {
      if (trace>0){
        await dispatch(MovePrevQuestion());
      }
       
    } catch (error) {
      console.log(error);
    }
  };

  const handleNextQuestion = async () => {
    try {
      if (trace<queue.length){

         dispatch(MoveNextQuestion());
        
        
         if(result.length <= trace){

           dispatch(PushAnswer(check))
         }

        
      }
       
    } catch (error) {
      console.log(error);
    }
  };

  function onChecked(check) {
    console.log(check,"idi checked option") 
    setChecked(check)
  }

  if(result && result?.length >= queue?.length-1){
     navigate('/result')
  }

  // const currentQuestion = state.questions.queue.questions?.[currentIndex];

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Main Content */}
      <div className="flex items-center justify-center w-full"> {/* Center question content */}
        <div className="flex-grow p-4 mx-20 mb-4"> {/* Adjust margins for better spacing */}
          <Question onChecked={onChecked} />
        </div>
      </div>
      <div className="flex justify-center mt-2"> {/* Center buttons */}
      {trace >0 ? <button onClick={handlePreviousQuestion}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-2 mr-2 rounded"
        >
          Previous
        </button>:<div></div>}
        
        <button
          onClick={handleNextQuestion}
          className="bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 my-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};


export default Quiz;
