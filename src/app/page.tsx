"use client";

import * as React from "react";
import DrawerLayout from "@/components/layout/DrawerLayout";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { articles, newsCategories } from "@/data/constants";
import { useEffect, useState } from "react";
import { Article, NewsResponse } from "@/types/responses";

export default function Home() {
  const [topHeadlines, setTopHeadlines] = useState<Article[]>(articles);
  useEffect(() => {
    async function fetchTopHeadlines() {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/news/top-headlines`
      );
      const data: NewsResponse = await response.json();
      setTopHeadlines(data.articles);
    }
    // fetchTopHeadlines();
  }, []);

  return (
    <DrawerLayout>
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h2" component="h2" color="primary">
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
                href="#"
                className="mr-10 title-case"
                style={{
                  textDecoration: "none",
                }}
              >
                {category}
              </Link>
            );
          })}
        </Grid>
        {articles.map((article, index) =>
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
                    {article.publishedAt}
                  </Typography>
                  <Typography variant="body2">{article.description}</Typography>
                </CardContent>
                <CardActions>
                  <Button href={article.url} target="_blank" size="small">
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
                  image={article.urlToImage}
                  title="green iguana"
                />
                <CardContent>
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
                  <Button href={article.url} target="_blank" size="small">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          )
        )}
      </Grid>
    </DrawerLayout>
  );
}
