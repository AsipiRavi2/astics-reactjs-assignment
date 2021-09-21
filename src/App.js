import { Route, Switch } from 'react-router';
import './App.css';
import Login from './comps/login/Login';
import Home from './comps/Home';
import Menu from './comps/Menu';
// import SignUp from './comps/SignUp';
import Logout from './comps/Logout';
import Inventory from './comps/inventory/Inventory';
import PrivateRoute from './comps/customRoutes/PrivateRoute';
import PublicRoute from './comps/customRoutes/PublicRoute';
import NotFound from './comps/NotFound';

function App() {
  return (
    <div className="App">
      <Menu />
        <Switch>
          <PublicRoute component={Home} path="/" exact />
          <PublicRoute component={Login} path="/login" exact />
          <PrivateRoute component={Inventory} path="/inventory" exact />
          <PrivateRoute component={Logout} path="/logout" exact />
          <Route exact path="*">
            <NotFound />
          </Route>
          {/* <Route exact path="/login">
            <Login />
          </Route> */}
          {/* <Route exact path="/inventory">
            <Inventory />
          </Route> */}

          {/* <Route exact path="/logout">
            <Logout />
          </Route> */}
          {/* <Route exact path="/">
            <Home />
          </Route> */}
        </Switch>
      <Menu />
    </div>
  );
}

export default App;
