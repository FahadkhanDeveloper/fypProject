import React from "react";
import { Container, Grid, Typography, Button } from "@material-ui/core";
import useStyles from "./styles";
import banner from "../../assets/banner.png";

const Home = ({ sectionRef }) => {
  const classes = useStyles();

  return (
    <div ref={sectionRef}>
      <Container className={classes.container}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <div className={classes.leftSection}>
              <Typography variant="h1" className={classes.title}>
                ALAN NEWS
              </Typography>
              <Typography variant="h1" className={classes.subtitle}>
                Platform
              </Typography>
              <Typography variant="body1" className={classes.description}>
                Now you can find easily any news with <br /> one click with help
                of our assistant
              </Typography>
              <Button variant="contained" className={classes.btn}>
                Explore Now →
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className={classes.rightSection}>
              <img src={banner} alt="Banner" className={classes.img} />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
