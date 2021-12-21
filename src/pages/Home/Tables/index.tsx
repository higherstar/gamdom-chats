import React, { useState } from 'react'

import * as S from '../styles'
import LiveBets from './LiveBets'
import MostWagered from './MostWegered'
import MostProfit from './MostProfit'

const Tables = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(1)

  return (
    <S.TablesContainer>
      <div className='header'>
        <div className='tab-container'>
          <div
            className={`tab-item ${activeTabIndex === 1 ? 'active' : ''}`}
            onClick={() => setActiveTabIndex(1)}
          >
            Live Bets
          </div>
          <div
            className={`tab-item ${activeTabIndex === 2 ? 'active' : ''}`}
            onClick={() => setActiveTabIndex(2)}
          >
            Most Wagered
          </div>
          <div
            className={`tab-item ${activeTabIndex === 3 ? 'active' : ''}`}
            onClick={() => setActiveTabIndex(3)}
          >
            Most Profit
          </div>
        </div>
        <span>1,056,710,744 Total Bets</span>
      </div>
      <div className='content'>
        {
          activeTabIndex === 1 && <LiveBets />
        }
        {
          activeTabIndex === 2 && <MostWagered />
        }
        {
          activeTabIndex === 3 && <MostProfit />
        }
      </div>
    </S.TablesContainer>
  )
}

export default Tables