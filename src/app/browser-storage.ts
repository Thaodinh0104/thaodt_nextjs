import { QUIZ_MOCK_DATA } from "pages/api/quizzes/quizzes";
import { emitKeypressEvents } from "readline";

const KEY = "quizzes";
export function loadQuizzState() {
  try {
    const serializedState = localStorage.getItem(KEY);
    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
}

export async function saveQuizzState(state: any) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(KEY, serializedState);
  } catch (e) {
    // Ignore
  }
}
