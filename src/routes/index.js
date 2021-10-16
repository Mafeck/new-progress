import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home/index.jsx";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
