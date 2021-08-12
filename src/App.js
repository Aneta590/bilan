import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import Login from "./Login.jsx";
import UserList from "./UserList.jsx";
import UserProfile from "./UserProfile.jsx";
import PageNotFound from "./PageNotFound.jsx";
import Navigation from "./Navigation";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      user: null,
    };
  }

  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/userList" component={UserList} />
          <Route path="/userProfile/:id" component={UserProfile} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
