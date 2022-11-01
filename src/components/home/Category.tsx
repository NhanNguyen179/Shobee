import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { CategoryData } from "../../data/CategoryData";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import productFunction from "../../api/productFunction";
import * as React from 'react'
const useStyles = makeStyles({
  root: {
    textAlign: "center",
    margin: "0% 5% 5% 5%",
  },
});

export default function Home() {
  const classes = useStyles();
  const [categories, setCategories] = React.useState<any>();

  React.useEffect(() => {
    // Update the document title using the browser API
    const fetch = async () => {
      const responeGetProvince: any = await productFunction.getCategory();
      console.log("responeGetProvince",responeGetProvince)
      setCategories(responeGetProvince);
    };
    fetch();
  }, []);
  return (
    <div>
      <div className="shop-by-category">Shop By Category</div>
      <Grid
        container
        style={{
          justifyContent: "start",
          maxWidth: "1280px",
          margin: "0px auto",
        }}
      >
        {categories?.map((item : any, index : any) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className={classes.root}>
              <CardActionArea>
                <NavLink to={`/product/${item.id}`}>
                  <CardMedia
                    component="img"
                    alt="CategoryImage"
                    height="220"
                    image="https://th.bing.com/th/id/R.724205bb5ea34be06b1f55cf2726652d?rik=zxsjph0CFaJ41A&riu=http%3a%2f%2fi.huffpost.com%2fgadgets%2fslideshows%2f329660%2fslide_329660_3226556_free.jpg&ehk=qWt6UMhcWD2LBmUM%2fb7Lnqk2hxkHnrCRnrs6p%2bojFT8%3d&risl=&pid=ImgRaw&r=0"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                </NavLink>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
