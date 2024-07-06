import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
export const backendUrl = "https://index.mrphs.io";
export async function GET(req: NextRequest) {
  const address = req.nextUrl.searchParams.get("address");
  const fid = req.nextUrl.searchParams.get("fid");
  try {
    if (address) {
      const res = await axios.get(backendUrl + "/api/held/adr/" + address);
      return new NextResponse(JSON.stringify(res.data.tokens), {
        headers: {
          "Content-Type": "text/html",
        },
        status: 200,
      });
    }
    if (fid) {
      const res = await axios.get(backendUrl + "/api/held/fid/" + fid);
      return new NextResponse(JSON.stringify(res.data.tokens), {
        headers: {
          "Content-Type": "text/html",
        },
        status: 200,
      });
    }
  } catch (error: any) {
    return new NextResponse(JSON.stringify(error), {
      headers: {
        "Content-Type": "text/html",
      },
      status: 500,
    });
  }
}
