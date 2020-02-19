import { Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import ToggleTheme from "./example1";
import ShopList from "./example2";
import Cart from "./example3";

const App = () => {
  return (
    <div className="container py-3">
      <Navigation />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/toggle">
        <ToggleTheme />
      </Route>
      <Route path="/shoplist">
        <ShopList />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
    </div>
  );
};

export default App;
