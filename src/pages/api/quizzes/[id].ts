import { NextApiRequest, NextApiResponse } from "next";
import { ANSWER_MOCK_DATA } from "../answers/answers";
import { QUESTION_MOCK_DATA } from "../questions/question";
import { QUIZ_MOCK_DATA } from "./quizzes";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { method } = req;
  const { id } = req.query;

  switch (method) {
    case "GET":
      const quizzies = QUIZ_MOCK_DATA.find((quizz) => quizz.id == id);
      // quizz.question = ["1","2"]
      const questions = QUESTION_MOCK_DATA.filter((q) => {
        quizzies?.questions.find((item) => item === q.id);
      });
      const answers = ANSWER_MOCK_DATA.filter((a) =>
        questions.some((e) => e.id === a.question_id)
      );

      res.status(200).json(quizz);

    case "PUT":
      const { title, description, category } = req.body;
      const updatQuizz = QUIZ_MOCK_DATA.map((quizz) => {
        if (quizz.id == id) {
          return {
            ...quizz,
            title,
            description,
            category,
          };
        } else {
          return quizz;
        }
      });
      res.status(200).json(updatQuizz);
      break;

    case "DELETE":
      const deletedquizz = QUIZ_MOCK_DATA.find((quizz) => quizz.id == id);
      const index = QUIZ_MOCK_DATA.findIndex((quizz) => quizz.id == id);
      QUIZ_MOCK_DATA.splice(index, 1);
      res.status(200).json(deletedquizz);
      break;
  }
}
