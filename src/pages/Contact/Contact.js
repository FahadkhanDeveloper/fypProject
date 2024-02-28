import React from "react";
import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@material-ui/core";
import {
  Phone,
  Email,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  WhatsApp,
} from "@material-ui/icons";
import useStyles from "./styles";

const Contact = ({ sectionRef }) => {
  const classes = useStyles();

  return (
    <div className={classes.root} ref={sectionRef}>
      <Typography variant="h4" align="center" className={classes.title}>
        Contact Us
        <hr
          style={{
            height: "7px",
            width: "13rem",
            backgroundColor: "#1f9ac7",
          }}
        />
      </Typography>
      <hr style={{ color: "black", height: "2px" }} />
      <Grid container spacing={10}>
        {/* Left side */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="h3"
            className={classes.leftContent}
            style={{ fontWeight: "bold", color: "darkblue" }}
          >
            ALAN NEWS
          </Typography>
          <Typography variant="h4" className={classes.leftContent}>
            PLAFFORM
          </Typography>
          <Typography variant="body1" className={classes.leftContent}>
            Now you can join us the platform and get easily find any news with
            one click our assistant will help you quickly
          </Typography>
        </Grid>

        {/* Center */}
        <Grid item xs={12} md={4} className={classes.center}>
          <Typography variant="h5" className={classes.centerTitle}>
            Useful Links
          </Typography>
          <div className={classes.lists}>
            <List>
              <ListItem>
                <ListItemText
                  primary="Home"
                  inset
                  className={classes.customListItemText}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Categories"
                  inset
                  className={classes.customListItemText}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="About"
                  inset
                  className={classes.customListItemText}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Contact"
                  inset
                  className={classes.customListItemText}
                />
              </ListItem>
            </List>
          </div>
        </Grid>

        {/* Right side */}
        <Grid item xs={12} md={4}>
          <div className={classes.phone}>
            <IconButton
              className={classes.socialIcon}
              color="primary"
              href="tel:+123456789"
            >
              <Phone />
            </IconButton>
            <Typography className={classes.phoneNumber}>03059764563</Typography>
          </div>
          <div className={classes.email}>
            <IconButton
              className={classes.socialIcon}
              color="primary"
              href="mailto:example@example.com"
            >
              <Email />
            </IconButton>
            <Typography className={classes.emailAddress}>
              fahadkhandeveloper@gmail.com
            </Typography>
          </div>
          <Typography variant="body1" style={{ marginLeft: "12px" }}>
            Connect with us on social media to stay updated.
          </Typography>
          <div>
            <IconButton
              className={classes.socialIcon}
              color="primary"
              href="https://facebook.com"
            >
              <Facebook />
            </IconButton>
            <IconButton
              className={classes.socialIcon}
              color="primary"
              href="https://twitter.com"
            >
              <Twitter />
            </IconButton>
            <IconButton
              className={classes.socialIcon}
              color="primary"
              href="https://instagram.com"
            >
              <Instagram />
            </IconButton>
            <IconButton
              className={classes.socialIcon}
              color="primary"
              href="https://linkedin.com"
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              className={classes.socialIcon}
              color="primary"
              href="https://wa.me/123456789"
            >
              <WhatsApp />
            </IconButton>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
