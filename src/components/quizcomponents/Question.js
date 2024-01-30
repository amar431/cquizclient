import React, { useState, useEffect } from 'react';
import { useFetchQuestion } from '../../hooks/FetchQuestion';
import { useSelector, useDispatch } from 'react-redux';
import { PushAnswer } from '../../hooks/setResult';
import { updateResultAction } from '../../redux/resultReducer';
import { updateResult } from '../../hooks/setResult';

const Question = ({onChecked}) => {
  const [{ isLoading, serverError }] = useFetchQuestion();
  const dispatch = useDispatch();
  const result = useSelector(state=>state.result.result)
  const {trace} = useSelector(state=>state.questions)
  const questions = useSelector(state=>state.questions.queue.questions?.[state.questions.trace])
  const [checked,setChecked] = useState(undefined)


  // Reset selectedOption when the question changes
  
  useEffect(() => {
    console.log({trace,checked},'idi trace and checked')
    dispatch(updateResult({trace,checked}))
    console.log("after dispatch")

  },[checked]);

  
  

  const handleOptionClick = (index) => {
    // console.log(index)
    onChecked(index)
    setChecked(index)
};


  if (isLoading) return <h3 className='text-orange-400'>Loading...</h3>;
  if (serverError) return <h3 className='text-red-500'>{serverError.message || "Unknown Error"}</h3>;
  if (!questions) return <h3 className='text-orange-400'>Loading...</h3>;

  return (
    <div className='max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md my-6'>
      <div className='p-9'>
        <h3 className='text-xl font-bold mb-4'>Question Number:{questions?.id}</h3>
        <h2 className='text-xl font-bold mb-4'>{questions?.text}</h2>
        <ul className='list-none p-0' key={questions?.id}>
        {questions?.options &&
  questions.options.map((option, index) => (
    <li key={index}  >
        <input
          type='radio'
          value={false}
          name='options'
          id={`q${index}-option`}
          onChange={() => handleOptionClick(index)}
          checked={index === checked}
           

        />
        
     <label htmlFor={`q${index}-option `} 
    > {option}</label>  
     <div className={`${result[trace] === index ? 'selected-option-indicator' : ''}`}></div>
    </li>
  ))}
        </ul>
      </div>
    </div>
  );
};

export default React.memo(Question);
