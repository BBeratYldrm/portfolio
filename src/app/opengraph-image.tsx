import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px 96px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 15,
            fontWeight: 700,
            letterSpacing: "0.22em",
            color: "#3f3f46",
            marginBottom: 48,
            textTransform: "uppercase",
          }}
        >
          BY
        </div>
        <div
          style={{
            fontSize: 88,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1,
            marginBottom: 28,
            letterSpacing: "-3px",
          }}
        >
          Berat Yildirim
        </div>
        <div
          style={{
            fontSize: 30,
            fontWeight: 400,
            color: "#52525b",
            letterSpacing: "0px",
            lineHeight: 1.4,
          }}
        >
          Senior Backend Engineer &amp; Music Producer
        </div>
        <div
          style={{
            fontSize: 22,
            fontWeight: 400,
            color: "#3f3f46",
            marginTop: 12,
          }}
        >
          Osaka, Japan
        </div>
      </div>
    ),
    size
  );
}
