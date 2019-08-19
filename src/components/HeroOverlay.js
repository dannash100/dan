import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

  root: {
    textShadow: '1px 1px 2px #000;',
    color: '#FFFFFF',
    left: '50%',
    transform: 'translateX(-50%)',
    position: 'absolute',
    top: 380,
    textAlign: 'center'
  },
  startButton: {
    backgroundColor: theme.palette.success,
    position: 'absolute',
    top: 600,
    left: '50%',
    padding: '16px 48px;',
    fontSize: 29,
    fontFamily: "'Fredoka One', cursive;",
    color: '#FFFFFF',
    transform: 'translateX(-50%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.16), 0 2px 20px 0 rgba(0,0,0,.1)'
  },
  heroText: {
    fontSize: '4.2rem',
    marginBottom: 25.5
  },
  heroTextSmall: {
    fontSize: '1.6rem',
    fontFamily: "'Roboto', sans-serif;",
    fontWeight: 300,
    marginBottom: 25.5
  }
}))

const HeroOverlay = () => {
  const classes = useStyles()
  return (
    <div>
    <div className={classes.root}>
      <Typography className={classes.heroText}>Game dev made easy</Typography>
      <Typography className={classes.heroTextSmall}>The most engaging way to learn code and game design</Typography>
    </div>
      <Button className={classes.startButton} variant='contained'>Start Making</Button>
    </div>
  )
};

export default HeroOverlay
