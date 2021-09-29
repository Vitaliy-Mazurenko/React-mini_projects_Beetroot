import NewItem from "./components/NewItem";
import ListItems from "./components/ListItems";
import {useAllDoneItem} from "./context/AppContext";

const App = () => {
  const {allDone}=useAllDoneItem();

  return (

<div className="container py-3">
      <NewItem  />
      <div className="row">
            <div className="col-md-5">
                <ListItems title="Unpacked Items" />
            </div>
            <div className="offset-md-2 col-md-5">
                <ListItems title="Packed Items"  />
                <button className="btn btn-danger btn-lg btn-block" onClick={()=>allDone()}>
                    Mark All As Unpacked
                </button>
            </div>
      </div>
    </div>
  );
};

export default App;
