import {
  Button,
  Container,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";
import Img from "../img/No Result/no-result.png";
import { useHistory } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      height: "90vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    img: {
      width: "100%",
      height: "auto",
    },
    back: {
      fontFamily: "Montserrat, sans-serif",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-arround",
      fontWeight: 700,
      textDecoration: "none",
      color: "#fff",
      textTransform: "uppercase",
      padding: "13px 23px",
      background: "#FFA500",
      fontSize: " 18px",
      transition: "0.2s all",
      "@media only screen and (max-width: 480px)": {
        padding: "7px 15px",
        fontSize: "14px",
      },
      "&:hover": {
        color: "#FFA500",
        background: "#211b19",
      },
      "& svg": {
        marginRight: "10px",
      },
    },
  })
);

export default function NoResultPage() {
  const styles = useStyles();
  const history = useHistory();
  return (
    <Container fixed className={styles.container}>
      <img src={Img} alt="No Result" width={500} />
      <Button className={styles.back} onClick={() => history.goBack()}>
        <ArrowBackIcon />
        Quay lại
      </Button>
    </Container>
  );
}
