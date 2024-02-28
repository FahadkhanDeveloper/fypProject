import React, { useEffect, useRef } from "react";
import NewsCard from "../NewsCard/NewsCard";
import useStyles from "./styles";
import { Grid, Typography } from "@mui/material";
import Grow from "@mui/material/Grow";

const infoCards = [
  {
    title: "News from Countries",
    info: "US, UK, South Korea, China, India, Canada, Russia, Japan, Saudi Arabia, Poland",
    text: "What's going on in UK",
  },
  // {
  //   title: "Latest News",
  //   text: "Give me the latest news",
  // },
  {
    title: "News by Categories",
    info: "Business, Entertainment, General, Health, Science, Sports, Technology",
    text: "Give me the latest sports news",
  },
  {
    title: "News by Terms",
    info: "Machine Learning Algorithm, Bitcoin, Cyber Security Threats, Blockchain, Smartphones, Imran khan...",
    text: "What's happening with Blockchain",
  },
  {
    title: "News by Sources",
    info: "ESPN, USA Today, National Geographic, Hacker, Al Jazeera English, ARY, Wired, CNN, BBC, Time, FOX",
    text: "Tell me what's happening on ESPN right now.",
  },
];

const NewsCards = ({ sectionRef, articles, activeArticle }) => {
  const classes = useStyles();

  useEffect(() => {
    // Scroll to the sectionRef when articles are loaded
    if (articles.length && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [articles, sectionRef]);

  if (!articles.length) {
    return (
      <div className={classes.newCategory} ref={sectionRef}>
        <Typography
          variant="h4"
          align="center"
          className={classes.categoryTitle}
        >
          News Category
          <hr
            style={{
              height: "7px",
              width: "18rem",
              backgroundColor: "#1f9ac7",
            }}
          />
        </Typography>

        <Grow in>
          <Grid
            className={classes.container}
            container
            alignItems="stretch"
            spacing={3}
          >
            {infoCards.map((infoCard) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                className={classes.infoCard}
                key={infoCard.title}
              >
                <div className={`${classes.helpCard} ${classes.helpCardHover}`}>
                  <Typography className={classes.newsCardsTitle} variant="h6">
                    <strong>{infoCard.title}</strong>
                  </Typography>
                  {infoCard.info ? (
                    <Typography variant="body1" className={classes.info}>
                      <strong>{infoCard.title.split(" ")[2]}:</strong>
                      <br />
                      {infoCard.info}
                    </Typography>
                  ) : null}
                  <Typography variant="body1" className={classes.infoText}>
                    <strong>Try saying: </strong>
                    <br />
                    <i>{infoCard.text}</i>
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grow>
      </div>
    );
  }

  return (
    <Grow in ref={sectionRef}>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {articles.map((article, i) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            style={{ display: "flex" }}
            key={article.title}
          >
            <NewsCard activeArticle={activeArticle} article={article} i={i} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
