'use client';
import { enableStaticRendering } from 'mobx-react-lite';
import { createContext, useContext } from 'react';
import { IRootStore, RootStore } from '@/store';
import { IInitialState } from '../store/index';

enableStaticRendering(typeof window === 'undefined');

let store: IRootStore;
export const StoreContext = createContext<IRootStore | undefined>(undefined);

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};

export const StoreProvider = ({
  children,
  initialState: initialData,
}: {
  children: React.ReactNode;
  initialState: IInitialState;
}) => {
  const store = initializeStore(initialData);

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

const initializeStore = (initialData: IInitialState): IRootStore => {
  const _store = store ?? new RootStore();
  // if the store is already defined, hydrate it with the initial data
  if (initialData) {
    _store.hydrate(initialData);
  }
  // Server-side rendering always creates a new store instance
  if (typeof window === 'undefined') return _store;
  // Client-side rendering always reuses the same store instance
  if (!store) store = _store;

  return _store;
};
