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
// export interface SimpleDialogProps {
//   open: boolean;
//   idValue: string;
//   onClose: (value: string) => void;
//   data: Quizz;
// }
type Quizz = {
  category: string;
  description: string;
  id: string;
  questions: [];
  title: string;
  user: string;
};
export function EditQuizInfo({
  open,
  idValue,
  onClose,
  data,
}: {
  open: boolean;
  idValue: any;
  onClose: any;
  data: Quizz;
}) {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(data.category);
  const [description, setDescription] = useState(data.description);
  // const [dataUpdate, setDataUpdate] = useState<Quizz>();
  const [title, setTitle] = useState(data.title);
  // Get Category
  useEffect(() => {
    async function fetchCategory() {
      const response = await fetch("http://localhost:3000/api/categories");
      const category = await response.json();
      setCategories(category);
    }
    fetchCategory();
  }, [category]);

  //handle Close
  const handleClose = () => {
    onClose(idValue);
    setCategory(data.category);
    setTitle(data.title);
    setDescription(data.description);
  };
  // handle submit edit
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const dataUpdated = new FormData(event.currentTarget);
    const newData = {
      id: data.id,
      title: dataUpdated.get("title"),
      description: dataUpdated.get("description"),
      category: dataUpdated.get("category"),
      questions: data.questions,
      user: data.user,
    };
    async function update(datas) {
      const response = await fetch(
        `http://localhost:3000/api/quizzes/${datas.id}`,
        {
          method: "PUT",
          body: JSON.stringify({
            title: datas.title,
            description: datas.description,
            category: datas.category,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();

      console.log(data);
    }
    update(newData);
    // setDataUpdate(newData);
    //console.log(dataUpdate);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };
  const [files, setFiles] = useState<File[]>([]);
  return (
    <Dialog onClose={handleClose} open={open}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          paddingX: "20px",
          width: "100%",
        }}
      >
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
              onChange={(e) => setTitle(e.target.value)}
              value={title}
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
              value={category}
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
