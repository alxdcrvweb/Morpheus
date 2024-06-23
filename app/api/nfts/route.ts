import type { NextApiRequest, NextApiResponse } from "next";
//@ts-ignore
import fetch from "node-fetch";
import { mintContract } from "../../../utils/contracts/mint";
import { moralisUrl } from "@/config/config";
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: NextRequest) {
  const address = req.nextUrl.searchParams.get("address");
  const chain = req.nextUrl.searchParams.get("chain")?.toString()
  const params = {
    chain: chain,
    offset: "1",
    normalizeMetadata: "true",
    token_addresses: mintContract,
  };
  //@ts-ignore
  const query = new URLSearchParams(params).toString();
  try {
    const res = await axios.get(moralisUrl + address + `/nft/?` + query, {
      headers: {
        "X-API-Key": process.env.NEXT_PUBLIC_MORALIS_API_KEY as string,
      },
    });
    return new NextResponse(JSON.stringify(res.data.result), {
      headers: {
        "Content-Type": "text/html",
      },
      status: 200,
    });
  } catch (error: any) {

    return new NextResponse(JSON.stringify(error), {
      headers: {
        "Content-Type": "text/html",
      },
      status: 500,
    });
  }
}
