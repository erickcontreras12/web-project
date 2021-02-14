import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'; 
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import Login from './components/login';
import Home from './components/home';

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <Router>
    <Switch>
      {/* <Route exact path="/" component={App} /> */}
      <Route exact path="/login" component={Login} />
      <Route exact path="/home" component={Home} />
      <Route render={() => <Redirect to={{pathname: "/login"}} />} />
    </Switch>
  </Router>,  
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
