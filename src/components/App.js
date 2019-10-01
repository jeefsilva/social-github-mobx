import React, { Component } from "react";
import Header from "./Header";
import UsersView from "./UsersView";
import styles from "../assets/app.module.scss";
import { inject, observer } from "mobx-react"


class App extends Component {
  render() {
    return (
      <div className={styles.flexColumnCenter}>
        <Header userList={this.props.userList} />
        <UsersView userList={this.props.userList} />
      </div>
    );
  }
}

export default inject("userList")(observer(App));
