import * as React from "react";
import Dashboard from "@components/Dashboard";
import type { NextPage } from "next";
import { DataGrid, GridColDef, GridCellParams } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Link, { LinkProps } from "next/link";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/router";
import { DeleteQuizz } from "@components/Dashboard/deleteQuiz";
import { rows } from "_mocks_/questions";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 50 },
  { field: "name", headerName: "Title" },
  { field: "description", headerName: "Description" },
  {
    field: "totalQuestions",
    headerName: "Questions",
    type: "number",
  },
  {
    field: "category",
    headerName: "Category",

    renderCell: ({ value }) => (
      <Link href={`/dashboard/${value.id}`}>
        <a>{value.title}</a>
      </Link>
    ),
  },
  {
    field: "edit",
    headerName: "Edit",
    sortable: false,
    renderCell: () => {
      return (
        <IconButton color="primary">
          <EditIcon />
        </IconButton>
      );
    },
  },
  {
    field: "addQuestion",
    headerName: "Add Question",
    sortable: false,
    renderCell: () => {
      return (
        <IconButton color="secondary">
          <AddIcon />
        </IconButton>
      );
    },
  },
  {
    field: "delete",
    headerName: "Delete",
    sortable: false,
    renderCell: () => {
      return (
        <IconButton color="error">
          <DeleteIcon />
        </IconButton>
      );
    },
  },
];

const QuizzesList: NextPage = () => {
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
      <Box sx={{ height: "50vh" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          onCellClick={currentlySelected}
        />
        <DeleteQuizz
          id={idValue}
          open={openDeleteQuizz}
          onClose={handleClose}
        />
      </Box>
    </Dashboard>
  );
};

export default QuizzesList;
