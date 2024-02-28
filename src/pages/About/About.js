import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import branding from "../../assets/branding.png";
import useStyles from "./styles";

const About = ({ sectionRef }) => {
  const classes = useStyles();

  return (
    <div className={classes.container} ref={sectionRef}>
      <Grid container>
        {/* Left Side */}
        <Grid item xs={12} md={6}>
          <div className={classes.leftSection}>
            {/* Banner */}
            <img src={branding} alt="Banner" className={classes.bannerImage} />
          </div>
        </Grid>

        {/* Right Side */}
        <Grid item xs={12} md={6}>
          <div className={classes.rightSection}>
            {/* Title */}
            <Typography variant="h4" className={classes.title}>
              About Application
            </Typography>

            {/* Description */}
            <Typography variant="body1" className={classes.description}>
              This Application is a interactive news applications Think of it
              like you would any other piece of journalism
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
