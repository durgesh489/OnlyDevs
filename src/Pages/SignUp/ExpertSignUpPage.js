import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Hidden, MenuItem } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import Input from "@mui/material/Input";
import Container from "@mui/material/Container";
import {
  optionTechStack,
  optionTechTitles,
} from "../../components/Helpingcomponents/DummyData";

const defaultTheme = createTheme();

const ExpertSignUpPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const [errormail, setErrormail] = useState(true);
  const [errorpswd, setErrorPswd] = useState(true);
  const [selectedOptions, setSelectedOptions] = React.useState([]);

  const handleChangeOnTechStackInput = (event, newValue) => {
    setSelectedOptions(newValue);
    console.log(selectedOptions);
  };
  const uploadFileHandler = (event) => {
    const file = event.target.files[0];
    // Handle the file here, such as uploading it to a server
    console.log("Selected file:", file);
  };

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

  const options = [
    { label: "Frontend developer", value: "Frontend developer" },
    { label: "Backend developer", value: "Backend developer" },
    { label: "Devops Engineer", value: "Devops Engineer" },
  ];

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
            Expert Sign Up
          </Typography>
          <Box
            onSubmit={handleSubmit}
            component="form"
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Name"
              name="Name"
              autoComplete="Name"
              autoFocus
            />
            <Autocomplete
              isOptionEqualToValue={(option, value) => {
                return option.value === value.value;
              }}
              options={optionTechTitles}
              getOptionLabel={(option) => option.label}
              renderInput={(params) => (
                <TextField {...params} label="Select Title" />
              )}
              fullWidth
              sx={{ mt: 2 }}
            />
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

            <TextField
              margin="normal"
              required
              fullWidth
              name="Current Comapny"
              label="Current Company"
              type="text"
              id="CurrentCompany"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="Experience"
              label="Experience"
              type="number"
              inputProps={{ min: 0 }}
              id="Experience"
            />

            <Autocomplete
              sx={{ mt: 2 }}
              multiple
              options={optionTechStack}
              getOptionLabel={(option) => option.label}
              value={selectedOptions}
              onChange={handleChangeOnTechStackInput}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Select Options"
                  variant="outlined"
                />
              )}
              fullWidth
            />

            <Input
              sx={{ mt: 2, outline: 0 }}
              type="file"
              onChange={uploadFileHandler}
              fullWidth
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <a className="SignInButton" variant="body2">
                  {"Already have an Account "}
                  <Link className="hover:cursor-pointer" href="/SignIn">
                    <Button>Sign In</Button>
                  </Link>
                </a>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
  );
};

export default ExpertSignUpPage;
