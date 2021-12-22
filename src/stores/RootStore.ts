class RootStore {
  chatStore = null;

  constructor(stores) {
    Object.keys(stores).forEach((storeName) => {
      this[storeName] = stores[storeName];
      stores[storeName].setRootStore(this);
    });
  }
}

export default RootStore;
