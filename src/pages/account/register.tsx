import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FrontAccountLayout from "@components/Front/FrontAccountLayout";
import { Grid, Link } from "@mui/material";
import NextLink from "next/link";
export default function Register() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
  };
  return (
    <FrontAccountLayout bgColor={"#461a42"}>
      <Box
        sx={{
          maxWidth: 600,
          width: "100%",
          mx: "auto", // margin left & right
          my: 4, // margin top & botom
          py: 5, // padding top & bottom
          px: 5, // padding left & right
          display: "flex",
          flexDirection: "column",
          gap: 2,
          borderRadius: "sm",
          boxShadow: "md",
          textAlign: "center",
          bgcolor: "#ffffff",
        }}
      >
        <div>
          <Typography variant="h3" component="h3">
            <b>Welcome!</b>
          </Typography>
          <Typography fontWeight={"500"}>Register your new account</Typography>
        </div>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            type="text"
            label="Your Full Name"
            name="name"
            autoComplete="name"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
        <Grid container>
          <Grid item xs>
            Have already an account?
            <Link href="/account/login" component={NextLink}>
              <a>Sign In</a>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </FrontAccountLayout>
  );
}
