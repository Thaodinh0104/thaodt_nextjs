import { USER_MOCK_DATA } from "./user";

export default function handler(req, res) {
  const { id } = req.query;
  if (req.method === "GET") {
    const user = USER_MOCK_DATA.find((user) => user.id == id);
    res.status(200).json(user);
  } else if (req.method === "POST") {
    const email = req.body.email;
    const password = req.body.password;
    const firstName = req.body.first_name;
    const lastName = req.body.last_name;
    const role = req.body.role;
    const result = req.body.result;
    const updateUser = USER_MOCK_DATA.map((user) => {
      if (user.id == id) {
        return {
          ...user,
          id: user.id,
          result: result,
        };
      } else {
        return user;
      }
    });
    // USER_MOCK_DATA = updateUser;
    res.status(200).json(updateUser);
  } else if (req.method === "DELETE") {
    const deleteduser = USER_MOCK_DATA.find((user) => user.id == id);
    const index = USER_MOCK_DATA.findIndex((user) => user.id == id);
    USER_MOCK_DATA.splice(index, 1);
    res.status(200).json(deleteduser);
  }
}
