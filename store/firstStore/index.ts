import { makeAutoObservable } from 'mobx';
import { IRootStore } from '..';

class FirstStore {
  rootStore: IRootStore;
  count = 0;

  constructor(rootStore: IRootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  setIncrement() {
    this.count++;
  }

  setDecrement() {
    this.count--;
  }

  hydrate(data: any) {
    if (!data) return;
    //* if initialState will not be set from the server, then the state will be undefined
    // this.count = data.count;
  }
}

export default FirstStore;
