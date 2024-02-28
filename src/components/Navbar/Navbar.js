import React from "react";
import { AppBar, Toolbar, Typography, Button, Hidden } from "@mui/material";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import logo from "../../assets/logo.png";
const Navbar = ({
  scrollToHome,
  scrollToAbout,
  scrollToContact,
  scrollToNewsCards,
}) => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.navbar}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.header}>
          <img className={classes.logo} src={logo} alt="logo" />
        </div>
        <Hidden xsDown>
          <div className={classes.navLinks}>
            <Button onClick={scrollToHome} className={classes.navLink}>
              Home
            </Button>
            <Button onClick={scrollToNewsCards} className={classes.navLink}>
              Category
            </Button>
            <Button onClick={scrollToAbout} className={classes.navLink}>
              About
            </Button>
            <Button onClick={scrollToContact} className={classes.navLink}>
              Contact
            </Button>
          </div>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
