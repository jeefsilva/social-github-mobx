import React, { Component } from "react";
import ReposView from "./ReposView";
import styles from "../../assets/app.module.scss";
import { inject, observer } from "mobx-react"


class Repos extends Component {
  render() {
    return (
      <div className={styles.flexColumnCenter}>
        <ReposView userRepo={this.props.userRepo}/>
      </div>
    );
  }
}

export default inject("userRepo")(observer(Repos));
