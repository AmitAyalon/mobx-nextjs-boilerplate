import { makeAutoObservable } from 'mobx';
import { IRootStore } from '..';

class SecondStore {
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
    this.count = data.count;
  }
}

export default SecondStore;
