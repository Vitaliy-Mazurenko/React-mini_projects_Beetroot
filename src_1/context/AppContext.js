import { createContext, useState, useContext } from "react";
import { defaultState } from "../data";

export const AppStateContext = createContext();
export const AppDispatchContext = createContext();

export function AppContextProvider({ children }) {
  const [items, setItems] = useState(defaultState);

  return (
    <AppStateContext.Provider value={items}>
      <AppDispatchContext.Provider value={setItems}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
}

export const useAppStateContext = () => {
  const context = useContext(AppStateContext);
  if (!context) {
    throw Error("useAppCotext must be invoke within AppContext");
  }
  return context;
};

export const useAppDispatchContext = () => {
  const context = useContext(AppDispatchContext);
  if (!context) {
    throw Error("useAppCotext must be invoke within AppContext");
  }
  return context;
};

export function useToggleChecked() {
  const setItems = useAppDispatchContext();
  return (toggledItem) => {
    setItems((items) =>
      items.map((item) =>
        item.id === toggledItem.id ? { ...item, packed: !item.packed } : item
      )
    );
  };
}

export function useDeleteItem() {
  const setItems = useAppDispatchContext();
  return (id) => setItems((items) => items.filter((item) => item.id !== id));
}

export function useAddItem() {
  const setItems = useAppDispatchContext();
  return (newItem) => setItems((items) => [...items, newItem]);
}

export function useMarkAllUnpacked() {
  const setItems = useAppDispatchContext();
  return () => {
    setItems((items) => items.map((item) => ({ ...item, packed: false })));
  };
}

export function useInitItems() {
  const items = useAppStateContext();
  const packedItems = items.filter((item) => item.packed);
  const unPackedItems = items.filter((item) => !item.packed);
  return { packedItems, unPackedItems };
}
