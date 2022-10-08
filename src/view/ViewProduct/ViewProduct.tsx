import { Grid } from "@material-ui/core";
import { Pagination } from "@mui/material";
import * as React from "react";
import styled from "styled-components";
import CardProduct from "../../components/CardProduct";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import FaceIcon from '@mui/icons-material/Face';
const ViewProduct = () => {
  return (
    <WrapListProduct>
       <Stack direction="row" spacing={1}>
      <Chip label="Category" />
      <Chip icon={<FaceIcon />} label="Category" />
      <Chip icon={<FaceIcon />} label="Category" />
      <Chip icon={<FaceIcon />} label="Category" />
      <Chip icon={<FaceIcon />} label="Category" />
  
    </Stack>
      <WrapPagination>
        <TextPagination>Sản phẩm mới nhất</TextPagination>
        <Pagination count={10} color="primary" />
      </WrapPagination>
      <WrapViewProduct>
        <Grid container spacing={4}>
          <Grid item xs={3} >
            <CardProduct />
          </Grid>
          <Grid item xs={3} >
            <CardProduct />
          </Grid>
          <Grid item xs={3} >
            <CardProduct />
          </Grid>
          <Grid item xs={3} >
            <CardProduct />
          </Grid>
          <Grid item xs={3} >
            <CardProduct />
          </Grid>
          <Grid item xs={3} >
            <CardProduct />
          </Grid>
          <Grid item xs={3} >
            <CardProduct />
          </Grid>
          <Grid item xs={3} >
            <CardProduct />
          </Grid>
        </Grid>
      </WrapViewProduct>
    </WrapListProduct>
  );
};
export default ViewProduct;
const WrapListProduct = styled.div`
  margin: 0 47px 0px 45px;
`;
const WrapPagination = styled.div`
  margin: 70px 0px 37px 0px;
  display: flex;
  justify-content: space-between;
}
`;
const TextPagination = styled.p`
  ont-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #151515;
`;

const WrapViewProduct = styled.div``;
