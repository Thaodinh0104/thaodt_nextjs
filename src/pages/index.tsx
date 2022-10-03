import FrontLayout from "@components/Front/FrontLayout";
import type { NextPage } from "next";
import NextLink from "next/link";
import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, selectAllCategory } from "redux/category";
import { store } from "redux/store";
import { RootState } from "redux/store";
import categories from "./api/categories";

const Home: NextPage = () => {
  const posts = useSelector(selectAllCategory);
  console.log(posts);
  const categoriesStatus = useSelector((state) => state.categories.status);
  useEffect(() => {
    store.dispatch(fetchCategories());
  }, [categoriesStatus, store.dispatch]);
  return (
    <FrontLayout>
      <Box sx={{ position: "relative" }}>
        <Container sx={{ py: 5, position: "relative" }} maxWidth="lg">
          <Box>
            <Typography
              component="h2"
              variant="h2"
              sx={{ color: "#461a42", maxWidth: "400px" }}
            >
              The 100% <br /> engagement <br />
              platform
            </Typography>
            <Typography sx={{ maxWidth: "400px", mt: "20px" }}>
              Find and create free gamified quizzes and <br />
              interactive lessons to engage any learner.
            </Typography>
            <Box sx={{ mt: "20px" }}>
              <NextLink href={"/account/register"}>
                <Button
                  size="large"
                  sx={{
                    boxShadow: "0 4px 8px rgb(0 0 0 / 10%), 0 4px 0 #381535",
                    bgcolor: "#461a42",
                    borderRadius: 2,
                    textAlign: "center",
                    color: "#ffffff",
                    textTransform: "unset",
                    fontSize: "1rem",
                    fontWeight: "700",
                    lineHeight: "40px",
                    paddingX: "30px",
                    "&.MuiButtonBase-root:hover": {
                      bgcolor: "#461a42",
                      boxShadow: "none",
                    },
                  }}
                  endIcon={<ArrowForwardIosIcon fontSize="small" />}
                >
                  Sign up for free
                </Button>
              </NextLink>
              <Typography sx={{ maxWidth: "400px", mt: "20px" }}>
                Already have an account? Log in
              </Typography>
            </Box>
            <CardMedia
              component="img"
              sx={{
                // 16:9
                height: "34.5rem",
                width: "50rem",
                position: "absolute",
                right: "0",
                bottom: "0",
              }}
              image="/assets/images/1-HERO-Digital_Collage.png"
              alt="random"
            />
          </Box>
        </Container>
      </Box>
    </FrontLayout>
  );
};

export default Home;
