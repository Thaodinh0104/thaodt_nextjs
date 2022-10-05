import Avatar from "@mui/material/Avatar";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import { useEffect, useState } from "react";
import DialogActions from "@mui/material/DialogActions";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FileUpload from "react-material-file-upload";
import { useRouter } from "next/router";
import { server } from "config";
import { useSelector } from "react-redux";
import { fetchCategories, selectAllCategory } from "redux/category";
import { store } from "redux/store";
export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}
interface Category {}
export function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;
  const [age, setAge] = useState("");
  // const [categories, setCategories] = useState([]);
  const [quizz, setQuizz] = useState("");
  const router = useRouter();
  // Get Category
  const categories = useSelector(selectAllCategory);
  const categoriesStatus = useSelector((state) => state.categories.status);
  useEffect(() => {
    store.dispatch(fetchCategories());
  }, [categoriesStatus, store.dispatch]);

  // Close popup create quizz
  const handleClose = () => {
    onClose(selectedValue);
  };

  // Handle submit data create quizz
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const title = data.get("title");
    const description = data.get("description");
    const category = data.get("category");

    async function addQuizz(title: String, description: String, catID: String) {
      const response = await fetch("/api/quizzes", {
        method: "POST",
        body: JSON.stringify({
          title: title,
          description: description,
          category: catID,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      setQuizz(data.id);
      console.log(data);
    }
    addQuizz(title, description, category);
    router.push(`/dashboard/quizzes/${quizz}`);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
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
          sx={{ mt: 1, padding: "20px", width: "100%" }}
        >
          <FormGroup>
            <label htmlFor="">1. Name this quiz</label>
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              name="title"
              placeholder="Enter a quiz name"
              autoFocus
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="">2. Description this quiz</label>
            <TextField
              margin="normal"
              required
              fullWidth
              id="description"
              name="description"
              placeholder="Enter desciption"
              autoFocus
            />
          </FormGroup>
          <FormGroup sx={{ mt: "20px" }}>
            <label>2. Choose Category</label>
            <Select
              labelId="category"
              id="category"
              name="category"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              {categories.map((cat, index) => {
                return (
                  <MenuItem key={cat.id} value={cat.id}>
                    {cat.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormGroup>
          {/* <FormGroup sx={{ mt: "20px" }}>
            <FileUpload
              multiple={false}
              value={files}
              onChange={setFiles}
              title="Click to select or drag and drop a image. (Max size: 7MB)"
              buttonText="Upload image"
              maxSize={7340032}
            />
          </FormGroup> */}

          <DialogActions
            sx={{ display: "flex", width: "100%", paddingX: "20px" }}
          >
            <Button onClick={handleClose} sx={{ mt: 3, mb: 2, width: "50%" }}>
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2, width: "50%", bgcolor: "#461a42" }}
            >
              Next
            </Button>
          </DialogActions>
        </Box>
      </Box>
    </Dialog>
  );
}
