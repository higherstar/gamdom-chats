import once from 'lodash/once'

import BetsStore from './Bets.store'

const BETSSTORE = 'BetsStore'

export const STORE_KEYS = {
  BETSSTORE,
}

export default once(() => {
  const betsStore = BetsStore()

  return {
    [STORE_KEYS.BETSSTORE]: betsStore,
  }
})
