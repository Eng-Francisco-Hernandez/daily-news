"use client";
import React, { useEffect, useState } from "react";
import { Article } from "@/types/responses";
import { decodeFromBase64 } from "@/utils/stringUtils";
import { useNews } from "@/context/NewsProvider";
import { Paper, Box, Grid, Typography } from "@mui/material";

export default function ArticleDisplay({ articleUrl }: { articleUrl: string }) {
  const { topHeadlines } = useNews();
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [articleContent, setArticleContent] = useState<string[]>([]);

  useEffect(() => {
    async function fetchArticle() {
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
          ].join(" ")
        );
      }
      setArticleContent(paragraphs);
    }
    fetchArticle();
  }, []);

  useEffect(() => {
    const article = topHeadlines.find(
      (el) => el.url === decodeFromBase64(articleUrl)
    );
    setSelectedArticle(article!);
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
          <Grid item xs={12}>
            {articleContent.map((paragraph, index) => {
              return (
                <>
                  <Typography key={index} variant="body1">
                    {paragraph}
                  </Typography>
                  <br></br>
                </>
              );
            })}
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
