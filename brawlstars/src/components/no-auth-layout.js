import { Component } from "react";
import './styles/login.css';

class LayoutNoAuth extends Component {
  render() {
    return (
      <div className="body_login">
        <div className="container-fluid">
          <div className="row">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default LayoutNoAuth;