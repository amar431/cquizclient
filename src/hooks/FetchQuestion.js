import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Action from '../redux/quizReducer'
import axios from 'axios';
console.log(Action)

export const useFetchQuestion = ()=>{
  const dispatch = useDispatch();   
  const[getData,setGetData] = useState({ isLoading : false, apiData : [], serverError: null})

  useEffect(()=>{
    setGetData(prev => ({...prev, isLoading : true}));

    (async()=>{
      try {
        const response = await axios.get('http://localhost:3000/api/auth/quiz', { withCredentials: true })
        if(response.data){
          const firstSetWithNumbering = response.data.firstSet.map((question, index) => ({
            ...question,
            id: index + 1, // Add a unique ID for each question
          }));
          const secondSetWithNumbering = response.data.secondSet.map((question, index) => ({
            ...question,
            id: index + 1 + response.data.firstSet.length, // Add a unique ID for each question
          }));
          const quizData = {
            questions: [...firstSetWithNumbering, ...secondSetWithNumbering],
          }
          if(quizData){
            setGetData(prev => ({...prev, isLoading : false}));
            setGetData(prev => ({...prev, apiData : quizData}));

            dispatch(Action.startExamAction({ question : quizData }))
          }
          else{
            throw new Error("No Question Avalibale");
          }
        }
        
        
      } catch (error) {
        setGetData(prev => ({...prev, isLoading : false}));
        setGetData(prev => ({...prev, serverError : error}));
        
      }

    })()
  },[dispatch])
  return [getData,setGetData]
}

export const moveToQuestion = (index) =>async(dispatch)=>{
  
  const handleMoveToQuestion = () => {
    dispatch(Action.setCurrentQuestion(index));
  };

  return handleMoveToQuestion;
};


export const MoveNextQuestion = ()=> async(dispatch)=>{
  try {
    console.log("hello next question")
    dispatch(Action.moveToNextQuestion())
    console.log("next question is set")
    
  } catch (error) {
    console.log(error)
  }
}

export const MovePrevQuestion = ()=> async(dispatch)=>{
  try {
    dispatch(Action.movePrevAction())
  } catch (error) {
    console.log(error)
  }
}