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
import { Link, List, ListItem, ListItemText } from "@mui/material";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { array } from "yup";
import { positions } from "@mui/system";
import { title } from "process";
import clsx from "clsx";
import useAppContext from "context/AppContext";
import NextLink from "next/link";
interface DataAnswer {
  id: string;
  chosieAnswer: string;
}
export type OutResult = {
  output: DataAnswer;
  onSubmitData: (data: DataAnswer) => any;
};
export default function Result() {
  const { output, onSubmitData } = useAppContext() as OutResult;
  console.log(output);
  return (
    <FrontLayout>
      <Box sx={{ position: "relative" }}>
        <Container
          sx={{ py: 5, position: "relative", textAlign: "center" }}
          maxWidth="lg"
        >
          <Typography variant="h2" color={"green"}>
            Congratulations! Your score is{" "}
          </Typography>
          <Typography variant="h2" fontSize={"100px"}>
            {output}
          </Typography>
          <Link component={NextLink} href="/quizz">
            <Typography
              sx={{
                bgcolor: "#461a42",
                textDecoration: "none",
                fontSize: "18px",
                color: "#ffffff",
                display: "inline-block",
                px: "30px",
                py: "10px",
                cursor: "pointer",
                fontWeight: "700",
                mt: "30px",
              }}
            >
              Tiếp tục bộ câu hỏi khác
            </Typography>
          </Link>
        </Container>
      </Box>
    </FrontLayout>
  );
}
