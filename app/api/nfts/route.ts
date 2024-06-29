import type { NextApiRequest, NextApiResponse } from "next";
//@ts-ignore
import fetch from "node-fetch";
import { mintContract } from "../../../utils/contracts/mint";
import { moralisUrl } from "@/config/config";
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
export const indexer = "https://index.mrphs.io";
export async function GET(req: NextRequest) {
  const address = req.nextUrl.searchParams.get("address");
  const fid = req.nextUrl.searchParams.get("fid");
  try {
    if (address) {
      const res = await axios.get(indexer + "/api/held/adr/" + address);
      return new NextResponse(JSON.stringify(res.data.tokens), {
        headers: {
          "Content-Type": "text/html",
        },
        status: 200,
      });
    }
    if (fid) {
      const res = await axios.get(indexer + "/api/held/fid/" + fid);
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
