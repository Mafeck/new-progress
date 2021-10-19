import { Switch, Route } from "react-router-dom";
import Group from "../pages/Group";
import Groups from "../pages/Groups";
import Habits from "../pages/Habits";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/habits">
        <Habits />
      </Route>
      <Route exact path="/groups">
        <Groups />
      </Route>
      <Route exact path="/groups/group">
        <Group />
      </Route>
    </Switch>
  );
};

export default Routes;
