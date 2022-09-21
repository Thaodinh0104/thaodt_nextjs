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
import { quizzMock } from "_mocks_/quizz";
import { useConfirm } from "material-ui-confirm";
import { useState } from "react";
const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 50 },
  { field: "name", headerName: "Title", width: 200 },
  { field: "description", headerName: "Description", width: 200 },
  {
    field: "totalQuestions",
    headerName: "Questions",
    type: "number",
  },
  {
    field: "category",
    headerName: "Category",
    width: 150,
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
    width: 150,
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
  const confirm = useConfirm();
  const router = useRouter();
  const [quizz, setQuizz] = useState(quizzMock);

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
      confirm({
        description: `Are you sure to delete quiz ${params.row.name}.`,
      })
        .then(() => {
          const newData = quizz.filter((e) => params.row.id !== e.id);
          setQuizz(newData);
          console.log(newData);
        })
        .catch(() => {
          console.log("Deletion cancelled.");
        });
    }
  }
  return (
    <Dashboard>
      <Box
        sx={{
          height: "500px",
          mt: "50px",
          "& .MuiDataGrid-columnHeaderTitle": {
            fontWeight: "700",
            textAlign: "Center",
            color: "#ffffff",
          },
          "& .MuiDataGrid-columnHeaders": {
            bgcolor: "#8d5a88",
          },
        }}
      >
        <DataGrid
          sx={{ textAlign: "center" }}
          rows={quizz}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          onCellClick={currentlySelected}
        />
      </Box>
    </Dashboard>
  );
};

export default QuizzesList;
