import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const groupName = searchParams.get("groupname");
  const groupSubName = searchParams.get("groupsubname");
  const image = decodeURIComponent(
    searchParams.get("image").replace("£", "&")
  ).replace(/\/([^\/]*)\/([^\/]*)$/, "%2F$1%2F$2");
  console.log("groupName", groupName);
  console.log("searchParams", { searchParams });
  console.log("image", image);
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          backgroundColor: "#fff",
          fontSize: 32,
          fontWeight: 600,
          backgroundImage: `url(${image})`,
          backgroundSize: "contain",
          padding: 0,
        }}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-end",
            backgroundColor: "rgba(0,0,0,0.5)",
            fontSize: 32,
            fontWeight: 600,
            padding: 0,
          }}
        >
          <div
            style={{
              marginTop: 40,
              marginLeft: 0,
              background: "rgba(255,255,255,0.8)",
              padding: "20px",
              display: "flex",
            }}
          >
            <div
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgb(0, 124, 240), rgb(0, 223, 216))",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              {groupName}
            </div>
          </div>
          <div
            style={{
              marginTop: 0,
              marginBottom: 20,
              fontSize: 22,
              background: "rgba(255,255,255,0.8)",
              padding: 20,
              display: "flex",
            }}
          >
            <div
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgb(255, 77, 77), rgb(249, 203, 40))",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              {groupSubName}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 800,
      height: 400,
    }
  );
}
