"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import DrawerLayout from "@/components/layout/DrawerLayout";
import { Grid } from "@mui/material";

export default function index() {
  const pathname = usePathname();
  const [articleContent, setArticleContent] = useState("");

  useEffect(() => {
    async function fetchArticle() {
      const articleUrl = pathname.split("/").pop()!;
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/news/${articleUrl}`
      );
      const data = await response.json();
      setArticleContent(data.articleContent);
    }
    fetchArticle();
  }, []);

  return (
    <DrawerLayout>
      <Grid container spacing={3}>
        <div>
          <p>{articleContent}</p>
        </div>
      </Grid>
    </DrawerLayout>
  );
}
