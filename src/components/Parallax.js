import React from 'react'
import Parallax from 'parallax-js'
import { makeStyles } from '@material-ui/core/styles'

import bg from '../images/parallax/bg.jpg'

const useStyles = makeStyles(theme => ({
  bg: {
    width: "100%",
    maxWidth: '100%',
    height: 760,
    padding: 0,
    margin: "0 auto;",
    backgroundColor: 'grey'
  },
}))

const ParallaxImage = () => {
  const classes = useStyles()
  return (
    <div id='splash'>
      <div><img className={classes.bg} src={bg}/></div>
    </div>
  )
};

export default ParallaxImage
