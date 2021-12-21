import React from 'react'
import { AccountBalanceWallet, Menu, People, Pets, NotificationsNone } from '@material-ui/icons'
import { IconButton, Box } from '@material-ui/core'

import * as S from './styles'
import WalletPopup from './WalletPopup'
import { ReactComponent as Logo } from '../../assets/images/logo.svg'
import KingOfHillImg from '../../assets/images/king-of-hill.png'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <S.Container>
      <div className='left'>
        <IconButton className='menu-button'>
          <Menu />
        </IconButton>
        <Box className='logo' ml={2}>
          <Logo />
        </Box>
        <div className='users'>
          <People />&nbsp;
          2342
        </div>
      </div>
      <div className='wallet-header'>
        <WalletPopup />
        <S.WalletButton
          variant='contained'
          color='primary'
          startIcon={<AccountBalanceWallet />}
        >
          Wallet
        </S.WalletButton>
      </div>
      <div className='right'>
        <Link to='#'>Rewards</Link>
        <div className='king-of-hill'>
          <img src={KingOfHillImg} alt='King Of Hill' />
        </div>
        <IconButton className='notification-btn'>
          <NotificationsNone />
        </IconButton>
        <div className='user-menu'>
          <div className='gamdom-logo'>
            <Pets />
            1
          </div>
          <span>Gold 126</span>
        </div>
      </div>
    </S.Container>
  )
}

export default Header