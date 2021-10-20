import { Switch, Route } from "react-router-dom";
import Group from "../pages/Group/index.jsx";
import Groups from "../pages/Groups/index.jsx";
import Habits from "../pages/Habits/index.jsx";
import Home from "../pages/Home/index.jsx";
import Register from "../pages/Register/index.jsx";
import Login from "../pages/Login/index.jsx";

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
