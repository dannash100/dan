import React from "react";
import Container from "@material-ui/core/Container";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    width: "100%",
    maxWidth: '100%',
    height: 500,
    margin: "0 auto;",
    backgroundColor: '#FFF'
  }
}));

const ContentContainer = ({children}) => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      {children}
    </Container>
  );
};

export default ContentContainer;
