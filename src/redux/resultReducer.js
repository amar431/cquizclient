// resultReducer.js
import { createSlice } from "@reduxjs/toolkit";

export const resultReducer = createSlice({
  name: 'result',
  initialState: {
    userId: null,
    result: []
  },
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    pushResultAction: (state, action) => {
      const { question, selectedOption } = action.payload;

      const existingResultIndex = state.result.findIndex(item => item.questionId === question);

      if (existingResultIndex !== -1) {
        state.result[existingResultIndex].selectedOption = selectedOption;
      } else {
        state.result.push({ questionId: question, selectedOption });
      }
    },
  },
});

export const { setUserId, pushResultAction } = resultReducer.actions;

export default resultReducer.reducer;
