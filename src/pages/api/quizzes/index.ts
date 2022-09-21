// import { QUIZ_MOCK_DATA } from "./quizzes";

import { QUIZ_MOCK_DATA } from "./quizzes";

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200)
      .json(QUIZ_MOCK_DATA)
  } else if (req.method === 'POST') {
    const title = req.body.title
    const category = req.body.category
    const description = req.body.description
    const user = req.body.user
    const newQuizz = {
      id: Date.now(),
      title,
      category,
      description,
      user
    }
    QUIZ_MOCK_DATA.push(newQuizz)
    res.status(201)
      .json(newQuizz)
  }
}