import React, {useEffect, useState} from 'react'
import Parallax from 'parallax-js'
import { makeStyles } from '@material-ui/core/styles'

import pCloud from '../images/parallax/p-cloud.png'
import pCoins from '../images/parallax/p-coins.png'
import pGirl from '../images/parallax/p-girl.png'
import pGrass from '../images/parallax/p-grass.png'

import mGirl from '../images/parallax/m-girl.png'
import mCloud from '../images/parallax/m-cloud.png'
import mPost from '../images/parallax/m-post.png'

import bg from '../images/parallax/bg.jpg'
import separator from '../images/parallax/break.png'

const useStyles = makeStyles(theme => ({
  container: {
    overflow: 'hidden',
    width: '100%',
    height: 700,
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  mGirl: {
    position: 'absolute',
    top: 60,
    left: '35%',
  },
  mCloud: {
    position: 'absolute',
    display: 'block'
  },
  mPost: {
    position: 'absolute',
    display: 'block',
    left: '5%',
    top: 360,
  },
  pCloud: {
    position: 'absolute',
    left: '75%',
    top: 0,
    WebkitFilter: 'drop-shadow(20px 15px 3px rgba(0,0,0,.3))'
  },
  pCoins: {
    position: 'absolute',
    left: '86%',
    top: 350,
    WebkitFilter: 'drop-shadow(20px 15px 3px rgba(0,0,0,.3))'
  },
  pGirl: {
    position: 'absolute',
    top: 60,
    left: '50%',
    WebkitFilter: 'drop-shadow(20px 15px 3px rgba(0,0,0,.3))'
  },
  pGrass: {
    position: 'absolute',
    left: '60%',
    top: 500,
    WebkitFilter: 'drop-shadow(20px 15px 3px rgba(0,0,0,.3))',
  },
  bg: {
    position: 'absolute',
    width: "200%",
    maxWidth: '200%',
    left: '-50%',
    top: -350,
    padding: 0,
    margin: "0 auto;",
  },
  separator: {
    position: 'absolute',
    left: '50%;',
    marginLeft: '-70px;',
    top: -140
  },
  layer: {
    right: 0,
  }
}))

const ParallaxImage = () => {
  const classes = useStyles()
  return (
    <div ref={el => new Parallax(el)} className={classes.container}>
      <div className={classes.layer} data-depth="0.10"><img className={classes.bg} src={bg}/></div>
      <div className={classes.layer} data-depth="0.20"><img className={classes.mCloud} src={mCloud}/></div>
      <div className={classes.layer} data-depth="0.40"><img className={classes.mPost} src={mPost}/></div>
      <div className={classes.layer} data-depth="0.60"><img className={classes.mGirl} src={mGirl}/></div>
      <div className={classes.layer} data-depth="0.60"><img className={classes.pGirl} src={pGirl}/></div>
      <div className={classes.layer} data-depth="0.40"><img className={classes.pCloud} src={pCloud}/></div>
      <div className={classes.layer} data-depth="0.20"><img className={classes.pCoins} src={pCoins}/></div>
      <div className={classes.layer} data-depth='1.00'><img className={classes.pGrass} src={pGrass}/></div>
      <div className={classes.layer} data-depth="0.55"><img className={classes.separator} src={separator}/></div>
    </div>
  )
};

export default ParallaxImage
