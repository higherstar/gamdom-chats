import React from 'react'
import { observer } from 'mobx-react'
import { IconButton, InputBase, makeStyles } from '@material-ui/core'
import { Close, ExpandMore, Pets, InsertEmoticon, Telegram } from '@material-ui/icons'

import * as S from './styles'
import useStores from '../../hooks/useStore'
import BGFlag from '../../assets/images/gb.svg'
import UserAvatarImg from '../../assets/images/avatar1.jpg'

const useStyles = makeStyles(() => ({
  drawerPaper: {
    width: 400
  }
}))

const ChatSection = () => {
  const classes = useStyles()
  const { chatStore } = useStores()

  return (
    <S.Drawer
      variant="persistent"
      anchor="left"
      open={chatStore.isOpen}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className='chat-rooms'>
        <div className='chat-rooms-head'>
          <div className='chat-lang'>
            <div className='tab'>
              <img src={BGFlag} alt='GB' />
              <span className='unread' />
            </div>
            <div className='tab selected-channel'>
              <img src={BGFlag} alt='GB' />
              <span className='lan-close'>
                <Close />
              </span>
            </div>
          </div>
          <div className='chat-selector'>
            <span className='chat-link'>
              Chat Rooms <ExpandMore />
            </span>
          </div>
        </div>
        <div className='chatting-chat-msgs'>
          <div className='top-gradient'>

          </div>
          <div className='chat-input-bold'>
            <div className='chat-msgs'>
              {
                new Array(40).fill(0).map(_ => (
                  <div className='chat-msg'>
                    <div className='colorbar user' />
                    <span className='chat-user'>
                  <span className='chat-user-prof'>
                    <img src={UserAvatarImg} alt='User' />
                  </span>
                  <span className='gamdom-logo'>
                    <Pets />
                    <span className='level-val'>1</span>
                  </span>
                  <span className='chat-user-name'>
                    alkdsgin sgknn
                  </span>
                  <span className='chat_user_ico'>
                    <Pets />
                    <span>:</span>
                  </span>
                </span>
                    <span className='chat-content'>
                      asda alskd aglka sdglk g
                    </span>
                  </div>
                ))
              }
            </div>
            <div className='chat-rain'>
              <div className='rains-container'>
                <h5>Rain Bot</h5>
                <p>A rain of $73.06 will start shortly.</p>
                <span className='rain-close'>
                <Close />
              </span>
              </div>
            </div>
            <div className='chat-input'>
              <div className='input-container'>
                <InputBase
                  placeholder="Your message"
                  inputProps={{ 'aria-label': 'search google maps' }}
                />
                <IconButton className='emoticon-btn' size='small'>
                  <InsertEmoticon />
                </IconButton>
                <IconButton className='send-msg-btn' size='small'>
                  <Telegram />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </S.Drawer>
  )
}

export default observer(ChatSection)