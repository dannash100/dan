import React from 'react'
import Container from '@material-ui/core/Container'
import ParallaxHero from './ParallaxHero'

import { makeStyles } from '@material-ui/core/styles'
import Parallax from './Parallax';

const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    minHeight: '100vh',
    maxHeight: '100%',
    maxWidth: '100%',
    margin: '0 auto;'
  }
}))

const LandingPage = () => {
  const classes = useStyles()
  return (
    <div>
      <ParallaxHero/>
    </div>
  )
}

export default LandingPage
