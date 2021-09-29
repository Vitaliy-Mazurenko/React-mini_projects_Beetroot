import { useState, useCallback, useMemo } from "react";
import NewItem from "./components/NewItem";
import ListItems from "./components/ListItems";
import { defaultState } from "./data";
import AppContext from './contexts/AppContext';


const App = () => {
  const [items, setItems] = useState(defaultState)

  const packedImtes = items.filter(v => v.packed)
  const unPackedImtes = items.filter(v => !v.packed)

  const addItem = useCallback(newItem => setItems(x => [newItem, ...x]), []); 

  const removeItem = useCallback(id => setItems(x => x.filter(v => v.id !== id)), [])
  
  const toggleItem = useCallback(
     item => setItems(x => x.map(v => v.id !== item.id ? v : {...v, packed: !v.packed})), [])

  const markAllUnpacked = () => setItems(x => x.map(v => ({...v, packed: false})))

 const value= useMemo(() => ({toggleItem, removeItem}), [removeItem, toggleItem])

  return (
    <AppContext.Provider value={value}>
    <div className="container py-3">
      <NewItem  addItem={addItem}/>

      <div className="row">
        <div className="col-md-5">
          <ListItems title="Unpacked Items" items={unPackedImtes}/>
        </div>
        <div className="offset-md-2 col-md-5">
          <ListItems title="Packed Items" items={packedImtes} />
          <button onClick={markAllUnpacked} className="btn btn-danger btn-lg btn-block">
            Mark All As Unpacked
          </button>
        </div>
      </div>
    </div>
    </AppContext.Provider>
  );
};

export default App;
