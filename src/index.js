import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import Home from "./component/Test";
import Login from "./component/Login";
import Register from "./component/CreateUser";

import axios from "axios";
import $ from "jquery";

class Apps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {}
    };
  }
  _loginUser = (email, password) => {
    $("#login-form button")
      .attr("disabled", "disabled")
      .html(
        '<i class="fa fa-spinner fa-spin fa-1x fa-fw"></i><span class="sr-only">Loading...</span>'
      );
    var formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    axios
      .post("http://localhost:8000/api/user/login/", formData)
      .then(response => {
        console.log(response);
        return response;
      })
      .then(json => {
        if (json.data.success) {
          alert("Login Successful!");
          const { name, email, auth_token } = json.data.data;

          let userData = {
            name,        
            email,
            auth_token,
            timestamp: new Date().toString()
          };
          let appState = {
            isLoggedIn: true,
            user: userData
          };
          // save app state with user date in local storage
          localStorage["appState"] = JSON.stringify(appState);
          this.setState({
            isLoggedIn: appState.isLoggedIn,
            user: appState.user
          });
        } else alert("Login Failed!");

        $("#login-form button")
          .removeAttr("disabled")
          .html("Login");
      })
      .catch(error => {
        alert(`An Error Occured! ${error}`);
        $("#login-form button")
          .removeAttr("disabled")
          .html("Login");
      });
  };

  _registerUser = (name, email, password) => {
    $("#login-button")
      .attr("disabled", "disabled")
      .html(
        '<i class="fa fa-spinner fa-spin fa-1x fa-fw"></i><span class="sr-only">Loading...</span>'
      );

    var formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);

    axios
      .post("https://test-binar.herokuapp.com/auth/signup", formData)
      .then(response => {
        console.log(response);
        return response;
      })
      .then(json => {
        if (json.data.success) {
          alert(`Registration Successful!`);
          const { name, email, auth_token } = json.data.data;
          let userData = {
            name,        
            email,
            auth_token,
            timestamp: new Date().toString()
          };
          let appState = {
            isLoggedIn: true,
            user: userData
          };
          // save app state with user date in local storage
          localStorage["appState"] = JSON.stringify(appState);
          this.setState({
            isLoggedIn: appState.isLoggedIn,
            user: appState.user
          });
          // redirect home
          //this.props.history.push("/");
        } else {
          alert(`Registration Failed!`);
          $("#login-button")
            .removeAttr("disabled")
            .html("Register");
        }
      })
      .catch(error => {
        alert("An Error Occured!" + error);
        console.log(`${formData} ${error}`);
        $("#login-button")
          .removeAttr("disabled")
          .html("Register");
      });
  };

  _logoutUser = () => {
    let appState = {
      isLoggedIn: false,
      user: {}
    };
    // save app state with user date in local storage
    localStorage["appState"] = JSON.stringify(appState);
    this.setState(appState);
  };

  componentDidMount() {
    let state = localStorage["appState"];
    if (state) {
      let AppState = JSON.parse(state);
      console.log(AppState);
      this.setState({ isLoggedIn: AppState.isLoggedIn, user: AppState });
    }
  }

  render() {
    console.log(this.state.isLoggedIn);
    console.log("path name: " + this.props.location.pathname);
    if (
      !this.state.isLoggedIn &&
      this.props.location.pathname !== "/login" &&
      this.props.location.pathname !== "/register"
    ) {
      console.log(
        "you are not logged in, go to login page"
      );
      this.props.history.push("/login");
    }
    if (
      this.state.isLoggedIn &&
      (this.props.location.pathname === "/login" ||
        this.props.location.pathname === "/register")
    ) {
      console.log(
        "you are logged in"
      );

      this.props.history.push("/");
    }
    return (
      <Switch data="data">
        <div id="main">
          <Route
            exact
            path="/"
            render={props => (
              <Home
                {...props}
                logoutUser={this._logoutUser}
                user={this.state.user}
              />
            )}
          />

          <Route
            path="/login"
            render={props => <Login {...props} loginUser={this._loginUser} />}
          />

          <Route
            path="/register"
            render={props => (
              <Register {...props} registerUser={this._registerUser} />
            )}
          />
        </div>
      </Switch>
    );
  }
}

const AppContainer = withRouter(props => <Apps {...props} />);
// console.log(store.getState())

ReactDOM.render(
  <BrowserRouter>
    <AppContainer />
  </BrowserRouter>,

  document.getElementById("root")
);
