import { NewsApiClient } from "@/services/news-api/newsApiClient";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q");
  try {
    const newsApiClient = new NewsApiClient();
    const newsResponse = await newsApiClient.getEverything(q!);
    return NextResponse.json({ data: newsResponse }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 400 });
  }
}
