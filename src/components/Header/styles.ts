import styled from 'styled-components'
import { Button as MuiButton } from '@material-ui/core'

const Container = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  width: calc(100% - 5px);
  background-color: ${props => props.theme.colors.grey};
  height: 60px;
  padding: 8px 10px;
  z-index: 2;

  .left, .right {
    flex: 1;
  }

  .wallet-header {
    display: flex;
  }

  .left {
    display: flex;
    align-items: center;

    .menu-button {
      svg {
        color: lightslategray;
        font-size: 30px;
      }
    }

    .users {
      display: flex;
      align-items: center;
      padding: 5px 10px;
      margin-left: 20px;
      border-radius: 5px;
      background-color: ${props => props.theme.colors.charcoal};
      color: ${props => props.theme.colors.green};
    }
  }

  .right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    cursor: pointer;

    a {
      color: ${props => props.theme.colors.green};
      text-decoration: none;
      margin-right: 20px;
    }

    .king-of-hill {
      display: flex;
      align-items: flex-end;

      img {
        height: 50px;
      }
    }

    .notification-btn {
      svg {
        font-size: 26px;
        color: lightgray;
      }
    }

    .user-menu {
      display: flex;
      align-items: center;
      border-radius: 5px;
      background-color: #3c5059;
      padding: 7px 15px 7px 10px;
      color: lightgray;
      cursor: pointer;

      .gamdom-logo {
        background-color: #b8c7ce;
        border-radius: 5px;
        color: ${props => props.theme.colors.dark};
        padding: 5px;
        margin-right: 15px;
        font-size: 16px;

        svg {
          font-size: 15px;
          margin-right: 5px;
        }
      }
    }
  }
`

const WalletButton = styled(MuiButton)`
  &.MuiButton-root {
    background-color: ${props => props.theme.colors.green};
    color: ${props => props.theme.colors.dark};
    transition: all ease 0.3s;
    font-weight: bold;

    &:hover {
      background-color: ${props => props.theme.colors.green};
      opacity: 0.8;
    }
  }
`

export { Container, WalletButton }