import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import productFunction from "../../api/productFunction";
import * as React from "react";
import Slider from "react-slick";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    margin: "0% 5% 5% 5%",
    // height: "200px",
    // [theme.breakpoints.up(600)]: {
    //   height: "100%",
    // },
  },
}));

const settings = {
  className: "center",
  infinite: false,
  dots: true,
  slidesToShow: 3,
  speed: 500,
  rows: 2,
  slidesPerRow: 2,
  slidesToScroll: 3,
  overflow: "initial",
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
  ],
};

export default function Home() {
  const classes = useStyles();
  const [categories, setCategories] = React.useState<any>();

  React.useEffect(() => {
    const fetch = async () => {
      const responeGetProvince: any = await productFunction.getCategory();
      console.log("responeGetProvince", responeGetProvince);
      setCategories(responeGetProvince);
    };
    fetch();
  }, []);
  return (
    <div>
      <div className="shop-by-category">Danh mục nổi bật</div>
      <Slider {...settings}>
        {categories?.map((item: any, index: any) => (
          <div>
            <Card className={classes.root}>
              <CardActionArea>
                <NavLink to={`/product/${item.id}`}>
                  <CardMedia
                    component="img"
                    alt="CategoryImage"
                    image="https://th.bing.com/th/id/R.724205bb5ea34be06b1f55cf2726652d?rik=zxsjph0CFaJ41A&riu=http%3a%2f%2fi.huffpost.com%2fgadgets%2fslideshows%2f329660%2fslide_329660_3226556_free.jpg&ehk=qWt6UMhcWD2LBmUM%2fb7Lnqk2hxkHnrCRnrs6p%2bojFT8%3d&risl=&pid=ImgRaw&r=0"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      component="p"
                      style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                </NavLink>
              </CardActionArea>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
}
