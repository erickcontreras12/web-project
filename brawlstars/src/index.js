import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'; 
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import Login from './components/login';
import Home from './components/home';
import CreateView from './components/create';
import EditView from './components/edit';

let Colt = { 'name': 'Colt', 'health': 3920, 'damage': 504, 'movement': 3, 'reload': 3, 'super': 'Bullet Storm' };
let Shelly = { 'name': 'Shelly', 'health': 5320, 'damage': 420, 'movement': 3, 'reload': 3, 'super': 'Super Shell' };
let Brock = { 'name': 'Brock', 'health': 3360, 'damage': 1456, 'movement': 3, 'reload': 2, 'super': 'Rocket Rain' };
let Nita = { 'name': 'Nita', 'health': 5600, 'damage': 1232, 'movement': 3, 'reload': 5, 'super': 'Overbearing' };
let Dinamyke = { 'name': 'Dynamike', 'health': 3920, 'damage': 1120, 'movement': 3, 'reload': 3, 'super': 'Big Barrel O Boom' };


if(window.localStorage.length == 0){
  window.localStorage.setItem(0, JSON.stringify(Colt));
  window.localStorage.setItem(1, JSON.stringify(Shelly));
  window.localStorage.setItem(2, JSON.stringify(Brock));
  window.localStorage.setItem(3, JSON.stringify(Nita));
  window.localStorage.setItem(4, JSON.stringify(Dinamyke));
}

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <Router>
    <Switch>
      {/* <Route exact path="/" component={App} /> */}
      <Route exact path="/login" component={Login} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/create" component={CreateView} />
      <Route exact path="/edit/:brawlerID" component={EditView} />
      <Route render={() => <Redirect to={{pathname: "/login"}} />} />
    </Switch>
  </Router>,  
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
