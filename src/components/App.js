import React, { Component } from "react";

import { Users } from "../models/Users";

import Header from "./Header"

import Icon from "@material-ui/core/Icon";

import UsersView from "./UsersView";

import { loadUsers } from "../stores/GetUser"

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  pullUser = async () => {
    var local = JSON.parse(localStorage.getItem("list_users"));
    if (local === null) {
      await loadUsers();
      this.setState({ users: JSON.parse(localStorage.getItem("list_users")) });
      console.log("Está usando a API");
    } else {
      this.setState({ users: JSON.parse(localStorage.getItem("list_users")) });

      console.log("Está usando o Local Storage");
    } //loop para ver se existe algum dado na localStorage
  };

  componentDidMount() {
    this.pullUser();
  }

  render() {

    const userList = Users.create();
    return (
      <div className="App">
        <Header/>
        <UsersView userList={this.props.userList} />
        <Icon onClick={userList.getUsers}>close</Icon>
      </div>
    );
  }
}

export default App;
