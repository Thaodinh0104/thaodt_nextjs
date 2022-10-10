import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import CategoriesSlice from "./category";
import QuizzSlice from "./quizz";
// ...

export const store = configureStore({
  reducer: {
    categories: CategoriesSlice,
    quizzes: QuizzSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
