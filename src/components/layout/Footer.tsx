import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import HomeIcon from "@material-ui/icons/Home";
import { Typography, Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#f5f5f5",
    width: `100%`,
    position: "relative",
    overflow: "hidden",
    marginTop: "6em",
    padding: "2em 0 ",
  },
  copylight: {
    color: "black",
    fontSize: "1em",
    "&:hover": {
      color: "#FFA500",
    },
  },
}));

const useIconStyles = makeStyles((theme) => ({
  snsIcon: {
    width: "30px",
    height: "30px",

    [theme.breakpoints.down("xs")]: {
      width: "25px",
      height: "25px",
    },
  },
}));

export default function Footer() {
  const classes = useStyles();
  const iconClasses = useIconStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="center"></Grid>
        <Grid container direction="column" style={{ margin: "1.2em 0" }}>
          <Grid item container spacing={2} justifyContent="center">
            <Grid item component={"a"} rel="noreferrer noopener" href="/">
              <HomeIcon
                style={{ color: "#FFA500" }}
                className={iconClasses.snsIcon}
              />
            </Grid>
            <Grid
              item
              component={"a"}
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.facebook.com/"
            >
              <FacebookIcon
                className={iconClasses.snsIcon}
                style={{ color: "#FFA500" }}
              />
            </Grid>
            <Grid
              item
              component={"a"}
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.instagram.com/"
            >
              <InstagramIcon
                className={iconClasses.snsIcon}
                style={{ color: "#FFA500" }}
              />
            </Grid>
            <Grid
              item
              component={"a"}
              target="_blank"
              rel="noreferrer noopener"
              href="https://github.com/"
            >
              <GitHubIcon
                className={iconClasses.snsIcon}
                style={{ color: "#FFA500" }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          component={"a"}
          rel="noreferrer noopener"
          href="/"
          justifyContent="center"
          style={{
            textDecoration: "none",
          }}
        >
          <Typography className={classes.copylight}>
            @2022 ShopBee by DN City
          </Typography>
        </Grid>
      </Container>
    </footer>
  );
}
