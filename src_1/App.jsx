import NewItem from "./components/NewItem";
import ListItems from "./components/ListItems";
import "./components/Item.css";
import { useMarkAllUnpacked, useInitItems } from "./context/AppContext";

const App = (props) => {
  const { packedItems, unPackedItems } = useInitItems();
  const markAllUnPacked = useMarkAllUnpacked();

  return (
    <div className="container py-3">
      <NewItem />
      <div className="row">
        <div className="col-md-5">
          <ListItems title="Unpacked Items" items={unPackedItems} />
        </div>
        <div className="offset-md-2 col-md-5">
          <ListItems title="Packed Items" items={packedItems} />
          <button
            className="btn btn-danger btn-lg btn-block"
            onClick={markAllUnPacked}
          >
            Mark All As Unpacked
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
