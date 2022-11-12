import Header from "./Header";
import Category from "./Category";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import HomeProducts from "./HomeProducts";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#f3f3f3",
  },
}));

export default function Home() {
  const isMobile = useMediaQuery("(max-width:599px)");
  const styles = useStyles();
  return (
    <div
      style={isMobile ? { paddingBottom: "120px" } : { paddingBottom: "90px" }}
      className={styles.container}
    >
      <Header />
      <Category />
      <HomeProducts />
    </div>
  );
}
