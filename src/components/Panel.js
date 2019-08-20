import React from "react";
import Container from "@material-ui/core/Container";
import Typography from '@material-ui/core/Typography'

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    width: "100%",
    maxWidth: '100%',
    height: 500,
    padding: 0,
    margin: "0 auto;",
    userSelect: 'none',
    backgroundColor: '#FFF',
    color: '#606672'
  },
  content: {

  },
  text: {
      fontSize: '2.2em'
  }
}));

const ParallaxHero = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
        <Typography className={classes.text}>Gamefroot is the platform for kids to code games.</Typography>
    </Container>
  );
};

export default ParallaxHero;
