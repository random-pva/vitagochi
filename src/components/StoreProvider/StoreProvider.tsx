import React, { Dispatch, SetStateAction, useContext, useState } from 'react';

import { Store } from 'types/Store';

//@ts-ignore
const StoreContext = React.createContext<[Store, (newStore) => void]>(null);

const defaultStore: Store = {
  animal: '',
  name: '',
  age: 0,
  food: 10,
}

const useStore = () => {
  return useContext(StoreContext);
}

type StoreProviderProps = {
  children: JSX.Element;
}

function StoreProvider({children}: StoreProviderProps): JSX.Element {
  const local = localStorage.getItem('store');
  const decodedLocal = local ? JSON.parse(local) : '';

  const [store, setStoreOrig] = useState<Store>(decodedLocal || defaultStore);

  const setStore = (newStore: Store) => {
    localStorage.setItem('store', JSON.stringify(newStore));
    return setStoreOrig(newStore);
  }

  return (
    <StoreContext.Provider value={[store, setStore]}>
      { children }
    </StoreContext.Provider>
  );
}

export { StoreProvider, useStore }
