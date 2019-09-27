import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styles from "../assets/app.module.scss";
import { observer } from "mobx-react"
import { loadProfile } from "../services/Api";

class Header extends Component {
  constructor() {
    super()
    this.state = {
      value: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.pullUser()
  }

  pullUser = async () => {
    try {
      await loadProfile(this.state.value) 
      this.props.userList.add(JSON.parse(localStorage.getItem("list_user")))
    } catch {
    }
    } 

  render() {
    return (
      <Grid container className={styles.root} justify="center">
        <Grid container className={styles.header} justify="center">
          <header id="main-header" className={styles.header}>
            <div className={styles.flexCenter}>
              <img className={styles.logo} alt="logo" src="../../logo.svg" />
              <div className={`${styles.addSection} ${styles.flexCenter}`}>
                <TextField
                  className={styles.userInput}
                  label="Add a user"
                  value={this.state.value}
                  onChange={this.handleChange}
                ></TextField>
                <Button
                  variant="contained"
                  className={styles.addButton}
                  onClick={this.handleSubmit}
                >
                  Add
                </Button>
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
