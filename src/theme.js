import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    text: {
      primary: "#73747e",
    },

    primary: {
      main: "#461a42",
      darker: "#053e85",
    },
    secondary: {
      main: "#00C985",
    },
    neutral: {
      main: "#461a42",
      contrastText: "#fff",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    fontSize: 16,
  },
});

export default theme;
