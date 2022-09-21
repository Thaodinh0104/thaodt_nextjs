import { USER_MOCK_DATA } from "./user";
  
  export default function handler(req, res) {
    const {
      id
    } = req.query
    if (req.method === 'GET') {
      const user = USER_MOCK_DATA.find(user => user.id == id)
      res.status(200)
        .json(user)
    } else if (req.method === 'DELETE') {
      const deleteduser = USER_MOCK_DATA.find(
        user => user.id == id
      )
      const index = USER_MOCK_DATA.findIndex(
        user => user.id == id
      )
      USER_MOCK_DATA.splice(index, 1)
      res.status(200)
        .json(deleteduser)
    }
  }