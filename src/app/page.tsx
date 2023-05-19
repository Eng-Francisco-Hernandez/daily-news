"use client";
import React from "react";
import DrawerLayout from "@/components/layout/DrawerLayout";
import NewsGrid from "@/components/ui/NewsGrid";
import NewsProvider from "@/context/NewsProvider";

export default function Home() {
  return (
    <DrawerLayout>
      <NewsProvider>
        <NewsGrid />
      </NewsProvider>
    </DrawerLayout>
  );
}
