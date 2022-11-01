import { withStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
const useStyle = makeStyles((theme: Theme) => ({
  root: {
    color: theme.palette.getContrastText("rgb(255,255,255.0.9)"),
    backgroundColor: "#fdab3f",
    "&:hover": {
      backgroundColor: "#e9982d",
      boxShadow: "none",
    },
    fontWeight: "normal",
    borderRadius: "4px",
    width: "100%",
    fontSize: "16px",
    boxShadow: "none",
    padding: "14px",
  },
}));
 const OrangeButton =() => {
  const classes = useStyle();
  return <Button className={classes.root}></Button>
}
export default OrangeButton;