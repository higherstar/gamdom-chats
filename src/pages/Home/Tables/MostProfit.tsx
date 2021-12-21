import React from 'react'
import { makeStyles, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'

import { TableContainer } from './styles'
import Avatar1 from '../../../assets/images/avatar1.jpg'
import Avatar2 from '../../../assets/images/avatar2.jpg'
import Avatar3 from '../../../assets/images/avatar3.jpg'
import Avatar4 from '../../../assets/images/avatar4.jpg'
import Avatar5 from '../../../assets/images/avatar5.jpg'

const data = [
  {
    user: {
      avatar: Avatar1,
      name: 'McFleury',
    },
    profit: 779
  },
  {
    user: {
      avatar: Avatar3,
      name: 'Lilygp',
    },
    profit: 654
  },
  {
    user: {
      avatar: Avatar2,
      name: 'Lolamoeffie',
    },
    profit: 562
  },
  {
    user: {
      avatar: Avatar4,
      name: 'Treber123',
    },
    profit: 521
  },
  {
    user: {
      avatar: Avatar2,
      name: 'hakamuka1',
    },
    profit: 476
  },
  {
    user: {
      avatar: Avatar1,
      name: 'te2000',
    },
    profit: 432
  },
  {
    user: {
      avatar: Avatar5,
      name: 'Gamdom.com',
    },
    profit: 356
  },
  {
    user: {
      avatar: Avatar3,
      name: 'BISHH',
    },
    profit: 312
  },
  {
    user: {
      avatar: Avatar1,
      name: 'andypsx',
    },
    profit: 299
  },
  {
    user: {
      avatar: Avatar4,
      name: 'Chefinator',
    },
    profit: 123
  }
]

const useStyles = makeStyles(() => ({
  no: {
    color: 'white !important',
    width: 100
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

const MostProfit = () => {
  const classes = useStyles()

  return (
    <TableContainer>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell>No #</TableCell>
            <TableCell>User</TableCell>
            <TableCell align="right">Profit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell scope="row" className={classes.no}>
                {index + 1}
              </TableCell>
              <TableCell align="left">
                <div className={classes.user}>
                  <img src={row.user.avatar} alt='User' />
                  {row.user.name}
                </div>
              </TableCell>
              <TableCell align="right">${row.profit}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default MostProfit