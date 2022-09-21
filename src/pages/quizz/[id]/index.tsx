import FrontLayout from "@components/Front/FrontLayout";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Image from "next/image";
import Grid from "@mui/material/Unstable_Grid2";
import { quizzMock } from "_mocks_/quizz";
import { List, ListItem, ListItemText } from "@mui/material";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { array } from "yup";
import { positions } from "@mui/system";
import { title } from "process";
import clsx from "clsx";
import useAppContext from "context/AppContext";
type Answer = {
  title: string;
  id: string;
};
interface Question {
  title: string;
  correctAnswer: string;
  id: string;
  anwser: Answer;
}
interface Quizz {
  category: string;
  description: string;
  id: string;
  questions: Question;
  title: string;
  user: string;
}
interface DataAnswer {
  id: string;
  chosieAnswer: string;
}

type Color = "primary" | "secondary";

export type OutResult = {
  output: DataAnswer;
  onSubmitData: (data: DataAnswer) => any;
};

function QuestionItem({
  index,
  questionID,
  item,
  handleChoise,
  choiseData,
}: {
  index: any;
  questionID: any;
  item: Question;
  handleChoise: any;
  choiseData: any;
}) {
  if (choiseData)
    return (
      <ListItem
        className={clsx(
          item.id === choiseData.chosieAnswer &&
            choiseData.chosieAnswer !== "" &&
            "active"
        )}
        onClick={() => handleChoise(questionID, item.id)}
      >
        {item.title}
      </ListItem>
    );
}

const Quizz: NextPage = ({ quizz }) => {
  const router = useRouter();
  const [choise, setChoise] = useState("");
  const [listAnswer, setLisAnswer] = useState<DataAnswer[]>([]);

  const [nextQuestion, setNextQuestion] = useState(0);
  const [prevQuestion, setPrevQuestion] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const { output, onSubmitData } = useAppContext() as OutResult;
  useEffect(() => {
    const newData = quizz.questions?.map((questionAnswer: DataAnswer) => {
      return { id: questionAnswer.id, chosieAnswer: "" };
    });
    setLisAnswer(newData);
  }, []);

  const handleChoise = (
    index: number,
    idQuestion: string,
    correctAnswer: string
  ) => {
    setChoise(idQuestion);
    const newDataAnswer =
      listAnswer.length &&
      listAnswer.map((item: DataAnswer) => {
        return {
          ...item,
          id: item.id,
          chosieAnswer:
            correctAnswer && idQuestion == item.id
              ? correctAnswer
              : item.chosieAnswer,
        };
      });
    const current = index;
    setCurrentQuestion(current);
    setPrevQuestion(index - 1);
    setNextQuestion(index + 1);
    setLisAnswer(newDataAnswer);
  };

  const handelPrevQuestion = (index: Number) => {
    setCurrentQuestion(index);
    setPrevQuestion(index - 1);
    setNextQuestion(index + 1);
  };
  const handelNextQuestion = (index: Number) => {
    setCurrentQuestion(index);
    setPrevQuestion(index - 1);
    setNextQuestion(index + 1);
  };
  const handleSubmit = () => {
    console.log("questions", quizz.questions);
    console.log("listAnswer", listAnswer);

    const resultOutput = quizz.questions.filter((question) => {
      return listAnswer.some(
        (answer) =>
          answer.id === question.id &&
          +answer.chosieAnswer === question.correctAnswer
      );
    });
    console.log("resultOutput", resultOutput);
    // router.push({
    //   pathname: `/${router.asPath}/result`,
    // });
  };

  return (
    <FrontLayout>
      <Box sx={{ position: "relative" }}>
        <Container sx={{ py: 5, position: "relative" }} maxWidth="lg">
          <Box>
            {quizz.questions.map((questionData, index) => (
              <Box key={questionData.id}>
                {index == currentQuestion && (
                  <>
                    <Box display={"flex"} justifyContent={"space-between"}>
                      <Typography
                        variant="h2"
                        sx={{
                          position: "relative",
                          "&:before": {
                            background: "#461a42",
                            content: '""',
                            height: "4px",
                            width: "100px",
                            position: "absolute",
                            top: "0",
                          },
                        }}
                      >
                        {questionData.title}
                      </Typography>
                      <Button
                        sx={{
                          bgcolor: "#461a42",
                          color: "#ffffff",
                          px: 3,
                          "&:hover": {
                            bgcolor: "#461a42",
                          },
                        }}
                        onClick={() => handleSubmit()}
                      >
                        Submit
                      </Button>
                    </Box>
                    <Grid container spacing={2} pt="50px">
                      <Grid xs={5}>
                        <CardMedia
                          component="img"
                          image="/assets/images/goal.jpg"
                          alt="random"
                        />
                      </Grid>
                      <Grid xs={7}>
                        <List
                          sx={{
                            pl: "10%",
                            "& li": {
                              display: "list-item",
                              counterIncrement: "alphabeticList",
                              background: "#ffffff",
                              boxShadow:
                                "0 1px 5px 0 rgb(0 0 0 / 12%), 0 3px 1px -2px rgb(0 0 0 / 6%), 0 2px 2px 0 rgb(0 0 0 / 8%)",
                              p: "10px",
                              mb: "30px",
                              borderRadius: "30px",
                              cursor: "pointer",
                              "&::before": {
                                backgroundColor: "#b892ff",
                                fontWeight: "bold",
                                content: "counter(alphabeticList, upper-alpha)",
                                padding: "5px 20px",
                                color: "#ffffff",
                                borderRadius: "30px",
                                marginRight: "15px",
                              },
                              "&:hover, &.active": {
                                background: "rgb(184 146 255 / 9%)",
                              },
                            },
                          }}
                        >
                          {questionData.answers.map((item, index) => {
                            return (
                              <QuestionItem
                                key={index}
                                item={item}
                                index={index}
                                handleChoise={handleChoise}
                                choiseData={listAnswer.find(
                                  (e) => questionData.id == e.id
                                )}
                                questionID={questionData.id}
                              />
                            );
                          })}
                        </List>
                      </Grid>
                    </Grid>
                  </>
                )}
              </Box>
            ))}
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            mt={4}
            sx={{
              position: "relative",
              "&::before": {
                content: '""',
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                bgcolor: "#b892ff",
                width: "100%",
                height: "1px",
                left: 0,
                zIndex: -1,
              },
            }}
          >
            {currentQuestion > 0 && (
              <Typography
                sx={{ bgcolor: "#ffffff", px: 1, cursor: "pointer" }}
                onClick={() => handelPrevQuestion(currentQuestion - 1)}
              >
                Previous Questions
              </Typography>
            )}
            <Typography
              sx={{
                bgcolor: "#ffffff",
                zIndex: 1,
                fontWeight: "700",
                px: 1,
                color: "#b892ff",
              }}
            >
              Questions {+currentQuestion + 1}
            </Typography>
            {currentQuestion < quizz.questions.length - 1 && (
              <Typography
                onClick={() => handelNextQuestion(currentQuestion + 1)}
                sx={{ bgcolor: "#ffffff", px: 1, cursor: "pointer" }}
              >
                Next Questions
              </Typography>
            )}
          </Box>
        </Container>
      </Box>
    </FrontLayout>
  );
};

export default Quizz;
export async function getStaticPaths() {
  const paths = quizzMock.map((item) => ({
    params: { id: item.id },
  }));

  return {
    paths: paths,
    fallback: false, // can also be true or 'blocking'
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: any) {
  const { params } = context;
  const quizz = await quizzMock.find((e) => params.id == e.id);
  console.log(quizz);
  return {
    // Passed to the page component as props
    props: { quizz },
  };
}
