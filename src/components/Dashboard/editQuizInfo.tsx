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
import FileUpload from "react-material-file-upload";
export interface SimpleDialogProps {
  open: boolean;
  idValue: string;
  onClose: (value: string) => void;
}
export function EditQuizInfo(props: SimpleDialogProps) {
  const { onClose, idValue, open } = props;
  const [category, setCategory] = useState("10");
  const [name, setName] = useState("Name quiz");
  const handleClose = () => {
    onClose(idValue);
    setCategory("10");
    setName("Name quiz");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data.get("demo-select-small"));
  };

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };
  const [files, setFiles] = useState<File[]>([]);
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
            Edit quiz infomations
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
              onChange={(e) => setName(e.target.value)}
              value={name}
              autoFocus
            />
          </FormGroup>

          <FormGroup sx={{ mt: "20px" }}>
            <label>2. Choose Category</label>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              name="demo-select-small"
              value={category}
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
          <FormGroup sx={{ mt: "20px" }}>
            <FileUpload
              multiple={false}
              value={files}
              onChange={setFiles}
              title="Click to select or drag and drop a image. (Max size: 7MB)"
              buttonText="Upload image"
              maxSize={7340032}
            />
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
              Save
            </Button>
          </DialogActions>
        </Box>
      </Box>
    </Dialog>
  );
}
