import { Grid } from "@material-ui/core";
import * as React from "react";
import styled from "styled-components";
import CardProduct from "../../components/CardProduct";
import { Pagination } from "@mui/material";

const ViewProduct = () => {
  return (
    <WrapListProduct>
     <WrapPagination>
        <TextPagination>Sản phẩm mới nhất</TextPagination>
        <Pagination count={10} color="primary" />
      </WrapPagination>
      <WrapViewProduct>
        <Grid container spacing={6}>
          <Grid item xs={3}>
            <CardProduct />
          </Grid>
          <Grid item xs={3}>
            <CardProduct />
          </Grid>
          <Grid item xs={3}>
            <CardProduct />
          </Grid>
          <Grid item xs={3}>
            <CardProduct />
          </Grid>
          <Grid item xs={3}>
            <CardProduct />
          </Grid>
          <Grid item xs={3}>
            <CardProduct />
          </Grid>
          <Grid item xs={3}>
            <CardProduct />
          </Grid>
          <Grid item xs={3}>
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


const WrapViewProduct = styled.div`
  margin: 0px 100px 0px 100px;
`;
const WrapPagination = styled.div`
  margin: 70px 0px 37px 0px;
  display: flex;
  justify-content: space-between;
}
`;
const TextPagination = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #151515;
`;
