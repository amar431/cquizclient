import { createSlice } from "@reduxjs/toolkit"

export const questionReducer = createSlice({
    name:"questions",
    initialState: {
        queue: [],      // Initialize questions as an empty array
        userAnswers: [],    // An object to store user answers, e.g., { questionId: selectedOption }
        trace: 0// Track the current question index
      },
      reducers: {
        startExamAction:(state,action)=>{
          let { question, answers} = action.payload
            return {
                ...state,
                queue : question,
                answers
            
        }
      },
      setCurrentQuestion: (state, action) => {
        console.log('Inside setCurrent reducer');
        const newIndex = action.payload;
        // Add logic to handle out-of-bounds index or other validation if needed
        return {
          ...state,
          trace: newIndex
        };
      },
      moveToNextQuestion: (state) => {
       
        console.log("inside move to next question")
        console.log(state.trace)
       
          return {
            ...state,
            trace: state.trace + 1  
          };
      },    
      },
    });
export const { startExamAction,setCurrentQuestion,moveToNextQuestion } = questionReducer.actions;
export default questionReducer.reducer