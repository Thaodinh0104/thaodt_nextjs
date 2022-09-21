// import { QUIZ_MOCK_DATA } from "./quizzes";

import { ANSWER_MOCK_DATA } from "./answers";

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200)
      .json(ANSWER_MOCK_DATA)
  } else if (req.method === 'POST') {
    const title = req.body.title
    const description = req.body.description
    const newAnswer = {
      id: Date.now(),
      title,
      description
    }
    ANSWER_MOCK_DATA.push(newAnswer)
    res.status(201)
      .json(newAnswer)
  }
}