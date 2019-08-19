import React from 'react'
import Container from '@material-ui/core/Container'
import ParallaxHero from './ParallaxHero'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    container: {
    width: '100%',
    minHeight: '100vh',
    maxHeight: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    margin: '0 auto;',
    },
  }))

const LandingPage = () => {
    const classes = useStyles()
    return (
        <Container className={classes.container}>
            <ParallaxHero/>
        </Container>
    )
}

export default LandingPage