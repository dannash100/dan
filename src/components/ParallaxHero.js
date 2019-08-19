import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";
import HeroOverlay from "./HeroOverlay";

const useStyles = makeStyles(theme => ({
  container: {
    width: "100%",
    height: 700,
    position: "absolute",
    top: 0,
    left: 0,
    margin: "0 auto;",
    backgroundColor: 'grey'
  },
  loginButton: {
    position: "absolute",
    top: 24,
    right: 24,
    fontFamily: "'Fredoka One', cursive;",
    paddingLeft: 29,
    paddingRight: 29
  }
}));

const ParallaxHero = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Button
        className={classes.loginButton}
        variant="contained"
        color="primary"
      >
        LOG IN
      </Button>
      <HeroOverlay/>
    </Container>
  );
};

export default ParallaxHero;
