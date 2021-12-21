import React from 'react'
import { Grid, Box } from '@material-ui/core'

import * as S from './styles'
import SlotsImg from '../../assets/images/slots.png'
import SportsImg from '../../assets/images/sports.png'
import RouletteImg from '../../assets/images/roulette.png'
import TradeUpImg from '../../assets/images/tradeup.png'
import CrashImg from '../../assets/images/crash.png'
import HiloImg from '../../assets/images/hilo.png'
import Logo from '../../assets/images/full-logo.png'

const MainPage = () => {
  return (
    <S.Container>
      <div className='top'>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <div className='big-item slots'>
              <img src={SlotsImg} alt='Slots' />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className='big-item sports'>
              <img src={SportsImg} alt='Sports' />
            </div>
          </Grid>
        </Grid>
        <Box display='flex' justifyContent='flex-end' mt={6}>
          <Box maxWidth='80%' pr={3}>
            <Grid container spacing={5}>
              <Grid item xs={4}>
                <div className='small-item roulette'>
                  <img src={RouletteImg} alt='Roulette' />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className='small-item crash'>
                  <img src={CrashImg} alt='Crash' />
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className='small-item trade-up'>
                  <img src={TradeUpImg} alt='Trade Up' />
                </div>
              </Grid>
            </Grid>
            <Box mt={2}>
              <Grid container spacing={5}>
                <Grid item xs={4} />
                <Grid item xs={4}>
                  <div className='small-item hilo'>
                    <img src={HiloImg} alt='Hilo' />
                  </div>
                </Grid>
                <Grid item xs={4} />
              </Grid>
            </Box>
          </Box>
        </Box>
        <img className='logo' src={Logo} alt='Logo' />
      </div>
    </S.Container>
  )
}

export default MainPage
