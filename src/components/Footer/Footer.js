import React from "react";
import useStyles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <div className={classes.createdBy}>
        &copy; {new Date().getFullYear()} Alan News. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
