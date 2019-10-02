import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import UserView from "./UserView";
import styles from "../assets/app.module.scss";
import { observer } from "mobx-react"

class UsersView extends Component {
  render() {
    return <Grid container className={`${styles.app} ${styles.flexColumnCenter}`}>
    <Grid container className={`${styles.app} ${styles.flexWrap}`}>
      {this.props.userList.users.map((user, idx) => (
        <UserView key={idx} user={user}/>
      ))}
      Total of users: {this.props.userList.totalUser}
    </Grid>
  </Grid>
  }
}

export default observer(UsersView);
