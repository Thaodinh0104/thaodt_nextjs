import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { server } from "config";

const initialState = [1, 2];

export const fetchCategories = createAsyncThunk("api/categories", async () => {
  const response = await fetch(`${server}/api/categories`);
  const category = await response.json();
  return category;
});

export const CategoriesSlice = createSlice({
  name: "categories",
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

export default CategoriesSlice.reducer;
export const selectAllCategory = (state) => state.categories;
