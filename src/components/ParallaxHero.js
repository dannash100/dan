import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Parallax from "./Parallax"

import { makeStyles } from "@material-ui/core/styles";
import HeroOverlay from "./HeroOverlay";

const useStyles = makeStyles(theme => ({
  container: {
    width: "100%",
    maxWidth: '100%',
    height: 760,
    padding: 0,
    margin: "0 auto;",
    backgroundColor: 'grey'
  },
  loginButton: {
    position: "absolute",
    top: 24,
    right: 24,
    paddingLeft: 29,
    paddingRight: 29
  }
}));

const ParallaxHero = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Parallax/>
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
