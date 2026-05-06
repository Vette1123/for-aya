import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "إلى آية ❤";

async function loadFont(weight: 400 | 700) {
  const url = `https://fonts.googleapis.com/css2?family=Reem+Kufi:wght@${weight}&display=swap`;
  const css = await (await fetch(url)).text();
  const match = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/);
  if (!match) throw new Error("Font URL not found");
  const fontRes = await fetch(match[1]);
  return fontRes.arrayBuffer();
}

export default async function OG() {
  const [regular, bold] = await Promise.all([loadFont(400), loadFont(700)]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(199, 62, 90, 0.55), transparent 60%), radial-gradient(ellipse 70% 55% at 0% 100%, rgba(139, 30, 63, 0.6), transparent 60%), linear-gradient(180deg, #1a0612 0%, #2a0e1a 50%, #1a0612 100%)",
          color: "#FBF3E4",
          fontFamily: "Reem Kufi",
          padding: 80,
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            color: "#D4A24C",
            fontSize: 28,
            opacity: 0.85,
            marginBottom: 24,
          }}
        >
          <span style={{ width: 80, height: 1, background: "#D4A24C" }} />
          <span>رسالة حب</span>
          <span style={{ width: 80, height: 1, background: "#D4A24C" }} />
        </div>

        <div
          style={{
            fontSize: 180,
            fontWeight: 700,
            lineHeight: 1.1,
            display: "flex",
            alignItems: "center",
            gap: 30,
          }}
        >
          <span>إلى آية</span>
          <span style={{ color: "#C73E5A", fontSize: 160 }}>❤</span>
        </div>

        <div
          style={{
            fontSize: 40,
            color: "#E8A0A8",
            marginTop: 32,
            fontWeight: 400,
          }}
        >
          صُنعت لكِ وحدكِ
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Reem Kufi", data: regular, weight: 400, style: "normal" },
        { name: "Reem Kufi", data: bold, weight: 700, style: "normal" },
      ],
    },
  );
}
