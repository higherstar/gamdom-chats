import React from 'react'
import {
  Menu,
  MenuProps,
  withStyles,
  Box,
  Radio as MuiRadio,
  RadioProps,
  RadioGroup,
  FormControlLabel
} from '@material-ui/core'
import { ExpandLess, ExpandMore } from '@material-ui/icons'
import styled, { css } from 'styled-components'

import USDIcon from '../../assets/images/usd.png'
import ETHIcon from '../../assets/images/eth.png'
import BTCIcon from '../../assets/images/btc.png'
import LTCIcon from '../../assets/images/ltc.png'

const StyledMenu = withStyles( () => ({
  paper: {
    background: '#2f3e45',
    boxShadow: '0 2px 32px 4px rgba(0, 0, 0, 0.2)',
  },
  list: {
    padding: `5px`
  }
}))((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    {...props}
  />
))

const Radio = withStyles({
  root: {
    'color': 'white',
    '&$checked': {
      color: '#0ee07b',
    },
  },
  checked: {},
})((props: RadioProps) => <MuiRadio color="default" {...props} />);

const Button = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 110px;
  border-radius: 3px;
  background-color: ${props => props.theme.colors.charcoal};
  padding: 10px 15px 10px 20px;
  cursor: pointer;
  color: white;

  > span {
    display: flex;
    align-items: center;
  }

  img {
    width: 20px;
    height: 20px;
    margin-left: 5px;
  }
`

const Content = styled.div`
  color: white;
  min-width: 200px;
  outline: none;

  .label {
    color: lightgray;
    font-size: 14px;
  }

  .divider {
    margin: 7px 0;
    height: 1px;
    background-color: #8080803d;
  }

  .bet-currencies {
    padding: 10px;

    .currency-group {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 5px;
      margin-top: 10px;

      label {
        margin: 0;

        .MuiRadio-root {
          padding: 5px;
        }

        .MuiTypography-root {
          font-size: 15px;
        }
      }
    }
  }
`

const MenuItem = styled.div<{active?: boolean}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px;
  cursor: pointer;
  transition: all ease 0.3s;

  ${props => props.active && css`
    background-color: ${props.theme.colors.charcoal};
  `}

  &:hover {
    background-color: ${props => props.theme.colors.charcoal};
  }

  .currency-type {
    display: flex;
    align-items: center;
    padding-right: 5px;

    img {
      width: 20px;
      height: 20px;
      margin-right: 5px;
    }
  }
`

const WalletPopup = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [betCurrency, setBetCurrency] = React.useState('USD')

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBetCurrency((event.target as HTMLInputElement).value);
  }

  return (
    <React.Fragment>
      <Button onClick={handleClick}>
        <span>$0 <img src={USDIcon} alt='USD' /></span>
        { Boolean(anchorEl) ? <ExpandLess /> : <ExpandMore /> }
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Content>
          <Box p='8px'>
            <span className='label'>Wallet</span>
          </Box>
          <div className='divider' />
          <MenuItem active>
            <span className='value'>$0</span>
            <span className='currency-type'>
              <img src={USDIcon} alt='USD' />
              USD
            </span>
          </MenuItem>
          <div className='divider' />
          <MenuItem>
            <span className='value'>0.0000000</span>
            <span className='currency-type'>
              <img src={BTCIcon} alt='BTC' />
              BTC
            </span>
          </MenuItem>
          <div className='divider' />
          <MenuItem>
            <span className='value'>0.0000000</span>
            <span className='currency-type'>
              <img src={ETHIcon} alt='ETH' />
              ETH
            </span>
          </MenuItem>
          <div className='divider' />
          <MenuItem>
            <span className='value'>0.0000000</span>
            <span className='currency-type'>
              <img src={LTCIcon} alt='LTC' />
              LTC
            </span>
          </MenuItem>
          <div className='divider' />
          <div className='bet-currencies'>
            <span className='label'>Bet Currencies</span>
            <RadioGroup
              className='currency-group'
              row
              aria-label="currency"
              name="currency"
              value={betCurrency}
              onChange={handleChange}
            >
              <FormControlLabel
                value="USD"
                control={<Radio size='small'/>}
                label="USD"
                labelPlacement="start"
              />
              <FormControlLabel
                value="EUR"
                control={<Radio size='small' />}
                label="EUR"
                labelPlacement="start"
              />
              <FormControlLabel
                value="RUB"
                control={<Radio size='small' />}
                label="RUB"
                labelPlacement="start"
              />
              <FormControlLabel
                value="JPY"
                control={<Radio size='small'/>}
                label="JPY"
                labelPlacement="start"
              />
              <FormControlLabel
                value="CAD"
                control={<Radio size='small' />}
                label="CAD"
                labelPlacement="start"
              />
              <FormControlLabel
                value="KRW"
                control={<Radio size='small' />}
                label="KRW"
                labelPlacement="start"
              />
            </RadioGroup>
          </div>
        </Content>
      </StyledMenu>
    </React.Fragment>
  )
}

export default WalletPopup