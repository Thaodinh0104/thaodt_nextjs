import * as React from "react";
import Dashboard from "@components/Dashboard";
import type { NextPage } from "next";
import Box from "@mui/material/Box";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
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
import { useEffect, useState } from "react";

interface DataDelete {
  id: string;
  title: string;
}
interface Answer {
  title: string;
  id: string;
  question_id: string;
  description: string;
}
interface Question {
  title: string;
  correct_answer: string;
  id: string;
  answers: Answer;
}
interface Quizz {
  category: string;
  description: string;
  id: string;
  questions: [];
  title: string;
  user: string;
}
function QuestionItem({
  data,
  handleDeleteQuestion,
  handleEditQuestionOpen,
}: {
  data: Question;
  handleDeleteQuestion: any;
  handleEditQuestionOpen: any;
}) {
  const [dataAnswers, setDataAnswers] = useState<Answer[]>([]);
  return (
    <Box
      key={data.id}
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
          <Typography>{data.title}</Typography>
        </Stack>
        <Stack direction="row" alignItems={"center"}>
          <Button
            onClick={() => handleEditQuestionOpen(data)}
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
            onClick={() => handleDeleteQuestion(data)}
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
                {data.title}
              </Typography>
            </CardContent>
          </Box>
        </Card>

        <Box position={"relative"}>
          <Box position={"relative"} height={"1px"} bgcolor={"#f2f2f2"}>
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
            {data.answers?.map((awsItem: Answer) => {
              return (
                <Box width={"50%"} key={awsItem.id}>
                  <Box
                    m={1}
                    display={"flex"}
                    bgcolor="#e5e5e5"
                    borderRadius={"30px"}
                    p={"10px 20px"}
                  >
                    <Typography fontWeight={"700"} fontSize={"18px"} mr={1}>
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
}

const Quizzes: NextPage = ({ quizz }) => {
  const confirm = useConfirm();
  const [openEditInfo, setOpenEditInfo] = React.useState(false);
  const [openAddQuestion, setOpenAddQuestion] = React.useState(false);
  const [openEditQuestion, setOpenEditQuestion] = React.useState(false);
  const [editQuestionData, setEditQuestionData] = React.useState("");
  const [quizData, setQuizData] = React.useState(quizz);
  const [dataQuestions, setDataQuestions] = useState<Question[]>(
    quizz.questions
  );
  const handleEditInfoOpen = () => {
    setOpenEditInfo(true);
  };
  const handleEditQuestionOpen = (data) => {
    setOpenEditQuestion(true);
    setEditQuestionData(data);
  };
  const handleCloseEditInfo = (data) => {
    setOpenEditInfo(false);
  };
  const handleCloseEditQuestion = (data) => {
    setOpenEditQuestion(false);
    setEditQuestionData("");
  };
  const handleCloseAddQuestion = (data) => {
    setOpenAddQuestion(false);
    setEditQuestionData("");
  };
  const dataSubmitAdd = (data) => {
    const newData = dataQuestions;
    newData.push(data);
    setDataQuestions(newData);
  };
  const dataSubmitEdit = (data) => {
    const newData = dataQuestions.map((item) => {
      if (item.id == data.id) {
        item = {
          ...item,
          title: data.title,
          answers: data.answers,
          correct_answer: data.correct_answer,
        };
      }

      return item;
    });
    setDataQuestions(newData);
  };
  const handleDeleteQuestion = (item: DataDelete) => {
    confirm({ description: `Are you sure to delete question ${item.title}.` })
      .then(() => {
        const newData = dataQuestions.filter((e) => item.id !== e.id);
        setDataQuestions(newData);
      })
      .catch(() => {
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
        data={quizData}
      />
      <AddQuestionDialog
        idAdd={quizData.id}
        open={openAddQuestion}
        onClose={handleCloseAddQuestion}
        dataSubmit={dataSubmitAdd}
      />

      <Container sx={{ mt: "30px" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <ListIcon />
          <Typography>{dataQuestions.length} Questions</Typography>
        </Box>
        <Box>
          {/* List */}
          <Box>
            {/* Item */}
            {dataQuestions.map((itemQuestion: Question) => {
              return (
                <QuestionItem
                  key={itemQuestion.id}
                  data={itemQuestion}
                  handleDeleteQuestion={handleDeleteQuestion}
                  handleEditQuestionOpen={handleEditQuestionOpen}
                />
              );
            })}
          </Box>
        </Box>
      </Container>
      <EditQuestionDialog
        data={editQuestionData}
        open={openEditQuestion}
        onClose={handleCloseEditQuestion}
        dataSubmit={dataSubmitEdit}
      />
    </Dashboard>
  );
};

export default Quizzes;

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/quizzes");
  const quizz = await res.json();
  const paths = quizz.map((item: Quizz) => ({
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
  const res = await fetch(`http://localhost:3000/api/quizzes/${params.id}`);
  const quizz = await res.json();
  return {
    // Passed to the page component as props
    props: { quizz },
  };
}
