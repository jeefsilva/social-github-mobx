import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styles from "../assets/app.module.scss";
import { observer } from "mobx-react";
import Logo from "../assets/logo.svg";

class Header extends Component {
  handleSubmit = event => {
    event.preventDefault();
    this.props.userList.addApi(event.target.login.value);
  };

  render() {
    return (
      <Grid container className={styles.root} justify="center">
        <Grid container className={styles.header} justify="center">
          <header id="main-header" className={styles.header}>
            <div className={styles.flexCenter}>
              <img className={styles.logo} alt="logo" src={Logo} />
              <div className={`${styles.addSection} ${styles.flexCenter}`}>
                <form onSubmit={this.handleSubmit}>
                  <TextField
                    className={styles.userInput}
                    label="Add a user"
                    name="login"
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
