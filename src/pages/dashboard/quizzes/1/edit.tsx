import * as React from "react";
import Dashboard from "@components/Dashboard";
import type { NextPage } from "next";
import { GridCellParams } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { useRouter } from "next/router";
import Container from "@mui/material/Container";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import ListIcon from "@mui/icons-material/List";
const HOST_URL = "/assets/images/";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Stack from "@mui/material/Stack";
import { EditQuizInfo } from "@components/Dashboard/editQuizInfo";
import { AddQuestionDialog } from "@components/Dashboard/addQuestion";
import { EditQuestionDialog } from "@components/Dashboard/editQuestion";
import DeleteIcon from "@mui/icons-material/Delete";
import { useConfirm } from "material-ui-confirm";

const QuizzesEdit: NextPage = ({ quizz }) => {
  const confirm = useConfirm();
  const [openEditInfo, setOpenEditInfo] = React.useState(false);
  const [openAddQuestion, setOpenAddQuestion] = React.useState(false);
  const [openEditQuestion, setOpenEditQuestion] = React.useState(false);
  const [questionID, setQuestionID] = React.useState("");
  const [quizData, setQuizData] = React.useState(quizz);
  //   quizData.questions.map((item) => {
  //     console.log(item.title);
  //   });
  const handleEditInfoOpen = () => {
    setOpenEditInfo(true);
  };
  const handleEditQuestionOpen = (id: string) => {
    setOpenEditQuestion(true);
    setQuestionID(id);
  };
  const handleCloseEditInfo = (value: string) => {
    setOpenEditInfo(false);
  };
  const handleCloseEditQuestion = (id: string) => {
    setOpenEditQuestion(false);
    setQuestionID("");
  };
  const handleCloseAddQuestion = (id: string) => {
    setOpenAddQuestion(false);
    setQuestionID("");
  };

  const handleDeleteQuestion = (item) => {
    console.log("item", item);
    confirm({ description: `Are you sure to delete question ${item.title}.` })
      .then(() => {
        const newData = quizData.questions.filter((e) => item.id !== e.id);
        setQuizData({ ...quizData, questions: newData });
      })
      .catch(() => {
        console.log(quizData);
        console.log("Deletion cancelled.");
      });
  };
  return (
    <Dashboard>
      <Container>
        <Box>
          <Box
            sx={{
              border: "1px solid #e5e5e5",
              borderRadius: "5px",
              bgcolor: "#ffffff",
              padding: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                color: "#6d6d6d",
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src="/assets/images/quiz-image-.png"
                sx={{ width: 120, height: 120, borderRadius: "0" }}
              />
              <Box sx={{ paddingLeft: "30px" }}>
                <Typography variant="body2">Category ID</Typography>
                <Typography component={"h4"} variant="h4" color={"#222222"}>
                  {quizData.title}
                </Typography>
                <Box fontSize={"10px"}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <SmartDisplayIcon /> 0 play
                  </Box>
                </Box>
                <Typography
                  sx={{ fontSize: "12px", color: "#6d6d6d", marginTop: "10px" }}
                >
                  {quizData.content}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                color: "#6d6d6d",
                paddingTop: "15px",
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  color: "#6d6d6d",

                  alignItems: "center",
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="/assets/images/quiz-image-.png"
                  sx={{ width: 50, height: 50, marginRight: "10px" }}
                />
                <Box>
                  <Typography sx={{ fontSize: "10px" }}>Author Name</Typography>
                  <Typography sx={{ fontSize: "8px" }}>3 days</Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  paddingLeft: "30px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Button
                  onClick={handleEditInfoOpen}
                  sx={{
                    bgcolor: "#f2f2f2",
                    marginX: "10px",
                    borderRadius: 2,
                    textAlign: "center",
                    color: "#6b6b6b",
                    textTransform: "unset",
                    fontSize: "0.7rem",
                    fontWeight: "700",

                    lineHeight: "30px",
                    paddingX: "25px",
                    "&.MuiButtonBase-root:hover": {
                      bgcolor: "#461a42",
                      color: "#ffffff",
                    },
                  }}
                  startIcon={<EditIcon />}
                >
                  Edit Quiz Infomations
                </Button>
                <Button
                  onClick={() => setOpenAddQuestion(true)}
                  sx={{
                    bgcolor: "#f2f2f2",
                    marginX: "10px",
                    borderRadius: 2,
                    textAlign: "center",
                    color: "#6b6b6b",
                    textTransform: "unset",
                    fontSize: "0.7rem",
                    fontWeight: "700",

                    lineHeight: "30px",
                    paddingX: "25px",
                    "&.MuiButtonBase-root:hover": {
                      bgcolor: "#461a42",
                      color: "#ffffff",
                    },
                  }}
                  startIcon={<AddIcon />}
                >
                  Add Question
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
      <EditQuizInfo
        id={quizData.id}
        open={openEditInfo}
        onClose={handleCloseEditInfo}
      />
      <AddQuestionDialog
        idAdd={quizData.id}
        open={openAddQuestion}
        onClose={handleCloseAddQuestion}
      />

      <Container sx={{ mt: "30px" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <ListIcon />
          <Typography>20 Questions</Typography>
        </Box>
        <Box>
          {/* List */}
          <Box>
            {/* Item */}
            {quizData.questions.map((itemQuestion) => {
              return (
                <Box
                  key={itemQuestion.id}
                  sx={{
                    border: "1px solid #e5e5e5",
                    borderRadius: "5px",
                    bgcolor: "#ffffff",

                    mt: "10px",
                  }}
                >
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    bgcolor="aliceblue"
                    justifyContent={"space-between"}
                    p={2}
                  >
                    <Stack direction="row" alignItems={"center"}>
                      <CheckBoxIcon />
                      <Typography>{itemQuestion.title}</Typography>
                    </Stack>
                    <Stack direction="row" alignItems={"center"}>
                      <Button
                        onClick={() => handleEditQuestionOpen(itemQuestion.id)}
                        sx={{
                          bgcolor: "#dfd5d5",
                          marginX: "10px",
                          borderRadius: 2,
                          textAlign: "center",
                          color: "#6b6b6b",
                          textTransform: "unset",
                          fontSize: "0.7rem",
                          fontWeight: "700",

                          lineHeight: "30px",
                          paddingX: "25px",
                          "&.MuiButtonBase-root:hover": {
                            bgcolor: "#461a42",
                            color: "#ffffff",
                          },
                        }}
                        startIcon={<EditIcon />}
                      >
                        Edit
                      </Button>
                      <Button
                        onClick={() => handleDeleteQuestion(itemQuestion)}
                        sx={{
                          bgcolor: "#d61515",
                          marginX: "10px",
                          borderRadius: 2,
                          textAlign: "center",
                          color: "#ffffff",
                          textTransform: "unset",
                          fontSize: "0.7rem",
                          fontWeight: "700",

                          lineHeight: "30px",
                          paddingX: "25px",
                          "&.MuiButtonBase-root:hover": {
                            bgcolor: "#461a42",
                            color: "#ffffff",
                          },
                        }}
                        startIcon={<DeleteIcon />}
                      >
                        Remove
                      </Button>
                    </Stack>
                  </Stack>

                  <Box p={2}>
                    <Card sx={{ display: "flex", marginBottom: "20px" }}>
                      <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image="/assets/images/quiz-image-.png"
                        alt="Live from space album cover"
                      />
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <CardContent sx={{ flex: "1 0 auto" }}>
                          <Typography component="div" variant="h6">
                            {itemQuestion.title}
                          </Typography>
                        </CardContent>
                      </Box>
                    </Card>

                    <Box position={"relative"}>
                      <Box
                        position={"relative"}
                        height={"1px"}
                        bgcolor={"#f2f2f2"}
                      >
                        <Typography
                          sx={{
                            fontSize: "10px",
                            color: "#6d6d6d",
                            bgcolor: "#ffffff",
                            transform: "translate(25px, -89%)",
                            display: "inline-block",
                            paddingX: "5px",
                          }}
                        >
                          Answers
                        </Typography>
                      </Box>

                      <Stack
                        direction="row"
                        alignItems="center"
                        flexWrap={"wrap"}
                        mt={"20px"}
                        mx={-1}
                      >
                        {itemQuestion.answers.map((awsItem) => {
                          return (
                            <Box width={"50%"} key={awsItem.id}>
                              <Box
                                m={1}
                                display={"flex"}
                                bgcolor="#e5e5e5"
                                borderRadius={"30px"}
                                p={"10px 20px"}
                              >
                                <Typography
                                  fontWeight={"700"}
                                  fontSize={"18px"}
                                  mr={1}
                                >
                                  A.
                                </Typography>
                                <Typography>{awsItem.title}</Typography>
                              </Box>
                            </Box>
                          );
                        })}
                      </Stack>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Container>
      <EditQuestionDialog
        idQuestion={questionID}
        idQuizz={quizData.id}
        open={openEditQuestion}
        onClose={handleCloseEditQuestion}
      />
    </Dashboard>
  );
};

export default QuizzesEdit;

export async function getStaticProps() {
  const quizz = await {
    id: "1",
    title: "Quizz 1",
    description: "Description Quizz 1",
    category: "1",
    user: "1",
    questions: [
      {
        id: "1",
        title: "title 1",
        answers: [
          {
            title: "Answer 1",
            id: "1",
          },
          {
            title: "Answer 2",
            id: "2",
          },
          {
            title: "Anser 3",
            id: "3",
          },
          {
            title: "question 4",
            id: "4",
          },
        ],
        correctAnswer: 2,
      },
      {
        id: "2",
        title: "title 2",
        answers: [
          {
            title: "Answer 1",
            id: "1",
          },
          {
            title: "Answer 2",
            id: "2",
          },
          {
            title: "Anser 3",
            id: "3",
          },
          {
            title: "question 4",
            id: "4",
          },
        ],
        correctAnswer: 2,
      },
      {
        id: "3",
        title: "title 3",
        answers: [
          {
            title: "Answer 1",
            id: "1",
          },
          {
            title: "Answer 2",
            id: "2",
          },
          {
            title: "Anser 3",
            id: "3",
          },
          {
            title: "question 4",
            id: "4",
          },
        ],
        correctAnswer: 2,
      },
      {
        id: "4",
        title: "title 4",
        answers: [
          {
            title: "Answer 1",
            id: "1",
          },
          {
            title: "Answer 2",
            id: "2",
          },
          {
            title: "Anser 3",
            id: "3",
          },
          {
            title: "question 4",
            id: "4",
          },
        ],
        correctAnswer: 2,
      },
      {
        id: "5",
        title: "title 5",
        answers: [
          {
            title: "Answer 1",
            id: "1",
          },
          {
            title: "Answer 2",
            id: "2",
          },
          {
            title: "Anser 3",
            id: "3",
          },
          {
            title: "question 4",
            id: "4",
          },
        ],
        correctAnswer: 2,
      },
    ],
  };

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      quizz,
    },
  };
}
