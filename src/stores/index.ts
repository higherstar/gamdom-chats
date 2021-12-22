import ChatStore from './ChatStore'
import RootStore from './RootStore'

const stores = {
  chatStore: ChatStore,
};

const rootStore = new RootStore(stores)

export default { ...stores, rootStore }
