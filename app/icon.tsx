import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at 50% 40%, #C73E5A 0%, #8B1E3F 60%, #1a0612 100%)",
          fontSize: 44,
          lineHeight: 1,
        }}
      >
        <span style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.4))" }}>❤</span>
      </div>
    ),
    size,
  );
}
