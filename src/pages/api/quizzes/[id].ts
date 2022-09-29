import { NextApiRequest, NextApiResponse } from "next";
import Quizz from "pages/quizz/[id]";
import { ANSWER_MOCK_DATA } from "../answers/answers";
import { QUESTION_MOCK_DATA } from "../questions/question";
import { QUIZ_MOCK_DATA } from "./quizzes";
interface Answer {
  id: string;
  title: string;
  question_id: string;
  description: string;
}
interface Question {
  id: string;
  title: string;
  description: string;
  correct_answer: string;
}
interface Quizz {
  category: string;
  description: string;
  id: string;
  questions: string[];
  title: string;
  user: string;
}

interface QuestionResponse extends Question {
  answers?: Answer;
}
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { method } = req;
  const { id } = req.query;

  switch (method) {
    case "GET":
      const quizzies = QUIZ_MOCK_DATA.find((quizz: Quizz) => quizz.id == id);
      // quizz.question = ["1","2"]
      const questions = QUESTION_MOCK_DATA.map(
        (question: QuestionResponse) => ({
          ...question,
          answers: ANSWER_MOCK_DATA.filter(
            (a) => question.id === a.question_id
          ),
        })
      ).filter((e) => quizzies?.questions.includes(e.id));
      console.log(questions);

      const result = { ...quizzies, questions: questions };
      res.status(200).json(result);

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
