import React, { Component } from "react";
import { observer } from "mobx-react";
import Icon from "@material-ui/core/Icon";

import UserEdit from "./UserEdit";
import { loadUsers } from "../stores/GetUser";
import { User } from "../models/Users";

class UserEntry extends Component {
  constructor() {
    super();
    this.state = {
      entry: User.create({
        login: "",
        id: 0,
        avatar_url: "",
        html_url: "",
        name: "",
        company: "",
        blog: "",
        location: "",
        public_repos: 0,
        followers: 0
      }),
    };
  }

  pullUser = async () => {
    var local = JSON.parse(localStorage.getItem("list_users"));
    if (local === null) {
      await loadUsers()
      this.props.userList.addUsers(JSON.parse(localStorage.getItem("list_users")))
      console.log("Está usando a API");
      
    } else {
      await this.props.userList.addUsers(JSON.parse(localStorage.getItem("list_users")))
      console.log("Está usando o Local Storage");
      
    } //loop para ver se existe algum dado na localStorage
  };

  componentDidMount () {
    this.pullUser()

 
  }
  render() {
    return (
      <div>
        <UserEdit user={this.state.entry} />
        <Icon onClick={this.onAdd}>add_circle</Icon>
      </div>
    );
  }
  onAdd = () => {
    console.log(this.state.entry)
      this.props.userList.add(this.state.entry)
  }
}

export default observer(UserEntry)