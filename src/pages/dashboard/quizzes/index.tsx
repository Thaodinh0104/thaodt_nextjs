import * as React from "react";
import Dashboard from "@components/Dashboard";
import type { NextPage } from "next";
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link, { LinkProps } from "next/link";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Title", width: 130 },
  { field: "description", headerName: "Description", width: 130 },
  {
    field: "totalQuestions",
    headerName: "Questions",
    type: "number",
    width: 90,
  },
  {
    field: "category",
    headerName: "Category",
    width: 90,
    renderCell: (params: GridRenderCellParams<LinkProps>) => (
      <Link href={`/dashboard/${params.name}`}>
        <a>{params.name}</a>
      </Link>
    ),
  },
];

const rows = [
  {
    id: 1,
    name: "Match",
    description: "Jon",
    category: { id: "1", name: "Category1" },
    totalQuestions: 35,
  },
  {
    id: 2,
    name: "Match",
    description: "Jon",
    category: { id: "1", name: "Category1" },
    totalQuestions: 35,
  },
  {
    id: 3,
    name: "Match",
    description: "Jon",
    category: { id: "1", name: "Category1" },
    totalQuestions: 35,
  },
  {
    id: 4,
    name: "Match",
    description: "Jon",
    category: { id: "1", name: "Category1" },
    totalQuestions: 35,
  },
  {
    id: 5,
    name: "Match",
    description: "Jon",
    category: { id: "1", name: "Category1" },
    totalQuestions: 35,
  },
  {
    id: 6,
    name: "Match",
    description: "Jon",
    category: { id: "1", name: "Category1" },
    totalQuestions: 35,
  },
  {
    id: 7,
    name: "Match",
    description: "Jon",
    category: { id: "1", name: "Category1" },
    totalQuestions: 35,
  },
  {
    id: 8,
    name: "Match",
    description: "Jon",
    category: { id: "1", name: "Category1" },
    totalQuestions: 35,
  },
  {
    id: 9,
    name: "Match",
    description: "Jon",
    category: { id: "1", name: "Category1" },
    totalQuestions: 35,
  },
  {
    id: 0,
    name: "Match",
    description: "Jon",
    category: { id: "1", name: "Category1" },
    totalQuestions: 35,
  },
  {
    id: 11,
    name: "Match",
    description: "Jon",
    category: { id: "1", name: "Category1" },
    totalQuestions: 35,
  },
  {
    id: 12,
    name: "Match",
    description: "Jon",
    category: { id: "1", name: "Category1" },
    totalQuestions: 35,
  },
  {
    id: 13,
    name: "Match",
    description: "Jon",
    category: { id: "1", name: "Category1" },
    totalQuestions: 35,
  },
  {
    id: 14,
    name: "Match",
    description: "Jon",
    category: { id: "1", name: "Category1" },
    totalQuestions: 35,
  },
  {
    id: 15,
    name: "Match",
    description: "Jon",
    category: { id: "1", name: "Category1" },
    totalQuestions: 35,
  },
];
const QuizzesList: NextPage = () => {
  return (
    <Dashboard>
      <Box sx={{ height: "50vh" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </Box>
    </Dashboard>
  );
};

export default QuizzesList;
