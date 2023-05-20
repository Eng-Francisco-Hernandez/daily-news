"use client";
import React, { useEffect, useState } from "react";
import { Article } from "@/types/responses";
import { decodeFromBase64 } from "@/utils/stringUtils";
import { useNews } from "@/context/NewsProvider";
import { Paper, Box, Grid, Typography, CircularProgress } from "@mui/material";

export default function ArticleDisplay({ articleUrl }: { articleUrl: string }) {
  const { topHeadlines } = useNews();
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [articleContent, setArticleContent] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchArticle() {
      setIsLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/news/${articleUrl}`
      );
      const data = await response.json();
      const paragraphs: string[] = [];
      const sentences = data.articleContent.split(".");
      for (let index = 0; index < sentences.length; index += 4) {
        paragraphs.push(
          [
            sentences[index],
            sentences[index + 1],
            sentences[index + 2],
            sentences[index + 3],
            ".",
          ].join(" ")
        );
      }
      setArticleContent(paragraphs);
      const article = topHeadlines.find(
        (el) => el.url === decodeFromBase64(articleUrl)
      );
      setSelectedArticle(article!);
      setIsLoading(false);
    }
    fetchArticle();
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Paper
        elevation={3}
        className="mt-20"
        style={{
          padding: "10px",
        }}
      >
        <Grid container spacing={3}>
          {isLoading ? (
            <Grid
              item
              xs={12}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <CircularProgress className="mt-50 mb-50" />
            </Grid>
          ) : (
            <>
              <Grid
                item
                xs={12}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Typography variant="h5" component="h5" color="primary">
                  {selectedArticle?.title}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Source: {selectedArticle?.source.name}
                </Typography>
                <Typography color="text.secondary">
                  {new Date(selectedArticle?.publishedAt!).toDateString()}
                </Typography>
              </Grid>

              {articleContent.map((paragraph, index) =>
                index !== Math.floor(articleContent.length / 2) ? (
                  <Grid item key={index} xs={12}>
                    <Typography key={index} variant="body1">
                      {paragraph}
                    </Typography>
                  </Grid>
                ) : (
                  <React.Fragment key={index}>
                    <Grid item xs={6}>
                      <Typography key={index} variant="body1">
                        {paragraph}
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <img height={200} src={selectedArticle?.urlToImage}></img>
                    </Grid>
                  </React.Fragment>
                )
              )}
            </>
          )}
        </Grid>
      </Paper>
    </Box>
  );
}
