import { Box, Grid } from "@material-ui/core";
import * as React from "react";
import Logo from "../../components/Logo";
import Search from "../../components/Search";
import styled from "styled-components";
import OptionHeader from "../../components/OptionHeader";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import FaceIcon from "@mui/icons-material/Face";

const Header = () => {
  return (
    <>
      <Wrap>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            {" "}
            <Logo />
          </Grid>
          <Grid item xs={6}>
            {" "}
            <Search />
          </Grid>
          <Grid
            item
            xs={3}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            {" "}
            <OptionHeader />
          </Grid>
        </Grid>
      </Wrap>
      <Stack direction="row" spacing={1}>
        <Chip label="Category" />
        <Chip icon={<FaceIcon />} label="Category" />
        <Chip icon={<FaceIcon />} label="Category" />
        <Chip icon={<FaceIcon />} label="Category" />
        <Chip icon={<FaceIcon />} label="Category" />
      </Stack>
      
    </>
  );
};
export default Header;
const Wrap = styled.div`
  align-items: center;
  justify-content: center;
  height: 178px;
  display: flex;
  margin: 0px 50px 0px 42px;
`;

