import React from "react";
import Grid from "@material-ui/core/Grid";
import RepoView from "./RepoView";
import styles from "../../assets/app.module.scss";
import { observer } from "mobx-react";

const ReposView = ({ userRepo }) => (
  <Grid container className={`${styles.app} ${styles.flexColumnCenter}`}>
    <Grid container className={`${styles.app} ${styles.flexWrap}`}>
      {userRepo.repos.map((repo, idx) => (
        <RepoView key={idx} repo={repo} />
      ))}
    </Grid>
  </Grid>
);

export default observer(ReposView);
