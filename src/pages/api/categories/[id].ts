import { ANSWER_MOCK_DATA } from "./categories";
  
  export default function handler(req, res) {
    const {
      id
    } = req.query
    if (req.method === 'GET') {
      const category = ANSWER_MOCK_DATA.find(category => category.id == id)
      res.status(200)
        .json(category)
    } else if (req.method === 'DELETE') {
      const deletedCategory = ANSWER_MOCK_DATA.find(
        category => category.id == id
      )
      const index = ANSWER_MOCK_DATA.findIndex(
        category => category.id == id
      )
      ANSWER_MOCK_DATA.splice(index, 1)
      res.status(200)
        .json(deletedCategory)
    }
  }