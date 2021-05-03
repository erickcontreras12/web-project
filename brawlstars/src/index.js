import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import Login from "./components/login";
import Register from "./components/register";
import resetPassword from "./components/resetPassword";
import Home from "./components/home";
import CreateView from "./components/create";
import EditView from "./components/edit";
import AuthProvider from "./contexts/AuthContext";
import PrivateRoute from './components/privateRoute'

ReactDOM.render(
  <Router>
    <AuthProvider>
      <Switch>
        {/* <Route exact path="/" component={App} /> */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/resetPassword" component={resetPassword} />
        <PrivateRoute exact path="/home" component={Home} />
        <PrivateRoute exact path="/create" component={CreateView} />
        <PrivateRoute exact path="/edit/:brawlerID" component={EditView} />
        <Route render={() => <Redirect to={{ pathname: "/login" }} />} />
      </Switch>
    </AuthProvider>
  </Router>
  ,

  document.getElementById("root")
);
