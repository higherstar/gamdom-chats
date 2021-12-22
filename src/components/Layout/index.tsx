import React, { ReactNode } from 'react'
import clsx from 'clsx'
import { makeStyles, IconButton } from '@material-ui/core'
import { Chat } from '@material-ui/icons'
import { observer } from 'mobx-react'

import * as S from './styles'
import Header from '../Header'
import Footer from '../Footer'
import ChatSection from '../ChatSection'
import useStores from '../../hooks/useStore'

export interface LayoutProps {
  children?: ReactNode
  isAnonym: boolean
}

const useStyles = makeStyles(() => ({
  content: {
    flexGrow: 1,
    padding: 2,
    transition: 'all ease 0.3s',
    position: 'relative'
  },
  contentShift: {
    marginLeft: 400,
  },
  chatIconBtn: {
    "position": 'absolute',
    "left": 0,
    "top": 0,
    '& svg': {
      color: '#6c747d'
    }
  }
}))

const Layout = ({ children, isAnonym }: LayoutProps) => {
  const classes = useStyles()

  const { chatStore } = useStores()

  const toggleChatSection = () => {
    chatStore.toggleOpen()
  }
  return (
    <S.Root>
      <S.AppContent>
        <S.MainContent>
          <S.Container>
            <Header />
            <div className='body'>
              <ChatSection />
              <div className={clsx(classes.content, {
                [classes.contentShift]: chatStore.isOpen,
              })}>
                {children}
                <Footer />
                <IconButton
                  className={classes.chatIconBtn}
                  onClick={toggleChatSection}
                >
                  <Chat />
                </IconButton>
              </div>
            </div>
          </S.Container>
        </S.MainContent>
      </S.AppContent>
    </S.Root>
  )
}

Layout.defaultProps = {
  isAnonym: false
}

export default observer(Layout)