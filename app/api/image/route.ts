import { NextRequest, NextResponse } from "next/server";
import { ipfsGatewayById } from "@/utils/common";
import fetch from "node-fetch";

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id")?.toString();
  if (!id) {
    return new NextResponse("Missing ID parameter", { status: 400 });
  }
  
  try {
    const response = await fetch(ipfsGatewayById(id));
    const contentType = response.headers.get('Content-Type');
    //@ts-ignore
    return new NextResponse(response.body, {
      headers: {
        'Content-Type': contentType || 'application/octet-stream',
      },
      status: 200,
    });
  } catch (error: any) {
    return new NextResponse(JSON.stringify({ error: error.message }), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 500,
    });
  }
}
