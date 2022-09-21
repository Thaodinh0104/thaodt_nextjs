import FrontLayout from "@components/Front/FrontLayout";
import type { NextPage } from "next";
import NextLink from "next/link";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";
import Grid from "@mui/material/Unstable_Grid2";
import { category } from "_mocks_/category";
import { quizzMock } from "_mocks_/quizz";
import { Card, CardActions, CardContent } from "@mui/material";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
const Home: NextPage = () => {
  const [quizz, setQuizz] = useState(quizzMock);
  const getItemByCategory = (catID: string) => {
    const newData = quizzMock.filter((item) => item.category !== catID);
    setQuizz(newData);
  };
  return (
    <FrontLayout>
      <Box sx={{ position: "relative" }}>
        <Container sx={{ py: 5, position: "relative" }} maxWidth="lg">
          {/* Topic */}
          <Box px="80px" py="40px">
            <Typography variant="h2" textAlign={"center"}>
              Choose a topic for start your challenge
            </Typography>
            <Grid container spacing={2} pt="50px">
              <Grid xs={5}>
                <CardMedia
                  component="img"
                  image="/assets/images/topic.jpg"
                  alt="random"
                />
              </Grid>
              <Grid xs={7}>
                {category.map((item) => {
                  return (
                    <Button
                      key={item.id}
                      onClick={() => getItemByCategory(item.id)}
                      sx={{
                        margin: "16px 12px",
                        padding: "12px 24px",
                        border: "2px solid #fff",
                        borderRadius: "8px",
                        boxShadow:
                          "0 1px 5px 0 rgb(0 0 0 / 12%), 0 3px 1px -2px rgb(0 0 0 / 6%), 0 2px 2px 0 rgb(0 0 0 / 8%)",
                        background: "#fcfcfc",
                        color: "#292A3A",
                        fontSize: "16px",
                        fontWeight: "bold",
                        textTransform: "unset",
                      }}
                    >
                      {item.name}
                    </Button>
                  );
                })}
              </Grid>
            </Grid>
          </Box>
          {/* End Topic */}
          {/* List Quizz */}
          <Box>
            <Grid container spacing={2} pt="50px">
              {quizz.map((item) => {
                return (
                  <Grid key={item.id} xs={4}>
                    <Card>
                      <CardMedia
                        component="img"
                        image="/assets/images/quizz-image.jpg"
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.description}
                        </Typography>
                      </CardContent>
                      <CardActions
                        sx={{ justifyContent: "space-between", p: "16px" }}
                      >
                        <Typography>
                          {item.questions.length} Questions
                        </Typography>
                        <Button
                          size="small"
                          sx={{
                            boxShadow:
                              "0 4px 8px rgb(0 0 0 / 10%), 0 4px 0 #381535",
                            bgcolor: "#461a42",
                            borderRadius: 2,
                            textAlign: "center",
                            color: "#ffffff",
                            textTransform: "unset",
                            fontSize: "1rem",
                            fontWeight: "700",
                            lineHeight: "30px",
                            paddingX: "20px",
                            "&.MuiButtonBase-root:hover": {
                              bgcolor: "#461a42",
                              boxShadow: "none",
                            },
                            "&.MuiSvgIcon-root": {},
                          }}
                          startIcon={<PlayCircleFilledIcon fontSize="large" />}
                        >
                          Play
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
          {/* End List Quizz */}
        </Container>
      </Box>
    </FrontLayout>
  );
};

export default Home;
