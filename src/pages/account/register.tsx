import type { NextPage } from "next";
import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import TextField from "@mui/joy/TextField";
import Button from "@mui/joy/Button";
import Link from "next/link";

const Register: NextPage = () => {
  return (
    <CssVarsProvider>
      <Sheet
        sx={{
          maxWidth: 400,
          mx: "auto", // margin left & right
          my: 4, // margin top & botom
          py: 3, // padding top & bottom
          px: 2, // padding left & right
          display: "flex",
          flexDirection: "column",
          gap: 2,
          borderRadius: "sm",
          boxShadow: "md",
        }}
      >
        <div>
          <Typography level="h4" component="h1">
            <b>Welcome!</b>
          </Typography>
          <Typography level="body2">Register your new account</Typography>
        </div>
        <TextField
          // html input attribute
          name="name"
          type="text"
          placeholder="Full Name"
          // pass down to FormLabel as children
          label="Full Name"
        />
        <TextField
          // html input attribute
          name="email"
          type="email"
          placeholder="johndoe@email.com"
          // pass down to FormLabel as children
          label="Email"
        />
        <TextField
          name="password"
          type="password"
          placeholder="password"
          label="Password"
        />
        <Button
          sx={{
            mt: 1, // margin top
          }}
        >
          Register
        </Button>
        <Typography
          endDecorator={<Link href="/account/login">Sign in</Link>}
          fontSize="sm"
          sx={{ alignSelf: "center" }}
        >
          Already has an account?
        </Typography>
      </Sheet>
    </CssVarsProvider>
  );
};
export default Register;
