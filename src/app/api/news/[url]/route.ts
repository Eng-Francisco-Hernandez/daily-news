import { htmlExtract } from "@/lib/htmlExtract";
import { decodeFromBase64 } from "@/utils/stringUtils";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { pathname } = new URL(req.url);
    const articleUrl = decodeFromBase64(pathname.split("/").pop()!);
    const articleContent = await htmlExtract(articleUrl);
    return NextResponse.json(
      { articleContent: articleContent },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
