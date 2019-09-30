import React from "react";
import Grid from "@material-ui/core/Grid";
import UserView from "./UserView";
import styles from "../assets/app.module.scss";
import { observer } from "mobx-react"

const UsersView = ({ userList }) => (
  <Grid container className={`${styles.app} ${styles.flexColumnCenter}`}>
    <Grid container className={`${styles.app} ${styles.flexWrap}`}>
      {userList.users.map((user, idx) => (
        <UserView key={idx} user={user} />
      ))}
      Total of users: {userList.totalUser}
    </Grid>
  </Grid>
);

export default observer(UsersView);
