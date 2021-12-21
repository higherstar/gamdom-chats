import styled from 'styled-components'
import { TableContainer as MuiTableContainer } from '@material-ui/core'

const TableContainer = styled(MuiTableContainer)`
  margin-top: 20px;

  thead th {
    background-color: #313d43;
    font-weight: bold;
    color: white;
    border: none;
  }

  tbody {
    td {
      color: #919597;
      border: none;
    }

    tr {
      background-color: #293036;

      &:nth-child(2n + 1) {
        background-color: #1c252c;
      }
    }
  }
`

export { TableContainer }
