import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { server } from "config";

const initialState = [1, 2];

export const fetchCategories = createAsyncThunk("api/quizzes", async () => {
  const response = await fetch(`${server}/api/quizzes`);
  const category = await response.json();
  return category;
});

export const QuizzSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
// export const { data } = fetchCategoryData.actions;

export default QuizzSlice.reducer;
export const selectQuizzList = (state) => state.quizzes;
