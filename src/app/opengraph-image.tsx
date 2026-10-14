import { ImageResponse } from "next/og";
import cv from "@/data/cv.json";

export const alt = "CV Muhammad Radya Iftikhar";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#fffdf5",
          padding: 48,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            border: "10px solid #111111",
            background: "#ffd93d",
            padding: 56,
            boxShadow: "16px 16px 0 #111111",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            Curriculum Vitae
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: 92,
                fontWeight: 900,
                lineHeight: 1,
                textTransform: "uppercase",
              }}
            >
              {cv.profile.name}
            </div>
            <div style={{ display: "flex", fontSize: 34, marginTop: 24 }}>
              {cv.profile.role}
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
