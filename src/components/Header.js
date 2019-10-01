import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styles from "../assets/app.module.scss";
import { observer } from "mobx-react";

class Header extends Component {
  handleChange = event => {
    this.props.userList.login = event.target.value;
  };

  search(event) {
    const termToSearch = this.props.userList.login;
    this.props.userList.addApi(termToSearch)
    event.preventDefault();
  }

  render() {
    const { userList } = this.props;
    return (
      <Grid container className={styles.root} justify="center">
        <Grid container className={styles.header} justify="center">
          <header id="main-header" className={styles.header}>
            <div className={styles.flexCenter}>
              <img className={styles.logo} alt="logo" src="../../logo.svg" />
              <div className={`${styles.addSection} ${styles.flexCenter}`}>
                <form onSubmit={this.search.bind(this)}>
                <TextField
                  className={styles.userInput}
                  label="Add a user"
                  value={userList.login}
                  onChange={this.handleChange}
                ></TextField>
                <Button
                  variant="contained"
                  className={styles.addButton}
                  type="submit"
                >
                  Add
                </Button>
                </form>
              </div>
            </div>
            <hr className={styles.line}></hr>
          </header>
        </Grid>
      </Grid>
    );
  }
}

export default observer(Header);
