import React from 'react'
import ParallaxHero from './ParallaxHero'
import Panel from './Panel'

import { makeStyles } from '@material-ui/core/styles'


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
      <Panel/>
    </div>
  )
}

export default LandingPage
