import { action, observable, makeObservable } from 'mobx';
import BaseStore from './BaseStore'

class ChatStore extends BaseStore {
  isOpen: boolean = true

  constructor() {
    super();

    makeObservable(this, {
      isOpen: observable,

      toggleOpen: action,
    });
  }

  toggleOpen(open?: boolean) {
    this.isOpen = open || !this.isOpen
  }
}

export default new ChatStore()
