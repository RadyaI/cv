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
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0e14",
          padding: 72,
          border: "2px solid #1f2937",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 28,
            color: "#4ade80",
          }}
        >
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: 999,
              background: "#4ade80",
            }}
          />
          {cv.profile.status}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 84,
              fontWeight: 800,
              lineHeight: 1.05,
              color: "#e6edf3",
            }}
          >
            {cv.profile.name}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 36,
              marginTop: 20,
              color: "#8b98a9",
            }}
          >
            {cv.profile.role}
          </div>
        </div>

        <div style={{ display: "flex", gap: 12, fontSize: 24, color: "#22d3ee" }}>
          {cv.profile.heroSkills.map((s) => (
            <div
              key={s}
              style={{
                display: "flex",
                padding: "6px 16px",
                border: "1px solid #1f2937",
                borderRadius: 8,
                background: "#161d29",
              }}
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
