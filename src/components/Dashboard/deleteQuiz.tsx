import Avatar from "@mui/material/Avatar";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import { useState } from "react";
import DialogActions from "@mui/material/DialogActions";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
export interface DeleteQuizzProps {
  id: string;
  open: boolean;
  onClose: (value: string) => void;
}
export function DeleteQuizz(props: DeleteQuizzProps) {
  const { onClose, id, open } = props;
  // console.log(open);
  const handleClose = () => {
    onClose(id);
  };
  const handleDelete = () => {
    console.log("excute delete quizz at here" + " " + id);
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">
        {" "}
        Are you sure to delete this Quiz?{" "}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Typography>
            Please consider before delete this quiz because the quiz will be
            removed forever in your database
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleDelete} color="primary">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}
