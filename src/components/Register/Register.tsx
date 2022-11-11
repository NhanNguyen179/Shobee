import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import userFunction from "../../api/userFunction";
import { NavLink, useHistory } from "react-router-dom";
import { CustomTextField } from "../common/CustomTextField";
import { CustomSelect } from "../common/CustomSelect";
import Logo from "../../img/Logo/logo.png";
import { CustomButton } from "../common/CustomTextField copy";

const Register = () => {
  const [role, setRole] = React.useState();
  const navigated = useHistory();

  let logoStyle = {
    width: "50px",
    transition: "400ms ease",
    borderRadius: "50%",
    padding: "5px",
  };

  let navlinkLogoStyle = {
    display: "flex",
    alignItems: "center",
  };

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
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <NavLink to="/" style={navlinkLogoStyle}>
            <img src={Logo} alt="logo" style={logoStyle} />
          </NavLink>
          <Typography component="h1" variant="h5">
            Tham gia với chung tôi
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <CustomTextField
              margin="normal"
              required
              fullWidth
              name="username"
              label="Tên đăng nhập"
              type="text"
              id="username"
            />
            <CustomTextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <CustomTextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Mật khẩu"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <CustomTextField
              margin="normal"
              required
              fullWidth
              name="certificate"
              label="Căn cước công dân"
              type="text"
              id="cerfiticate"
            />
            <CustomSelect
              label="Vai trò"
              options={["Cửa hàng", "Người dùng"]}
            />
            <CustomButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Đăng kí
            </CustomButton>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
export default Register;

const theme = createTheme();
