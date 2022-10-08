import { Grid } from "@material-ui/core";
import * as React from "react";
import NavBar from "../../components/NavBar";
import ViewProduct from "../ViewProduct";


const HomeProduct = () => {
  
  return (
    <div>
       <Grid container >
        <Grid item xs={12}> <ViewProduct/></Grid>


      </Grid>
    </div>
  );
};
export default HomeProduct;




