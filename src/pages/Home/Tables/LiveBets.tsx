import React from 'react'
import { makeStyles, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'

import { TableContainer } from './styles'
import GameIcon from '../../../assets/images/game-icon.png'
import Avatar1 from '../../../assets/images/avatar1.jpg'
import Avatar2 from '../../../assets/images/avatar2.jpg'
import Avatar3 from '../../../assets/images/avatar3.jpg'
import Avatar4 from '../../../assets/images/avatar4.jpg'
import Avatar5 from '../../../assets/images/avatar5.jpg'

const data = [
  {
    game: 'Juicy Fruits',
    user: {
      avatar: Avatar1,
      name: 'McFleury',
    },
    time: '20:36',
    bet: 0.3,
    multiplier: 29.9,
    payout: 8.97
  },
  {
    game: 'Sun of Egypt 2',
    user: {
      avatar: Avatar3,
      name: 'Lilygp',
    },
    time: '20:36',
    bet: 1,
    multiplier: 4.6,
    payout: 4.59
  },
  {
    game: 'Wild Frames',
    user: {
      avatar: Avatar2,
      name: 'Lolamoeffie',
    },
    time: '20:36',
    bet: 5,
    multiplier: 1.8,
    payout: 9
  },
  {
    game: 'Bonanza',
    user: {
      avatar: Avatar4,
      name: 'Treber123',
    },
    time: '20:36',
    bet: 1.2,
    multiplier: 4.9,
    payout: 5.88
  },
  {
    game: 'Wanted Dead',
    user: {
      avatar: Avatar2,
      name: 'hakamuka1',
    },
    time: '20:36',
    bet: 80,
    multiplier: 1.08,
    payout: 86.04
  },
  {
    game: 'Reactoonz',
    user: {
      avatar: Avatar1,
      name: 'te2000',
    },
    time: '20:36',
    bet: 5,
    multiplier: 1.9,
    payout: 9.5
  },
  {
    game: 'Free Bet Blackjack',
    user: {
      avatar: Avatar5,
      name: 'Gamdom.com',
    },
    time: '20:36',
    bet: 33.85,
    multiplier: 3.08,
    payout: 104.38
  }
]

const useStyles = makeStyles(() => ({
  game: {
    "display": 'flex',
    "alignItems": 'center',
    "color": 'white !important',
    '& img': {
      marginRight: 10
    }
  },
  user: {
    "display": 'flex',
    "alignItems": 'center',
    "color": 'white !important',
    '& img': {
      width: 20,
      height: 20,
      borderRadius: '50%',
      marginRight: 10
    }
  },
  payout: {
    color: '#0ee07b !important'
  }
}))

const LiveBets = () => {
  const classes = useStyles()

  return (
    <TableContainer>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell>Game</TableCell>
            <TableCell align="center">User</TableCell>
            <TableCell align="center">Time</TableCell>
            <TableCell align="center">Bet</TableCell>
            <TableCell align="center">Multiplier</TableCell>
            <TableCell align="right">Payout</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.user.name}>
              <TableCell scope="row">
                <div className={classes.game}>
                  <img src={GameIcon} alt='Game' />
                  {row.game}
                </div>
              </TableCell>
              <TableCell align="left">
                <div className={classes.user}>
                  <img src={row.user.avatar} alt='User' />
                  {row.user.name}
                </div>
              </TableCell>
              <TableCell align="center">{row.time}</TableCell>
              <TableCell align="center">${row.bet}</TableCell>
              <TableCell align="center">*{row.multiplier}</TableCell>
              <TableCell align="right" className={classes.payout}>${row.payout}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default LiveBets