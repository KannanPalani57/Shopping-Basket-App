import Home from "./components/shop/Home"
import Basket from "./components/shop/Basket";
import NavBar from "./components/NavBar";
import { Switch, Route } from "react-router-dom";

function App(props) {
  return (
    <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component = {Home} />
          <Route exact path="/basket" component={Basket} />
        </Switch>  
    </div>
  );
}


export default App;