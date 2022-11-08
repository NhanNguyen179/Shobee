import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Select, MenuItem } from "@material-ui/core";
import styled from "styled-components";
import userFunction from "../../api/userFunction";
import { useHistory } from "react-router-dom";
import { CustomTextField } from "../../components/common/CustomTextField";

const Register = () => {
  const [role, setRole] = React.useState();
  const [city, setCity] = React.useState();
  const navigated = useHistory();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const dataTemp = {
      username: data.get("username"),
      password: data.get("password"),
      certificate: data.get("certificate"),
      email: data.get("email"),
    };
    console.log(dataTemp);
    try {
      const response: any = await userFunction.register(dataTemp, role);
      console.log("response", response);
      navigated.push("/sign-in");
    } catch (err) {
      console.log(err);
    }
  };
  const handleChangeRole = (event: any) => {
    setRole(event.target.value);
  };
  const handleChangeCity = (event: any) => {
    setCity(event.target.value);
  };
  return (
    <ThemeProvider theme={theme}>
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
            Register
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <CustomTextField
              margin="normal"
              required
              fullWidth
              name="username"
              label="Username"
              type="text"
              id="username"
            />
            <CustomTextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <CustomTextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <CustomTextField
              margin="normal"
              required
              fullWidth
              name="certificate"
              label="Cerfiticate"
              type="text"
              id="cerfiticate"
            />
            <Select
              value={role}
              label="Age"
              onChange={handleChangeRole}
              style={{
                width: "100%",
                margin: "20px 0px 20px 0px",
                outline: "1px solid green",
                height: "50px",
              }}
            >
              <MenuItem value="shop">Shop</MenuItem>
              <MenuItem value="customer">User</MenuItem>
            </Select>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
export default Register;

const theme = createTheme();
