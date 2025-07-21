import { NextResponse } from "next/server";

export function GET() {
  const content = `
User-agent: *
Allow: /

Sitemap: https://amirangroup.co/sitemap.xml
  `.trim();

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
