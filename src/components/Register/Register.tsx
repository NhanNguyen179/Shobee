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
import { CustomButton } from "../common/CustomButton";
import orderApi from "../../api/orderApi";

const Register = () => {
  const [role, setRole] = React.useState<string>("");
  const [provinceId, setProvinceId] = React.useState<string>("");
  const [districtId, setDistrictId] = React.useState<string>("");
  const [wardId, setWardId] = React.useState<string>("");
  const navigated = useHistory();
  const [provinces, setProvinces] = React.useState<any>([]);

  React.useEffect(() => {
    const fetchProvince = async () => {
      const response: any = await orderApi.getProvinces();
      setProvinces(response);
    };
    fetchProvince();
  }, []);

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
    const body = {
      username: data.get("username"),
      password: data.get("password"),
      certificate: data.get("certificate"),
      email: data.get("email"),
    };
    try {
      await userFunction.register(body, role);
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
              name="name"
              label="Tên người dùng"
              type="text"
              id="name"
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
              name="certificate"
              label="Căn cước công dân"
              type="text"
              id="cerfiticate"
            />
            <CustomSelect
              label="Vai trò"
              options={[
                { value: "shop", label: "Cửa hàng" },
                { value: "customer", label: "Người dùng" },
              ]}
              value={role}
              setValue={setRole}
            />
            <CustomSelect
              label="Thành phố"
              options={[
                provinces.map((item: any) => ({
                  value: item.ProvinceID,
                  label: item.ProvinceName,
                })),
              ]}
              value={provinceId}
              setValue={setProvinceId}
            />
            <CustomSelect
              label="Quận"
              options={[
                { value: "shop", label: "Cửa hàng" },
                { value: "customer", label: "Người dùng" },
              ]}
              value={districtId}
              setValue={setDistrictId}
            />
            <CustomSelect
              label="Phường"
              options={[
                { value: "shop", label: "Cửa hàng" },
                { value: "customer", label: "Người dùng" },
              ]}
              value={wardId}
              setValue={setWardId}
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
