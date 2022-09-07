import * as React from "react";
import Dashboard from "@components/Dashboard";
import type { NextPage } from "next";
import { GridCellParams } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import EditIcon from "@mui/icons-material/Edit";
import { useRouter } from "next/router";
import Container from "@mui/material/Container";
import {
  Avatar,
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

const QuizzesDetail: NextPage = () => {
  const router = useRouter();
  const [openDeleteQuizz, setOpenDeleteQuizz] = React.useState(false);
  const [idValue, setIdValue] = React.useState("");
  const handleClose = (value: string) => {
    setOpenDeleteQuizz(false);
  };
  function currentlySelected(params: GridCellParams) {
    const value = params.colDef.field;

    if (!(value === "edit" || value === "delete" || value === "addQuestion")) {
      return;
    }
    if (value == "edit") {
      router.push({
        pathname: "/dashboard/quizzes/[pid]",
        query: { pid: params.row.id },
      });
    }
    if (value === "delete") {
      setIdValue(params.row.id);
      setOpenDeleteQuizz(true);
    }
  }
  console.log(openDeleteQuizz);
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
                <Typography variant="p">Category ID</Typography>
                <Typography component={"h4"} variant="h4" color={"#222222"}>
                  Quiz title
                </Typography>
                <Box fontSize={"10px"}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <SmartDisplayIcon /> 0 play
                  </Box>
                </Box>
                <Typography
                  sx={{ fontSize: "12px", color: "#6d6d6d", marginTop: "10px" }}
                >
                  Description of Quizz Description of Quizz Description of Quizz
                  Description of Quizz Description of Quizz Description of Quizz
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
                <EditIcon />
                <Typography sx={{ marginLeft: "10px", fontSize: "12px" }}>
                  Edit
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
      <Container sx={{ mt: "30px" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <ListIcon />
          <Typography>20 Questions</Typography>
        </Box>
        <Box>
          {/* List */}
          <Box>
            {/* Item */}
            <Box
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
                p={2}
              >
                <CheckBoxIcon />
                <Typography>Question 1</Typography>
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
                        Question Title
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
                    <Box width={"50%"}>
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
                        <Typography>Answer 1</Typography>
                      </Box>
                    </Box>
                    <Box width={"50%"}>
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
                        <Typography>Answer 1</Typography>
                      </Box>
                    </Box>
                    <Box width={"50%"}>
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
                        <Typography>Answer 1</Typography>
                      </Box>
                    </Box>
                    <Box width={"50%"}>
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
                        <Typography>Answer 1</Typography>
                      </Box>
                    </Box>
                  </Stack>
                </Box>
              </Box>
            </Box>
            {/* Item */}
            <Box
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
                p={2}
              >
                <CheckBoxIcon />
                <Typography>Question 1</Typography>
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
                        Question Title
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
                    <Box width={"50%"}>
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
                        <Typography>Answer 1</Typography>
                      </Box>
                    </Box>
                    <Box width={"50%"}>
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
                        <Typography>Answer 1</Typography>
                      </Box>
                    </Box>
                    <Box width={"50%"}>
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
                        <Typography>Answer 1</Typography>
                      </Box>
                    </Box>
                    <Box width={"50%"}>
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
                        <Typography>Answer 1</Typography>
                      </Box>
                    </Box>
                  </Stack>
                </Box>
              </Box>
            </Box>
            {/* Item */}
            <Box
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
                p={2}
              >
                <CheckBoxIcon />
                <Typography>Question 1</Typography>
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
                        Question Title
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
                    <Box width={"50%"}>
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
                        <Typography>Answer 1</Typography>
                      </Box>
                    </Box>
                    <Box width={"50%"}>
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
                        <Typography>Answer 1</Typography>
                      </Box>
                    </Box>
                    <Box width={"50%"}>
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
                        <Typography>Answer 1</Typography>
                      </Box>
                    </Box>
                    <Box width={"50%"}>
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
                        <Typography>Answer 1</Typography>
                      </Box>
                    </Box>
                  </Stack>
                </Box>
              </Box>
            </Box>
            {/* Item */}
            <Box
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
                p={2}
              >
                <CheckBoxIcon />
                <Typography>Question 1</Typography>
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
                        Question Title
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
                    <Box width={"50%"}>
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
                        <Typography>Answer 1</Typography>
                      </Box>
                    </Box>
                    <Box width={"50%"}>
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
                        <Typography>Answer 1</Typography>
                      </Box>
                    </Box>
                    <Box width={"50%"}>
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
                        <Typography>Answer 1</Typography>
                      </Box>
                    </Box>
                    <Box width={"50%"}>
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
                        <Typography>Answer 1</Typography>
                      </Box>
                    </Box>
                  </Stack>
                </Box>
              </Box>
            </Box>
            {/* Item */}
            <Box
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
                p={2}
              >
                <CheckBoxIcon />
                <Typography>Question 1</Typography>
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
                        Question Title
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
                    <Box width={"50%"}>
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
                        <Typography>Answer 1</Typography>
                      </Box>
                    </Box>
                    <Box width={"50%"}>
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
                        <Typography>Answer 1</Typography>
                      </Box>
                    </Box>
                    <Box width={"50%"}>
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
                        <Typography>Answer 1</Typography>
                      </Box>
                    </Box>
                    <Box width={"50%"}>
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
                        <Typography>Answer 1</Typography>
                      </Box>
                    </Box>
                  </Stack>
                </Box>
              </Box>
            </Box>
            {/* Item */}
            <Box
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
                p={2}
              >
                <CheckBoxIcon />
                <Typography>Question 1</Typography>
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
                        Question Title
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
                    <Box width={"50%"}>
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
                        <Typography>Answer 1</Typography>
                      </Box>
                    </Box>
                    <Box width={"50%"}>
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
                        <Typography>Answer 1</Typography>
                      </Box>
                    </Box>
                    <Box width={"50%"}>
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
                        <Typography>Answer 1</Typography>
                      </Box>
                    </Box>
                    <Box width={"50%"}>
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
                        <Typography>Answer 1</Typography>
                      </Box>
                    </Box>
                  </Stack>
                </Box>
              </Box>
            </Box>
            {/* Item */}
            <Box
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
                p={2}
              >
                <CheckBoxIcon />
                <Typography>Question 1</Typography>
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
                        Question Title
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
                    <Box width={"50%"}>
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
                        <Typography>Answer 1</Typography>
                      </Box>
                    </Box>
                    <Box width={"50%"}>
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
                        <Typography>Answer 1</Typography>
                      </Box>
                    </Box>
                    <Box width={"50%"}>
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
                        <Typography>Answer 1</Typography>
                      </Box>
                    </Box>
                    <Box width={"50%"}>
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
                        <Typography>Answer 1</Typography>
                      </Box>
                    </Box>
                  </Stack>
                </Box>
              </Box>
            </Box>
            {/* Item */}
            <Box
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
                p={2}
              >
                <CheckBoxIcon />
                <Typography>Question 1</Typography>
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
                        Question Title
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
                    <Box width={"50%"}>
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
                        <Typography>Answer 1</Typography>
                      </Box>
                    </Box>
                    <Box width={"50%"}>
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
                        <Typography>Answer 1</Typography>
                      </Box>
                    </Box>
                    <Box width={"50%"}>
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
                        <Typography>Answer 1</Typography>
                      </Box>
                    </Box>
                    <Box width={"50%"}>
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
                        <Typography>Answer 1</Typography>
                      </Box>
                    </Box>
                  </Stack>
                </Box>
              </Box>
            </Box>
            {/* Item */}
            <Box
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
                p={2}
              >
                <CheckBoxIcon />
                <Typography>Question 1</Typography>
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
                        Question Title
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
                    <Box width={"50%"}>
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
                        <Typography>Answer 1</Typography>
                      </Box>
                    </Box>
                    <Box width={"50%"}>
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
                        <Typography>Answer 1</Typography>
                      </Box>
                    </Box>
                    <Box width={"50%"}>
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
                        <Typography>Answer 1</Typography>
                      </Box>
                    </Box>
                    <Box width={"50%"}>
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
                        <Typography>Answer 1</Typography>
                      </Box>
                    </Box>
                  </Stack>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Dashboard>
  );
};

export default QuizzesDetail;
