import React, { useState, useEffect, createRef } from "react";
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import classNames from "classnames";
import useStyles from "./styles";

const NewsCard = ({
  article: { description, publishedAt, source, title, url, urlToImage },
  activeArticle,
  i,
}) => {
  const classes = useStyles();
  const [elemRefs, setElemRefs] = useState([]);
  const scrollToRef = (ref) => {
    window.scroll(0, ref.current.offsetTop - 135);
    console.log(ref.current);
  };

  useEffect(() => {
    window.scroll(0, 0);
    setElemRefs((refs) =>
      Array(20)
        .fill()
        .map((_, j) => refs[j] || createRef())
    );
  }, []);

  useEffect(() => {
    if (i === activeArticle && elemRefs[activeArticle]) {
      scrollToRef(elemRefs[activeArticle]);
    }
  }, [i, activeArticle, elemRefs]);

  const imageUrl = urlToImage
    ? urlToImage
    : `https://randomuser.me/portraits/men/${i + 1}.jpg`;

  return (
    <Card
      ref={elemRefs[i]}
      className={classNames(
        classes.card,
        activeArticle === i ? classes.activeCard : null
      )}
    >
      <CardActionArea href={url} target="_blank">
        <CardMedia className={classes.media} image={imageUrl} />
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">
            {new Date(publishedAt).toDateString()}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h2">
            {source.name}
          </Typography>
        </div>
        <Typography className={classes.title} variant="h5">
          {title}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" target="_blank" href={url}>
          Learn More
        </Button>
        <Typography variant="h5" color="textSecondary" component="h2">
          {i + 1}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default NewsCard;
