import React, { Component } from "react";
import { observer } from "mobx-react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import styles from "../../assets/app.module.scss";

class RepoView extends Component {
  render() {
    const { repo } = this.props;
    return (
      <Paper className={styles.card} key={repo.id}>
        <Typography className={styles.disabled} variant="subtitle1">
          Name of Repo
        </Typography>
        <Typography
          variant="h5"
          className={`${styles.name} ${styles.textHeight}`}
        >
          {" "}
          {repo.name}
        </Typography>

        <Typography className={styles.disabled} variant="subtitle2">
          Total of Stargazers
        </Typography>
            {" "}
            {repo.stargazers_count}{" "}
        <Typography className={styles.disabled} variant="subtitle2">
          Language in use
        </Typography>
        <Typography
          variant="body1"
          className={`${styles.location} ${styles.textHeight}`}
        >
          {" "}
          {repo.language}{" "}
        </Typography>
      </Paper>
    );
  }
}

export default observer(RepoView);
