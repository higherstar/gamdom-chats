import React, { ReactNode } from 'react'

import * as S from './styles'
import Header from '../Header'
import Footer from '../Footer'

export interface LayoutProps {
  children?: ReactNode
  isAnonym: boolean
}

const Layout = ({ children, isAnonym }: LayoutProps) => {
  return (
    <S.Root>
      <S.AppContent>
        <S.MainContent>
          <S.Container>
            <Header />
            {children}
            <Footer />
          </S.Container>
        </S.MainContent>
      </S.AppContent>
    </S.Root>
  )
}

Layout.defaultProps = {
  isAnonym: false
}

export default Layout
