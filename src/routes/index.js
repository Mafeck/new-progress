import { Switch, Route } from "react-router-dom";
import Group from "../pages/Group";
import Groups from "../pages/Groups";
import Habits from "../pages/Habits";
// import Home from "../pages/Home";
import Register from "../pages/Register";
// import Login from "../pages/Login";

const Routes = () => {
  return (
    <Switch>
      {/* <Route exact path="/">
        <Home />
      </Route> */}
      <Route path="/register">
        <Register />
      </Route>
      {/* <Route path="/login">
        <Login />
      </Route> */}
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
