import React from "react";
import { UserContext } from "./UserContext";
import { Redirect } from "react-router-dom";

class Login extends React.Component {
  static contextType = UserContext;
  state = {
    username: "",
    password: "",
    usersList: [],
    isAuthenticated: false,
    errorMessage: "",
  };
  // componentWillUpdate() {
  //   if (this.context.usersListData) {
  //     this.setState({ usersList: this.context.usersListData });
  //   }
  // }
  handleUserNameInput = (e) => {
    this.setState({ username: e.target.value });
  };
  handlePasswordInput = (e) => {
    this.setState({ password: e.target.value });
  };
  handleLogin = (e) => {
    e.preventDefault();

    const valideUser = this.context.usersListData.find(
      (user) =>
        user.username === this.state.username &&
        user.address.city === this.state.password
    );

    if (valideUser) {
      this.setState({ isAuthenticated: true });
      this.context.setactiveUser(valideUser);
    } else {
      this.setState({ errorMessage: "Niepoprawne dane logowania" });
    }
  };

  render() {
    return (
      <>
        {this.state.isAuthenticated ? (
          <Redirect to={`userProfile/${this.context.activeUser.id}`} />
        ) : (
          <>
            <h1 className="text-primary">Login</h1>

            <form onSubmit={this.handleLogin} className="row g-3">
              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">
                  Username
                </label>
                <input
                  onChange={this.handleUserNameInput}
                  value={this.state.username}
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label">
                  Password
                </label>
                <input
                  onChange={this.handlePasswordInput}
                  value={this.state.password}
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                />
              </div>
              <p>{this.state.errorMessage}</p>
              <div className="col-12">
                <button type="submit" className="btn btn-primary">
                  Sign in
                </button>
              </div>
            </form>
          </>
        )}
      </>
    );
  }
}

export default Login;
