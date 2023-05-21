"use client";
import React from "react";
import { usePathname } from "next/navigation";
import DrawerLayout from "@/components/layout/DrawerLayout";
import NewsProvider from "@/context/NewsProvider";
import ArticleDisplay from "@/components/ui/ArticleDisplay";

export default function index() {
  const pathname = usePathname();

  return (
    <NewsProvider>
      <DrawerLayout hideCategories={true}>
        <ArticleDisplay
          articleUrl={pathname.split("/").pop()!}
        ></ArticleDisplay>
      </DrawerLayout>
    </NewsProvider>
  );
}
