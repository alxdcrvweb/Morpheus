import { NextRequest, NextResponse } from "next/server";
import { ImageResponse } from "@vercel/og";

export const runtime = "experimental-edge";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const id = searchParams.get("id");

  if (!id) {
    return new NextResponse("Missing ID parameter", { status: 400 });
  }

  const name = "Morpheus #" + id;
  const frame = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundSize: "auto",
    backgroundImage: `url(https://www.mrphs.io/morphBg.png)`,
    width: "1331px",
    height: "1331px",
  };

  try {
    const imageUrl = `https://www.mrphs.io/api/getNftById?id=${id}`;
    
    return new ImageResponse(
      (
        //@ts-ignore
        <div style={frame}>
          <div
            style={{
              fontFamily: "ApocLCLight",
              fontStyle: "italic",
              fontSize: "38px",
              color: "white",
              transform: "rotate(-90deg) translateY(-600px) translateX(-1100px)",
            }}
          >
            {name}
          </div>
          <img
            src={imageUrl}
            width={1100}
            height={1231}
            style={{ marginLeft: "35px", objectFit: "contain" }}
          />
        </div>
      ),
      {
        width: 1331,
        height: 1331,
      }
    );
  } catch (error) {
    console.error("Error generating image:", error);
    return new NextResponse("Error generating image", { status: 500 });
  }
}
