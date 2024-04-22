import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import Container from "@mui/material/Container";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errormail, setErrormail] = useState(true);
  const [errorpswd, setErrorPswd] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData);

    setErrormail(formData.email.length ? true : false);

    setFormData((prev) => {
      return {
        ...prev,
        email: "",
        password: "",
      };
    });
  };

  const validateEmail = (email) => {
    const emailregex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    console.log(typeof emailregex);
    const rndm = emailregex.test(email) ? true : false;

    return rndm;
  };

  const validatePswd = (pswd) => {
    const rndm = pswd.length > 7 ? true : false;
    return rndm;
  };

  // const emailHandler = (event) => {
  //   event.preventDefault();
  //   setFormData((prev) => {
  //     return {
  //       ...prev,
  //       email: `${event.target.value}`,
  //     };
  //   });
  //   console.log(formData);
  // };
  // const pswdHandler = (event) => {
  //   event.preventDefault();
  //   setFormData((prev) => {
  //     return {
  //       ...prev,
  //       password: `${event.target.value}`,
  //     };
  //   });
  //   console.log(formData);
  // };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            onSubmit={handleSubmit}
            component="form"
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              error={errormail ? false : true}
              helperText={!errormail ? "Enter a valid Email" : ""}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(event) => {
                const newemail = event.target.value;
                setFormData((prev) => {
                  return {
                    ...prev,
                    email: `${newemail}`,
                  };
                });
                setErrormail(validateEmail(newemail));
              }}
              value={formData.email}
            />
            <TextField
              error={errorpswd ? false : true}
              helperText={!errorpswd ? "Enter a valid password" : ""}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => {
                const enteredPswd = e.target.value;
                setFormData((prev) => {
                  return {
                    ...prev,
                    password: `${enteredPswd}`,
                  };
                });
                setErrorPswd(validatePswd(enteredPswd));
              }}
              value={formData.password}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <a className="SignInButton" variant="body2">
                  {"Don't have an account? Sign Up"}
                </a>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
  );
}

export default SignIn;
