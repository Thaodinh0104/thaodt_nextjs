import * as React from "react";
import NextLink from "next/link";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FrontAccountLayout from "@components/Front/FrontAccountLayout";
import { Grid, Link } from "@mui/material";

export default function Login() {
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
            <b>Login</b>
          </Typography>
          <Typography fontWeight={"500"}>
            Login your account at here!
          </Typography>
        </div>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
            <Link href="#" component={NextLink}>
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            Don't have an account?
            <Link href="/account/register" component={NextLink}>
              {"Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </FrontAccountLayout>
  );
}
