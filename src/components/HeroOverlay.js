import React from "react";
import Button from "@material-ui/core/Button";
import Box from '@material-ui/core/Box';
import { shadows } from '@material-ui/system'

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({

    root: {
        textShadow: '1px 1px 2px #000;',
    },
    startButton: {
        backgroundColor: theme.palette.success,
        position: 'absolute',
        top: 550,
        left: '50%',
        padding: '16px 48px;',
        fontSize: 29,
        fontFamily: "'Fredoka One', cursive;",
        color: '#FFFFFF',
        transform: 'translateX(-50%)',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.16), 0 2px 20px 0 rgba(0,0,0,.1)'
    }
}));

const HeroOverlay = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
         <Button className={classes.startButton} variant='contained'>Start Making</Button>
    </div>
  );
};

export default HeroOverlay;
