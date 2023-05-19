import { NewsApiClient } from "@/services/news-api/newsApiClient";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q");
  const category = searchParams.get("category");
  try {
    const newsApiClient = new NewsApiClient();
    const newsResponse = await newsApiClient.getTopHeadlines(q, category);
    return NextResponse.json(newsResponse, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
