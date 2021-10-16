import { Switch, Route } from "react-router-dom";
import Dashboard from "../pages/DashBoard";
import Groups from "../pages/Groups";
import Habits from "../pages/Habits";
// import Home from "../pages/Home";
import Register from "../pages/Register";

const Routes = () => {
  return (
    <Switch>
      {/* <Route exact path="/">
        <Home />
      </Route> */}
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login">
        <Register />
      </Route>
      <Route path="/habits">
        <Habits />
      </Route>
      <Route path="/groups">
        <Groups />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
    </Switch>
  );
};

export default Routes;
