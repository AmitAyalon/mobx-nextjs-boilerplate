import FirstStore from './firstStore';
import SecondStore from './secondStore';

export interface IRootStore {
  hydrate: (data: IInitialState) => void;
  firstStore: FirstStore;
  secondStore: SecondStore;
}

export interface IInitialState {
  firstStore: Partial<FirstStore>;
  secondStore: Partial<SecondStore>;
}

export class RootStore {
  firstStore: FirstStore;
  secondStore: SecondStore;

  constructor() {
    this.firstStore = new FirstStore(this);
    this.secondStore = new SecondStore(this);
  }

  hydrate(data: IInitialState) {
    if (!data) return;
    this.firstStore.hydrate(data.firstStore);
    this.secondStore.hydrate(data.secondStore);
  }
}

const rootStore: IRootStore = new RootStore();
export default rootStore;
