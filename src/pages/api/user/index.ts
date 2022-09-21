import { USER_MOCK_DATA } from "./user";

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200)
      .json(USER_MOCK_DATA)
  } else if (req.method === 'POST') {
    const email = req.body.email
    const password = req.body.password
    const firstName = req.body.first_name
    const lastName = req.body.last_name
    const role = req.body.role
    const newUser = {
      id: Date.now(),
      email,
      password,
      firstName,
      lastName,
      role,
    }
    USER_MOCK_DATA.push(newUser)
    res.status(201)
      .json(newUser)
  }
}