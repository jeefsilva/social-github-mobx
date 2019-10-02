import React, { Component } from "react";
import ReposView from "./ReposView";
import styles from "../../assets/app.module.scss";
import { inject, observer } from "mobx-react"


class Repos extends Component {
  render() {
    const login = this.props.match.params.login
    const result = this.props.userList.getUserByName(login)
    return (
      <div className={styles.flexColumnCenter}>
        <ReposView userRepo={result}/>
      </div>
    );
  }
}

export default inject("userList")(observer(Repos));
