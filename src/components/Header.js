import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styles from "../assets/app.module.scss";

const Header = () => (
  <Grid container className={styles.root} justify="center">
    <Grid container className={styles.header} justify="center">
      <header id="main-header" className={styles.header}>
        <div className={styles.flexCenter}>
          <img className={styles.logo} alt="logo" src="../../logo.svg" />
          <div className={`${styles.addSection} ${styles.flexCenter}`}>
            <TextField
              className={styles.userInput}
              label="Add a user"
            ></TextField>
            <Button variant="contained" className={styles.addButton}>
              Add
            </Button>
          </div>
        </div>
        <hr className={styles.line}></hr>
      </header>
    </Grid>
  </Grid>
);

export default Header;
