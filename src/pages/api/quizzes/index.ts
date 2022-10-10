import { QUIZ_MOCK_DATA } from "./quizzes";
import React, { useEffect } from "react";

export default function handler(req, res) {
  // window.localStorage.setItem("quizzData", json(QUIZ_MOCK_DATA));
  // useEffect(() => {
  //   window.localStorage.setItem("quizzData", JSON.stringify(QUIZ_MOCK_DATA));
  // }, []);
  if (req.method === "GET") {
    res.status(200).json(QUIZ_MOCK_DATA);
  } else if (req.method === "POST") {
    const title = req.body.title;
    const category = req.body.category;
    const description = req.body.description;
    const user = req.body.user;
    const questions = req.body.questions;
    const newQuizz = {
      id: Date.now().toString(),
      title,
      category,
      description,
      user,
      questions,
    };
    QUIZ_MOCK_DATA.push(newQuizz);
    const data = {
      currentID: newQuizz.id,
      listQuizz: QUIZ_MOCK_DATA,
    };
    res.status(201).json(data);
  }
}
