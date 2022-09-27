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
export interface EditQuestionDialogProps {
  open: boolean;
  idQuizz: string;
  idQuestion: string;
  onClose: (value: string) => void;
}

function AnswerItem({
  item,
  handleChangeText,
  handleDeleteItem,
  handleCorrectAnswer,
}: {
  item: ItemQuestion;
  handleChangeText: any;
  handleDeleteItem: any;
  handleCorrectAnswer: any;
}) {
  return (
    <Box gridColumn="span 3">
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
            onClick={() => handleDeleteItem(item.key)}
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
            onClick={() => handleCorrectAnswer(item.key)}
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
          value={item.content}
          onChange={(e) => handleChangeText(item.key, e.target.value)}
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

interface ItemQuestion {
  key: string;
  content: string;
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

export function EditQuestionDialog(props: EditQuestionDialogProps) {
  const { onClose, idQuizz, idQuestion, open } = props;
  const [question, setQuestion] = useState("Question Title");
  const [correctAnswer, setCorrectAnswer] = useState("1");
  const [answerList, setAnswerList] = useState<ItemQuestion[]>([
    {
      key: "clLwCg",
      content: "Answer 1",
    },
    {
      key: "Fpmlef",
      content: "Answer 2",
    },
    {
      key: "swBOY5",
      content: "Answer 3",
    },
    {
      key: "ZGhdJY",
      content: "Answer 4",
    },
  ]);

  const handleClose = () => {
    onClose(idQuizz);
    setQuestion("");
    setCorrectAnswer("");
    setAnswerList([
      {
        key: "clLwCg",
        content: "Answer 1",
      },
      {
        key: "Fpmlef",
        content: "Answer 2",
      },
      {
        key: "swBOY5",
        content: "Answer 3",
      },
      {
        key: "ZGhdJY",
        content: "Answer 4",
      },
    ]);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = {
      ID: "",
      name: question,
      answer: answerList,
      correct: correctAnswer,
    };
  };
  const handleAddMoreAnswer = () => {
    const data: ItemQuestion = {
      key: makeid(6),
      content: "",
    };

    setAnswerList((prevData) => [...prevData, data]);
  };

  const handleChangeText = (key: string, val: string) => {
    const questionItem: ItemQuestion = {
      key,
      content: val,
    };

    const newData = answerList.map((item) => {
      if (item.key == questionItem.key) {
        item = questionItem;
      }

      return item;
    });

    setAnswerList(newData);
  };

  const handleDeleteItem = (key: string) => {
    const newData = answerList.filter((item) => item.key !== key);
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
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
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
