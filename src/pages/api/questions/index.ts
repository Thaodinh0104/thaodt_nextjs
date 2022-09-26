// import { QUIZ_MOCK_DATA } from "./quizzes";

import { QUESTION_MOCK_DATA } from "./question";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(QUESTION_MOCK_DATA);
  } else if (req.method === "POST") {
    const title = req.body.title;
    const correctAnswer = req.body.correct_answer;
    const description = req.body.description;
    const newQuestion = {
      id: Date.now(),
      title,
      correctAnswer,
      user: "1",
      description,
    };
    QUESTION_MOCK_DATA.push(newQuestion);
    res.status(201).json(newQuestion);
  }
}
