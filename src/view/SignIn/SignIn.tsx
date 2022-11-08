import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import userFunction from "../../api/userFunction";
import { useHistory } from "react-router-dom";
import Logo from "../../img/Logo/logo.png";
import { CustomTextField } from "../../components/common/CustomTextField";
import { CustomCheckBox } from "../../components/common/CustomCheckBox";
import { CustomSelect } from "../../components/common/CustomSelect";
import { useState } from "react";
import Loading from "../../components/Loading";

const SignInButton = styled(Button)({
  fontFamily: "Montserrat, sans-serif",
  display: "inline-block",
  fontWeight: 700,
  textDecoration: "none",
  color: "#fff",
  textTransform: "uppercase",
  padding: "13px 23px",
  background: "#FFA500",
  fontSize: " 18px",
  transition: "0.2s all",
  margin: "20px 0 20px 0",
  borderRadius: "10px",
  "@media only screen and (max-width: 480px)": {
    padding: "7px 15px",
    fontSize: "14px",
  },
  "&:hover": {
    color: "#FFA500",
    background: "#211b19",
  },
});

export default function SignIn() {
  const navigated = useHistory();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const dataTemp = new FormData(event.currentTarget);
    const data = {
      username: dataTemp.get("username"),
      password: dataTemp.get("password"),
    };
    const role = dataTemp.get("Vai trò") === "Người dùng" ? "customer" : "shop";
    try {
      setLoading(true);
      const response: any = await userFunction.login(data, role);
      localStorage.setItem("jwtToken", response.access_token);
      setLoading(false);
      navigated.push("/");
    } catch (err) {
      console.log(err);
      setError("Sai tên đăng nhập hoặc mật khẩu");
      setLoading(false);
    }
  };

  let logoStyle = {
    width: "50px",
    transition: "400ms ease",
    borderRadius: "50%",
    padding: "5px",
  };

  if (loading) return <Loading />;

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
          <img src={Logo} alt="logo" style={logoStyle} />
          <Typography component="h1" variant="h5">
            Mua hàng ngay
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <CustomTextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Tên đăng nhập"
              name="username"
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
            <CustomSelect
              label="Vai trò"
              options={["Cửa hàng", "Người dùng"]}
            />
            <CustomCheckBox label="Nhớ tài khoản" />
            <Typography
              component="h1"
              variant="h6"
              style={{ color: "red", textAlign: "center" }}
            >
              {error}
            </Typography>
            <SignInButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Đăng nhập
            </SignInButton>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Quên mật khẩu?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/sign-up" variant="body2">
                  Không có tài khoản? Đăng kí ngay
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

const theme = createTheme();
