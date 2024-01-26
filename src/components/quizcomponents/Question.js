import React, { useState, useEffect } from 'react';
import { useFetchQuestion } from '../../hooks/FetchQuestion';
import { useSelector, useDispatch } from 'react-redux';
import { PushAnswer } from '../../hooks/setResult';

const Question = ({ question }) => {
  const [{ isLoading, serverError }] = useFetchQuestion();
  const dispatch = useDispatch();
  const result = useSelector(state=>state.result.result)
  const [selectedOption, setSelectedOption] = useState(null);
  const [checked,setChecked] = useState(undefined)

  // Reset selectedOption when the question changes
  useEffect(() => {
    setSelectedOption(null);
  }, [question]);
  
  useEffect(() => {
    if (selectedOption !== null) {
      const timeoutId = setTimeout(() => {
        dispatch(PushAnswer(question?.id, checked));
      }, 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [selectedOption, dispatch, question?.id, checked]);

  const handleOptionClick = (index) => {
    setSelectedOption((prevSelectedOption) =>
    prevSelectedOption === index ? null : index
  );
  setChecked(index);
};


  if (isLoading) return <h3 className='text-orange-400'>Loading...</h3>;
  if (serverError) return <h3 className='text-red-500'>{serverError.message || "Unknown Error"}</h3>;
  if (!question) return <h3 className='text-orange-400'>Loading...</h3>;

  return (
    <div className='max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md my-4'>
      <div className='p-4'>
        <h3 className='text-xl font-bold mb-4'>Question Number:{question?.id}</h3>
        <h2 className='text-xl font-bold mb-4'>{question?.text}</h2>
        <ul className='list-none p-0'>
          {question?.options &&
            question.options.map((option, index) => (
              <li
                key={index}>
                <label className={`option-label ${selectedOption === index ? 'checked' : ''}`}>
                  <input
                    type='radio'
                    value={index}
                    checked={selectedOption === index}
                    id={`q${index}-option`}
                    onChange={() => handleOptionClick(index)}
                  />
                  {option}
                </label>
               
                
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default React.memo(Question);
