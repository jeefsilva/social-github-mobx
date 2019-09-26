import React, { Component } from "react";
import { observer } from "mobx-react";
import Icon from "@material-ui/core/Icon";

import UserEdit from "./UserEdit";

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
      })
    };
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
      this.props.userList.add(this.state.entry)
      this.setState({
          entry: User.create({ login: "",
          id: 0,
          avatar_url: "",
          html_url: "",
          name: "",
          company: "",
          blog: "",
          location: "",
          public_repos: 0,
          followers: 0 })
      })
  }
}

export default observer(UserEntry)