import ProductListPaper from "./ProductListPaper";
import ProductListContainer from "./ProductListContainer";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: "10px",
    transition: "0.3s",
    "&:hover": {
      "& img": {
        transform: "scale(1.1)",
      },
      backgroundColor: "gray",
    },
    margin: "10px",
  },

  media: {
    height: "200px",
    width: "100%",
    objectFit: "cover",
    transition: "0.3s",
  },
  name: {
    fontSize: "1rem",
    height: "2rem",
    textOverflow: "ellipsis",
  },
  price: {
    color: "#FFA500",
    padding: "0.5rem 0",
  },
}));

const ProductList = ({ products }: any) => {
  const styles = useStyles();
  return (
    // <ProductListContainer>
    //   {products.map((product: any) => (
    //     <ProductListPaper
    //       key={product.id}
    //       id={product.id}
    //       name={product.name}
    //       price={product.price}
    //       image={product.imageUrl}
    //     />
    //   ))}
    // </ProductListContainer>
    <Grid container style={{ minHeight: "80vh" }}>
      {products.map((product: any) => (
        <Grid item xs={6} sm={4} md={2}>
          <Card className={styles.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt={`${product.name}`}
                image={` ${process.env.REACT_APP_API_BASE_URl_IMAGE}/${product.imageUrl}`}
                title={`${product.name}`}
                className={styles.media}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className={styles.name}
                >
                  {product.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={styles.price}
                >
                  {product.price} đ
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
