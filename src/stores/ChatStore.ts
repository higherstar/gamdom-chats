import { action, observable, makeObservable } from 'mobx'

import BaseStore from './BaseStore'
import { IMsg } from '../resources/interfaces'

class ChatStore extends BaseStore {
  isOpen: boolean = true
  msgList: IMsg[] = []

  constructor() {
    super();

    makeObservable(this, {
      isOpen: observable,
      msgList: observable,

      toggleOpen: action,
      addMsg: action
    });
  }

  toggleOpen(open?: boolean) {
    this.isOpen = open || !this.isOpen
  }

  addMsg(msg: IMsg) {
    this.msgList.push(msg)
  }
}

export default new ChatStore()
