import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import { useEffect, useRef, useState } from "react";
import DialogActions from "@mui/material/DialogActions";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import React from "react";
export interface AddQuestionDialogProps {
  open: boolean;
  idAdd: string;
  onClose: (value: string) => void;
  dataSubmit: any;
}

function AnswerItem({
  item,
  handleChangeText,
  handleDeleteItem,
  handleCorrectAnswer,
}: {
  item: Answer;
  handleChangeText: any;
  handleDeleteItem: any;
  handleCorrectAnswer: any;
}) {
  const myRef = useRef();

  return (
    <Box gridColumn="span 3" ref={myRef}>
      <FormGroup
        sx={{
          display: "block",
          bgcolor: "#2d70ae",
          borderRadius: "5px",
          p: 1,
        }}
      >
        <Box display={"flex"} justifyContent={"space-between"}>
          <IconButton
            aria-label="delete"
            onClick={() => handleDeleteItem(item.id)}
            sx={{
              color: "#ffffff",
              borderRadius: "5px",
              width: "40px",
              height: "40px",
              p: "5px",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
            }}
          >
            <DeleteIcon />
          </IconButton>
          <IconButton
            aria-label="corrected"
            onClick={() => handleCorrectAnswer(item.id)}
            sx={{
              color: "#ffffff",
              borderRadius: "5px",
              width: "40px",
              height: "40px",
              p: "5px",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
            }}
          >
            <CheckCircleIcon />
          </IconButton>
        </Box>
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          name="name"
          value={item.title}
          onChange={(e) => handleChangeText(item.id, e.target.value)}
          placeholder="Type an answer option here..."
          sx={{
            "& input": {
              color: "#ffffff",
              fontWeight: "700",
              height: "20vh",
              fontSize: "1.3rem",
              textAlign: "center",
              borderRadius: "20px",
              "&::placeholder": {
                color: "#ffffff",
              },
            },
          }}
          autoFocus
        />
      </FormGroup>
    </Box>
  );
}

interface Answer {
  title: string;
  id: string;
  question_id?: string;
  description?: string;
}

function makeid(length: number) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function AddQuestionDialog(props: AddQuestionDialogProps) {
  const { onClose, idAdd, open, dataSubmit } = props;
  const [questionTitle, setQuestionTitle] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [answerList, setAnswerList] = useState<Answer[]>([
    {
      id: makeid(6),
      title: "",
    },
    {
      id: makeid(6),
      title: "",
    },
    {
      id: makeid(6),
      title: "",
    },
    {
      id: makeid(6),
      title: "",
    },
  ]);

  const handleClose = () => {
    onClose(idAdd);
    setQuestionTitle("");
    setCorrectAnswer("");
    setAnswerList([
      {
        id: makeid(6),
        title: "",
      },
      {
        id: makeid(6),
        title: "",
      },
      {
        id: makeid(6),
        title: "",
      },
      {
        id: makeid(6),
        title: "",
      },
    ]);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newData = {
      id: makeid(6),
      title: questionTitle,
      answers: answerList,
      correct_answer: correctAnswer,
    };
    dataSubmit(newData);
    onClose(newData.id);
    setQuestionTitle("");
    setCorrectAnswer("");
    setAnswerList([
      {
        id: makeid(6),
        title: "",
      },
      {
        id: makeid(6),
        title: "",
      },
      {
        id: makeid(6),
        title: "",
      },
      {
        id: makeid(6),
        title: "",
      },
    ]);
  };
  // Handle Add more Answer
  const handleAddMoreAnswer = () => {
    if (answerList.length >= 4) return false;
    const data: Answer = {
      id: makeid(6),
      title: "",
    };
    setAnswerList((prevData) => [...prevData, data]);
  };
  // Handle Change text
  const handleChangeText = (id: string, val: string) => {
    const newData = answerList?.map((item) => {
      if (item.id == id) {
        item = { ...item, title: val };
      }
      return item;
    });
    setAnswerList(newData);
  };

  const handleDeleteItem = (key: string) => {
    console.log(key);
    console.log(answerList);
    const newData = answerList.filter((item) => item.id !== key);
    setAnswerList(newData);
  };
  const handleCorrectAnswer = (key: string) => {
    setCorrectAnswer(key);
  };
  return (
    <Dialog
      onClose={handleClose}
      open={open}
      sx={{
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            width: "100%",
            maxWidth: "90vw",
            bgcolor: "transparent",
            color: "#fffffff",
            boxShadow: "unset",
          },
        },
      }}
    >
      <Box sx={{ margin: "50px", bgcolor: "#461a42" }}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1, padding: "20px", position: "relative" }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            name="name"
            value={questionTitle}
            onChange={(e) => setQuestionTitle(e.target.value)}
            placeholder="Type your question here"
            sx={{
              "& input": {
                color: "#ffffff",
                fontWeight: "700",
                height: "30vh",
                fontSize: "1.3rem",
                textAlign: "center",
                borderRadius: "20px",
                border: "2px solid #ffffff",
                "&::placeholder": {
                  color: "#ffffff",
                },
              },
            }}
            autoFocus
          />
          <Box sx={{ position: "relative" }}>
            <IconButton
              aria-label="delete"
              onClick={handleAddMoreAnswer}
              sx={{
                color: "#222222",
                borderRadius: "100%",
                width: "40px",
                height: "40px",
                p: "5px",
                backgroundColor: "#ffffff",
                position: "absolute",
                right: "-70px",
                top: "50%",
                zIndex: "10",
                transform: "translateY(50%)",
              }}
            >
              <AddIcon />
            </IconButton>
            <Box
              display="grid"
              id="answer-list"
              gridTemplateColumns="repeat(12, 1fr)"
              gap={2}
            >
              {answerList.map((item, index) => {
                return (
                  <AnswerItem
                    key={index}
                    item={item}
                    handleChangeText={handleChangeText}
                    handleDeleteItem={handleDeleteItem}
                    handleCorrectAnswer={handleCorrectAnswer}
                  />
                );
              })}
            </Box>
          </Box>

          <DialogActions
            sx={{ display: "flex", width: "100%", paddingX: "20px" }}
          >
            <Button onClick={handleClose} sx={{ mt: 3, mb: 2, width: "50%" }}>
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2, width: "50%" }}
            >
              Next
            </Button>
          </DialogActions>
        </Box>
      </Box>
    </Dialog>
  );
}
