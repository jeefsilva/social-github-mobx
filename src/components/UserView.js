import React, { Component } from "react";
import { observer } from "mobx-react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import styles from "../assets/app.module.scss";
import UserEdit from "./UserEdit";
import { clone, getSnapshot, applySnapshot } from "mobx-state-tree";

class UserView extends Component {
  constructor() {
    super();
    this.state = { isEditing: false };
  }

  render() {
    const { user } = this.props;
    console.log(user);
    return this.state.isEditing ? (
      this.renderEditable()
    ) : (
      <Paper className={styles.card} key={user.id}>
        <div className={styles.flexSpaceBetween}>
          <Typography variant="h6" className={styles.nickname}>
            {" "}
            {user.login}
          </Typography>
          <a rel="noopener noreferrer" href={user.html_url} target="_blank">
            <Icon className={styles.icon}>account_circle</Icon>
          </a>
        </div>

        <img className={styles.avatar} alt="teste" src={user.avatar_url} />

        <Typography className={styles.disabled} variant="subtitle1">
          Name
        </Typography>
        <Typography
          variant="h5"
          className={`${styles.name} ${styles.textHeight}`}
        >
          {" "}
          {user.name}
        </Typography>

        <Typography className={styles.disabled} variant="subtitle2">
          Blog
        </Typography>
        <a rel="noopener noreferrer" href={user.blog} target="_blank">
          <Typography
            variant="body1"
            className={`${styles.blog} ${styles.textHeight}`}
          >
            {" "}
            {user.blog}{" "}
          </Typography>
        </a>
        <Typography className={styles.disabled} variant="subtitle2">
          Location
        </Typography>
        <Typography
          variant="body1"
          className={`${styles.location} ${styles.textHeight}`}
        >
          {" "}
          {user.location}{" "}
        </Typography>
        <div className={styles.flex}>
          <div className={`${styles.flexColumn} ${styles.marginRepos}`}>
            <Typography className={styles.disabled} variant="subtitle2">
              Public Repos
            </Typography>
            <Typography
              variant="body1"
              className={`${styles.repos} ${styles.textHeight}`}
            >
              {" "}
              {user.public_repos}{" "}
            </Typography>
          </div>
          <div className={styles.flexColumn}>
            <Typography className={styles.disabled} variant="subtitle2">
              Followers
            </Typography>
            <Typography
              variant="body1"
              className={`${styles.followers} ${styles.textHeight}`}
            >
              {" "}
              {user.followers}{" "}
            </Typography>
          </div>
        </div>

        <hr className={styles.line}></hr>
        <div className={styles.flexSpaceBetween}>
          <Icon onClick={this.onToggleEdit}>edit</Icon>
          <Icon onClick={user.remove}>close</Icon>
        </div>
      </Paper>
    );
  }

  renderEditable() {
    return (
      <div className={styles.flexSpaceBetween}>
        <UserEdit user={this.state.clone} />
        <Icon onClick={this.onSaveEdit}>save</Icon>
        <Icon onClick={this.onCancelEdit}>close</Icon>
      </div>
    );
  }

  onToggleEdit = () => {
    this.setState({ isEditing: true, clone: clone(this.props.user) });
  };

  onCancelEdit = () => {
    this.setState({ isEditing: false });
  };

  onSaveEdit = () => {
    applySnapshot(this.props.user, getSnapshot(this.state.clone));
    this.setState({ isEditing: false, clone: null });
  };
}

export default observer(UserView);
