import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import userFunction from "../../api/userFunction";
import { NavLink, useHistory } from "react-router-dom";
import Logo from "../../img/Logo/logo.png";
import React, { useState } from "react";
import { CustomTextField } from "../../components/common/CustomTextField";
import { CustomSelect } from "../../components/common/CustomSelect";
import { CustomCheckBox } from "../../components/common/CustomCheckBox";
import { CustomButton } from "../../components/common/CustomButton";
import Loading from "../../components/Loading";
import { Avatar, MenuItem, Select, TextField } from "@material-ui/core";
import userAPI from "../../api/userFunction";

export default function Profile() {
  const navigated = useHistory();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [profile, setProfile] = useState<any>();
  const [paymentType, setPaymentType] = useState<any>();
  const [paymentValue, setPaymentValue] = useState<any>();
  const [valuePaymentNumber, setValuePaymentNumber] = useState<any>();
  const [paymentApi, setPaymentApi] = useState<any>();
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const dataTemp = new FormData(event.currentTarget);
    const data = {
      username: dataTemp.get("username"),
      password: dataTemp.get("password"),
      gender: dataTemp.get("Giới tính"),
      paymentType: dataTemp.get("paymentType"),
    };
    console.log("paymentApi", paymentApi);
    console.log("data", JSON.parse(JSON.stringify(paymentApi)));
    await userAPI.updateProfile(JSON.parse(JSON.stringify(paymentApi)));
  };
  React.useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      const respone: any = await userAPI.getInforUser();
      const responeAllPaymentType: any = await userAPI.paymentType();
      console.log(responeAllPaymentType);
      setPaymentType(responeAllPaymentType);
      setPaymentApi(respone.profile);
      setProfile(respone.profile);
      setLoading(false);
    };
    fetch();
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

  if (loading) return <Loading />;
  const handleChangePayment = (e: any) => {
    setPaymentValue(e.target.value);
    let checkId = false;
    for (const element of profile?.profile_payment_type) {
      if (element.payment_type.id === e.target.value) {
        checkId = true;

        setValuePaymentNumber(element.payment_number);
      }
    }
    if (checkId === false) {
      setValuePaymentNumber("");
    }
  };
  const onChangeValuePayment = (e: any) => {
    let checkId = false;
    setValuePaymentNumber(e.target.value);
    for (const element of profile?.profile_payment_type) {
      if (element.payment_type.id === paymentValue) {
        checkId = true;
        for (const element of paymentApi.profile_payment_type) {
          if (element.payment_type.id === paymentValue) {
            element.payment_number = e.target.value;
          }
        }
      }
    }
    if (checkId === false) {
      paymentApi.profile_payment_type.push({
        payment_number: e.target.value,
        payment_type: {
          id: paymentValue,
        },
      });
      console.log("paymentApi", paymentApi);
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
            <Avatar alt="Remy Sharp" src={Logo} />
          </NavLink>

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <Grid container spacing={3}>
              <Grid item md={12}>
                <CustomTextField
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Tên"
                  name="username"
                  autoComplete="name"
                  autoFocus
                  defaultValue={profile?.name}
                />
              </Grid>{" "}
              <Grid item md={6}>
                {" "}
                {/* <CustomSelect
                  label="Giới tính"
                  options={["Nam", "Nữ"]}
                  value={profile?.gender}

                /> */}
              </Grid>{" "}
              <Grid item md={6}>
                <CustomTextField
                  margin="normal"
                  required
                  fullWidth
                  id="phone"
                  label="Phone"
                  name="phone"
                  autoComplete="phone"
                  autoFocus
                  defaultValue={profile?.phone_number}
                />{" "}
              </Grid>{" "}
              <Grid item md={6}>
                {" "}
                <CustomTextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  defaultValue={profile?.email}
                />
              </Grid>{" "}
              <Grid item md={6}>
                {" "}
                <CustomTextField
                  margin="normal"
                  required
                  fullWidth
                  id="certificate"
                  label="CMND/CCCD"
                  name="certificate"
                  autoComplete="certificate"
                  autoFocus
                  defaultValue={profile?.certificate}
                />
              </Grid>{" "}
              <Grid item md={6}>
                {" "}
                {/* <CustomSelect
                  label="Vai trò"
                  options={["Cửa hàng", "Người dùng"]}
                /> */}
              </Grid>
            </Grid>
            <Grid item md={4}>
              {/* <CustomSelect
                label="Thành phố"
                options={["Cửa hàng", "Người dùng"]}
              /> */}
            </Grid>
            <Grid item md={4}>
              {/* <CustomSelect label="Quận" options={["Cửa hàng", "Người dùng"]} /> */}
            </Grid>
            <Grid item md={4}>
              {/* <CustomSelect
                label="Phường"
                options={["Cửa hàng", "Người dùng"]}
              /> */}
            </Grid>
            <Grid item md={12}>
              <CustomTextField
                margin="normal"
                required
                fullWidth
                id="address"
                label="Địa chỉ"
                name="address"
                autoFocus
                defaultValue={profile?.address}
              />
            </Grid>
            <Grid item md={12}>
              {" "}
              <Select
                value={paymentValue}
                name="paymentType"
                onChange={handleChangePayment}
              >
                {paymentType?.map((item: any) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.payment_name}
                  </MenuItem>
                ))}
              </Select>
              <TextField
                value={valuePaymentNumber}
                onChange={onChangeValuePayment}
              >
                ABC
              </TextField>
            </Grid>

            <Typography
              component="h1"
              variant="h6"
              style={{ color: "red", textAlign: "center" }}
            >
              {error}
            </Typography>
            <CustomButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Cập nhập
            </CustomButton>
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
