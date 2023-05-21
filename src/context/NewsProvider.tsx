"use client";
import React from "react";
import { useEffect, useState } from "react";
import { Article, NewsResponse } from "@/types/responses";

export type NewsContextType = {
  topHeadlines: Article[];
  isLoading: boolean;
  changeTopHeadlines: (category: string) => void;
};

const NewsContext = React.createContext<NewsContextType>({
  topHeadlines: [],
  isLoading: false,
  changeTopHeadlines: () => {},
});

export function useNews() {
  return React.useContext(NewsContext);
}

export default function NewsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [topHeadlines, setTopHeadlines] = useState<Article[]>([]);
  const [currentCategory, setCurrentCategory] = useState("general");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchTopHeadlines() {
      setIsLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/news/top-headlines`
      );
      const data: NewsResponse = await response.json();
      setTopHeadlines(data.articles);
      setIsLoading(false);
    }
    fetchTopHeadlines();
  }, []);

  const changeTopHeadlines = async (category: string) => {
    if (category === currentCategory) return;
    setIsLoading(true);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/news/top-headlines?category=${category}`
    );
    const data: NewsResponse = await response.json();
    setTopHeadlines(data.articles);
    setCurrentCategory(category);
    setIsLoading(false);
  };
  return (
    <NewsContext.Provider
      value={{ topHeadlines, isLoading, changeTopHeadlines }}
    >
      {children}
    </NewsContext.Provider>
  );
}
