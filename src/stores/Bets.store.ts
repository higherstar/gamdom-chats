import { observable, action } from 'mobx'

interface IBet {
  game: string
  user: string
  time: string
  bet: number
  multiplier: number
  payout: number
}

class BetsStore {
  @observable liveBets: IBet[] = []

  @action.bound setBets(bets: IBet[]) {
    this.liveBets = bets
  }
}

export default () => new BetsStore()
