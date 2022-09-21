import { QUIZ_MOCK_DATA } from "./quizzes";
  
  export default function handler(req, res) {
    const {
      id
    } = req.query
    if (req.method === 'GET') {
      const quizz = QUIZ_MOCK_DATA.find(quizz => quizz.id == id)
      res.status(200)
        .json(quizz)
    } else if (req.method === 'DELETE') {
      const deletedquizz = QUIZ_MOCK_DATA.find(
        quizz => quizz.id == id
      )
      const index = QUIZ_MOCK_DATA.findIndex(
        quizz => quizz.id == id
      )
      QUIZ_MOCK_DATA.splice(index, 1)
      res.status(200)
        .json(deletedquizz)
    }
  }