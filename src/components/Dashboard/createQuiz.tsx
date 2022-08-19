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
export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}
export function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;
  const [age, setAge] = useState("");
  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data.get("demo-select-small"));
  };

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <Box sx={{ display: "flex", alignItems: "center", paddingX: "20px" }}>
        <Avatar
          alt="Remy Sharp"
          src="/assets/images/quiz.png"
          sx={{ width: 50, height: 50 }}
        />
        <Box>
          <DialogTitle>
            Create a quiz
            <Typography fontSize={"12px"}>
              Ideal for student-paced sessions or self-paced assignments.
            </Typography>
          </DialogTitle>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1, padding: "20px" }}
        >
          <FormGroup>
            <label htmlFor="">1. Name this quiz</label>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              name="name"
              placeholder="Enter a quiz name"
              autoFocus
            />
          </FormGroup>

          <FormGroup sx={{ mt: "20px" }}>
            <label>2. Choose Category</label>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              name="demo-select-small"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Category 1</MenuItem>
              <MenuItem value={20}>Category 2</MenuItem>
              <MenuItem value={30}>Category 3</MenuItem>
            </Select>
          </FormGroup>
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
