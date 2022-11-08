import {
  CircularProgress,
  Container,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      height: "90vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    progress: {
      color: "#FFA500",
    },
  })
);

export default function NoResultPage() {
  const styles = useStyles();
  return (
    <Container fixed className={styles.container}>
      <CircularProgress className={styles.progress} />
    </Container>
  );
}
