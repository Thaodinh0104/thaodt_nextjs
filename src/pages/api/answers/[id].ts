import { ANSWER_MOCK_DATA } from "./answers";
  
  export default function handler(req, res) {
    const {
      id
    } = req.query
    if (req.method === 'GET') {
      const answer = ANSWER_MOCK_DATA.find(answer => answer.id == id)
      res.status(200)
        .json(answer)
    } else if (req.method === 'DELETE') {
      const deletedanswer = ANSWER_MOCK_DATA.find(
        answer => answer.id == id
      )
      const index = ANSWER_MOCK_DATA.findIndex(
        answer => answer.id == id
      )
      ANSWER_MOCK_DATA.splice(index, 1)
      res.status(200)
        .json(deletedanswer)
    }
  }