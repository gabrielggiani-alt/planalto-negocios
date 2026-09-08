import { ImageResponse } from "next/og";

// Imagem de compartilhamento (link preview em WhatsApp/redes). Gerada pelo Next
// a partir deste arquivo — vira og:image e twitter:image automaticamente.
export const alt = "Planalto Negócios — Crédito Consignado em Brasília";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          backgroundColor: "#050d2b",
          backgroundImage:
            "radial-gradient(1200px 600px at 50% 0%, #0D1A4A 0%, #050d2b 60%)",
          color: "#E8E6F0",
          position: "relative",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Moldura dourada */}
        <div
          style={{
            position: "absolute",
            top: 44,
            left: 44,
            right: 44,
            bottom: 44,
            border: "1px solid #806619",
            display: "flex",
          }}
        />

        <div
          style={{
            fontSize: 22,
            letterSpacing: 12,
            textTransform: "uppercase",
            color: "#C9AF70",
            marginBottom: 34,
          }}
        >
          Brasília-DF · Desde 2003
        </div>

        <div
          style={{
            fontSize: 92,
            fontWeight: 600,
            letterSpacing: -1,
            lineHeight: 1,
            textAlign: "center",
          }}
        >
          Planalto Negócios
        </div>

        {/* Divisor com losango */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            marginTop: 34,
            marginBottom: 34,
          }}
        >
          <div style={{ width: 90, height: 1, backgroundColor: "#806619" }} />
          <div
            style={{
              width: 12,
              height: 12,
              backgroundColor: "#C9AF70",
              transform: "rotate(45deg)",
            }}
          />
          <div style={{ width: 90, height: 1, backgroundColor: "#806619" }} />
        </div>

        <div
          style={{
            fontSize: 30,
            color: "#B8C0D9",
            textAlign: "center",
            maxWidth: 820,
            lineHeight: 1.4,
          }}
        >
          Crédito consignado para aposentados, pensionistas e servidores públicos
        </div>
      </div>
    ),
    { ...size }
  );
}
