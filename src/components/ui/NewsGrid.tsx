"use client";
import React from "react";
import newsPlaceholder from "../../assets/images/news-placeholder.jpg";
import { useNews } from "@/context/NewsProvider";
import { encodeToBase64 } from "@/utils/stringUtils";
import { newsCategories } from "@/data/constants";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  Link,
  Typography,
} from "@mui/material";

export default function NewsGrid() {
  const { changeTopHeadlines, isLoading, topHeadlines } = useNews();
  return (
    <Grid container spacing={3}>
      <Grid
        item
        xs={12}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          variant="h2"
          component="h2"
          color="primary"
          className="clickable"
          onClick={() => changeTopHeadlines("general")}
        >
          Daily news
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {newsCategories.map((category, index) => {
          return (
            <Link
              key={index}
              onClick={() => changeTopHeadlines(category)}
              className="title-case clickable"
              style={{
                textDecoration: "none",
                marginRight: "10px"
              }}
            >
              {category}
            </Link>
          );
        })}
      </Grid>
      {isLoading ? (
        <Grid
          item
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <CircularProgress className="mt-50" />
        </Grid>
      ) : (
        <>
          {topHeadlines.map((article, index) =>
            (index - 1) % 3 !== 0 ? (
              <Grid key={index} item xs={3}>
                <Card
                  style={{
                    height: "100%",
                  }}
                >
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Source: {article.source.name}
                    </Typography>
                    <Typography variant="h5" component="div">
                      {article.title}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {new Date(article.publishedAt).toDateString()}
                    </Typography>
                    <Typography variant="body2">
                      {article.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      href={`/news/${encodeToBase64(article.url)}?title=${
                        article.title
                      }&date=${article.publishedAt}&img=${encodeToBase64(
                        article.urlToImage
                          ? article.urlToImage
                          : newsPlaceholder.src
                      )}`}
                      target="_blank"
                      size="small"
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ) : (
              <Grid key={index} item xs={6}>
                <Card>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={
                      article.urlToImage
                        ? article.urlToImage
                        : newsPlaceholder.src
                    }
                  />
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      {new Date(article.publishedAt).toDateString()}
                    </Typography>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Source: {article.source.name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                      {article.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {article.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      href={`/news/${encodeToBase64(article.url)}?title=${
                        article.title
                      }&date=${article.publishedAt}&img=${encodeToBase64(
                        article.urlToImage
                          ? article.urlToImage
                          : newsPlaceholder.src
                      )}`}
                      target="_blank"
                      size="small"
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            )
          )}
        </>
      )}
    </Grid>
  );
}
