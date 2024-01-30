import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetAllAction } from '../../redux/quizReducer';
import { resetResultAction } from '../../redux/resultReducer';

const Result = () => {
  const dispatch = useDispatch()
  function onRestart(){
    dispatch(resetAllAction())
    dispatch(resetResultAction())

  }
  return (
    <div className="start">
    <Link className='btn' to={'/'} onClick={onRestart}>Restart</Link>
</div>
  )
}

export default Result