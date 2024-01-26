import { combineReducers } from 'redux';
import quizReducer from './slices/quizSlice';

const rootReducer = combineReducers({
  quiz: quizReducer,
  // Add more reducers here if needed
});

export default rootReducer;