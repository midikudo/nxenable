import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "NXENABLE | Enable What's Next.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "76px",
          color: "white",
          background: "linear-gradient(135deg, #06162a 0%, #07192f 58%, #0a2d54 100%)"
        }}
      >
        <div style={{ display: "flex", color: "#31c8e5", fontSize: 28, fontWeight: 700, letterSpacing: 5 }}>NXENABLE</div>
        <div style={{ display: "flex", marginTop: 32, fontSize: 72, fontWeight: 800, lineHeight: 1.05 }}>Enable What&apos;s Next.</div>
        <div style={{ display: "flex", marginTop: 28, color: "#c2d4e8", fontSize: 30 }}>Custom software. Smarter systems. Real business impact.</div>
      </div>
    ),
    { ...size }
  );
}
