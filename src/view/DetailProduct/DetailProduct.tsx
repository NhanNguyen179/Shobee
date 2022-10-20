import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import styled from "styled-components";
import { Box, Grid } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name: string, description: string) {
  return { name, description };
}

const rows = [
  createData("Kích thước màn hình", "6.7 inches"),
  createData("Hệ điều hành", "iOS 16"),
  createData("Pin", "4.352 mAh"),
];
import Rating from "@mui/material/Rating";
const DetailProduct = () => {
  const [value, setValue] = React.useState<number | null>(2);
  function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  function Item() {
    return (
      <img
        style={{ objectFit: "contain" }}
        src="https://cdn.tgdd.vn/Products/Images/42/247508/iphone-14-pro-tim-thumb-600x600.jpg"
      />
    );
  }
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];
  return (
    <Wrap role="presentation">
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <WrapBreadcum>
            <Breadcrumbs aria-label="breadcrumb" onClick={handleClick}>
              <Link underline="hover" color="inherit" href="/">
                Sản phẩm
              </Link>
              <Link
                underline="hover"
                color="inherit"
                href="/material-ui/getting-started/installation/"
              >
                IPhone 14
              </Link>
              {/* <Typography color="text.primary">Breadcrumbs</Typography> */}
            </Breadcrumbs>
          </WrapBreadcum>
        </Grid>

        <Grid item xs={6}>
          <Carousel>
            {items.map((item, i) => (
              <Item key={i} />
            ))}
          </Carousel>
        </Grid>
        <Grid item xs={6}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography variant="h4" component="h4">
                Iphone 14 pro max
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography component="span">
                iPhone 14 Pro Max là mẫu flagship nổi bật nhất của Apple trong
                lần trở lại năm 2022 với nhiều cải tiến về công nghệ cũng như vẻ
                ngoài cao cấp, sang chảnh hợp với gu thẩm mỹ đại chúng. Những
                chiếc điện thoại đến từ nhà Táo Khuyết nhận được rất nhiều sự kỳ
                vọng của thị trường ngay từ khi chưa ra mắt. Vậy liệu những
                chiếc flagship đến từ công ty công nghệ hàng đầu thế giới này có
                làm bạn thất vọng? Cùng khám phá những điều thú vị về iPhone 14
                Pro Max ở bài viết dưới đây nhé.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TableContainer component={Paper}>
                <Table >
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                       
                      >
                        <TableCell align="left">{row.name}</TableCell>
                        <TableCell align="left">{row.description}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={3}></Grid>

          </Grid>
        </Grid>
      </Grid>
    </Wrap>
  );
};
export default DetailProduct;
const Wrap = styled.div`
  margin: 0px 100px 0px 100px;
`;
const WrapBreadcum = styled.div`
  margin-top: 20px;
`;
const Price = styled.span`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 18px;
`;
