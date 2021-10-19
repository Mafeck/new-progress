import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home/index.jsx";
import Register from "../pages/Register/index.jsx";
import Login from "../pages/Login/index.jsx";
import Group from "../pages/Group/index.jsx";
import Groups from "../pages/Groups/index.jsx";
import Habits from "../pages/Habits/index.jsx";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/habits">
        <Habits />
      </Route>
      <Route path="/groups">
        <Groups />
      </Route>
      <Route path="/groups/group">
        <Group />
      </Route>
    </Switch>
  );
};

export default Routes;
