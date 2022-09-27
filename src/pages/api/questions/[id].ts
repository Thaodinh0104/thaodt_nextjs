import { QUESTION_MOCK_DATA } from "./question";

export default function handler(req, res) {
  const { id } = req.query;
  if (req.method === "GET") {
    const question = QUESTION_MOCK_DATA.find((question) => question.id == id);
    res.status(200).json(question);
  } else if (req.method === "DELETE") {
    const deletedquestion = QUESTION_MOCK_DATA.find(
      (question) => question.id == id
    );
    const index = QUESTION_MOCK_DATA.findIndex((question) => question.id == id);
    QUESTION_MOCK_DATA.splice(index, 1);
    res.status(200).json(deletedquestion);
  }
}
