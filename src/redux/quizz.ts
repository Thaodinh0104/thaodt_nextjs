import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { server } from "config";

const initialState = {
  quizzes: [],
  error: "",
  loading: false,
};

export const getQuizzies = createAsyncThunk(
  "getQuizzies",
  async ({ rejectWithValue }) => {
    try {
      const response = await await fetch(`${server}/api/quizzes`);
      const quizz = await response.json();
      return quizz;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const getQuizzByID = createAsyncThunk(
  "tour/getQuizzByID",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(`${server}/api/quizzes/${id}`);
      const quizz = await res.json();
      return quizz;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const createQuizz = createAsyncThunk(
  "quizz/createQuizz",
  async ({ updatedQuizzData }, { rejectWithValue }) => {
    try {
      const response = await fetch("/api/quizzes", {
        method: "POST",
        body: JSON.stringify({
          title: updatedQuizzData.title,
          description: updatedQuizzData.description,
          category: updatedQuizzData.category,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);

      return data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// export const getQuizzsByUser = createAsyncThunk(
//   "tour/getQuizzsByUser",
//   async (userId, { rejectWithValue }) => {
//     try {
//       const response = await API.get(`/tour/userQuizzs/${userId}`);
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err.response.data);
//     }
//   }
// );

export const updateQuizz = createAsyncThunk(
  "quizz/updateQuizz",
  async ({ id, updatedQuizzData, toast }, { rejectWithValue }) => {
    try {
      const response = await fetch("/api/quizzes", {
        method: "POST",
        body: JSON.stringify({
          id: id,
          data: updatedQuizzData,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast.success("Quizz Updated Successfully");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// export const deleteQuizz = createAsyncThunk(
//   "tour/deleteQuizz",
//   async ({ id, toast }, { rejectWithValue }) => {
//     try {
//       const response = await API.delete(`/tour/${id}`);
//       toast.success("Quizz Deleted Successfully");
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err.response.data);
//     }
//   }
// );
export const QuizzSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {},
  extraReducers: {
    [getQuizzies.pending]: (state, action) => {
      state.loading = true;
    },
    [getQuizzies.fulfilled]: (state, action) => {
      state.loading = false;
      state.quizzes = [action.payload];
    },
    [getQuizzies.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getQuizzByID.pending]: (state, action) => {
      state.loading = true;
    },
    [getQuizzByID.fulfilled]: (state, action) => {
      state.loading = false;
      state.quizzes = [action.payload];
    },
    [getQuizzies.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [createQuizz.pending]: (state, action) => {
      state.loading = true;
    },
    [createQuizz.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.quizzes = [action.payload.title];
      console.log(state);
    },
    [createQuizz.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [updateQuizz.pending]: (state, action) => {
      state.loading = true;
    },
    [updateQuizz.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [updateQuizz.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

// Action creators are generated for each case reducer function
// export const { data } = fetchCategoryData.actions;

export default QuizzSlice.reducer;
export const selectQuizzList = (state) => (state?.quizzes ? state.quizzes : []);
