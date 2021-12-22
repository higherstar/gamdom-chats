import styled from 'styled-components'
import { Drawer as MuiDrawer } from '@material-ui/core'

const Drawer = styled(MuiDrawer)`
	border-right: 0;
	overflow-x: hidden;

	.MuiPaper-root {
    height: calc(100vh - 60px);
    margin-top: 60px;
		border-right: 0;
    background: ${props => props.theme.colors.grey};
    z-index: 1 !important;
    box-shadow: 0 0 10px 0 #141a1d;
	}

  .chat-rooms {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;

    .chat-rooms-head {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 10px 0;
      background: #29363e;
      font-size: 13px;
      line-height: 1.1875;
      z-index: 1;

      .chat-lang {
        .tab {
          display: table-cell;
          cursor: pointer;
          padding: 4px;
          text-align: center;
          border-radius: 5px 5px 0 0;
          color: #656565;
          background: #27363d;
          transition: all .4s ease;
          position: relative;
          opacity: 0.6;

          &.selected-channel {
            color: #64757c;
            background: #2b3e46;
            width: 52px;
            display: table-cell!important;
            opacity: 1;

            img {
              margin-right: 15px;
            }
          }

          img {
            width: 23px;
            height: 18px;
            margin-top: 6px;
            margin-right: 7px;
          }

          &:hover {
            opacity: 1;
          }

          .lan-close {
            position: absolute;
            right: 1px;
            top: 10px;
            margin-left: 5px;

            svg {
              font-size: 16px;
              color: #adadad;
            }
          }

          .unread {
            position: absolute;
            right: 2px;
            background-color: ${props => props.theme.colors.green};
            width: 6px;
            height: 6px;
            border-radius: 50%;
          }
        }
      }

      .chat-selector {
        .chat-link {
          display: flex;
          align-items: center;
          color: #64757c;
          font-weight: 500;
          font-size: 13px;
          cursor: pointer;
          outline: none;
          margin-bottom: 10px;

          &:hover {
            color: #adbec6;
          }
        }
      }
    }

    .chatting-chat-msgs {
      position: relative;
      background-color: #2f3e45;
      flex: 1;
      max-height: calc(100% - 43px);

      .top-gradient {
        pointer-events: none;
        flex: none;
        height: 8vh;
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 2;
        background-image: linear-gradient(rgba(43,62,70) 0%,rgba(43,62,70,0));
      }

      .chat-input-bold {
        position: relative;
        display: flex;
        flex-direction: column;
        flex: 1;
        height: 100%;
        z-index: 1;

        .chat-msgs {
          flex: 1;
          overflow-y: scroll;
          padding: 0 4px;

          .colorbar {
            position: absolute;
            top: 0;
            left: -7px;
            height: 100%;
            width: 3px;
            background-color: #fff;

            &.rain {
              background-color: #6495ed;
            }

            &.user {
              display: none;
            }
          }

          ::-webkit-scrollbar {
            width: 5px;
            height: 4px;
            background-color: transparent;
          }

          ::-webkit-scrollbar-corner {
            background-color: transparent;
          }

          ::-webkit-scrollbar-thumb {
            border: none;
            -webkit-border-radius: 2px;
            background-color: #607d8b;
          }

          ::-webkit-scrollbar-track {
            background: 0 0;
          }
        }

        .chat-rain {
          position: relative;
          padding: 5px 9px 0;
          background-color: #2f3e45;

          .rains-container {
            border-radius: 3px;
            position: relative;
            margin-top: 5px;
            background: linear-gradient(270deg,rgba(100,149,237,0.53) 0%,rgba(58,84,116,0.53) 100%);
            min-height: 66px;
            padding: 15px;

            h5 {
              color: #fff;
              font-size: 15px;
              font-weight: 500;
              margin: 0;
            }

            p {
              line-height: 18px;
              font-size: 13px;
              color: #acbfc6;
              font-weight: 400;
              margin-top: 5px;
              margin-bottom: 0;
            }

            .rain-close {
              position: absolute;
              top: 3px;
              right: 3px;
              cursor: pointer;

              svg {
                font-size: 16px;
                color: #ffffff8c;
              }
            }
          }
        }

        .chat-input {
          padding: 10px 20px 20px;
          position: relative;
          display: flex;

          .input-container {
            display: flex;
            background-color: #243037;
            height: 50px;
            padding: 10px 10px 10px 20px;
            width: 100%;
            border-radius: 5px;
            color: #adbec6;
            font-size: 16px;
            line-height: 1.3125;

            .MuiInputBase-root {
              flex: 1;
              color: white;
              padding-right: 10px;
            }

            .emoticon-btn {
              svg {
                color: #607d8b;
              }
            }

            .send-msg-btn {
              svg {
                color: ${props => props.theme.colors.green};
              }
            }
          }
          }
        }
      }
    }
  }
`

const ChatMsgItem = styled.div`
  padding: 3px 0 3px 28px;
  margin: 0 3px;

  :nth-child(odd) {
    background-color: #2b3840;
  }

  .chat-user {
    display: inline-flex;
    align-items: center;
    margin-left: -26px;

    .chat-user-prof {
      img {
        width: 20px;
        height: 20px;
        border-radius: 5px;
      }
    }

    .gamdom-logo {
      display: flex;
      align-items: center;
      line-height: 1;
      border-radius: 5px;
      padding: 2px 5px;
      min-height: 20px;
      position: relative;
      text-align: right;
      background-color: #3d5059;
      margin-left: 5px;

      svg {
        width: 16px;
        height: 16px;
      }
    }

    .chat-user-name {
      font-size: 14px;
      color: #acbfc6;
      margin-left: 5px;
      cursor: pointer;
    }

    .chat_user_ico {
      display: flex;
      align-items: center;
      color: #adbec6;
      margin-left: 5px;

      svg {
        width: 16px;
        height: 16px;
      }

      span {
        padding: 0 5px 0 2px;
      }
    }
  }

  .chat-content {
    position: relative;
    top: -5px;
    color: #fff;
    font-size: 14px;
    line-height: 15px;
    vertical-align: middle;
    word-break: break-word;
    margin-left: 4px;
  }
`

export { Drawer, ChatMsgItem }