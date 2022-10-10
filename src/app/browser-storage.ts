import { QUIZ_MOCK_DATA } from "pages/api/quizzes/quizzes";

const KEY = "quizzes";
export function loadState() {
  try {
    const serializedState = localStorage.getItem(KEY, QUIZ_MOCK_DATA);
    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
}

export async function saveState(state: any) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(KEY, serializedState);
  } catch (e) {
    // Ignore
  }
}
