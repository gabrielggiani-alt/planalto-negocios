import Image from "next/image";

type LogoProps = {
  variant?: "full" | "mark";
  size?: number;
  className?: string;
};

export default function Logo({ variant = "full", size = 36, className = "" }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Image
        src="/Brasao_Transparente.png"
        alt=""
        width={size}
        height={size}
        priority
        style={{ height: size, width: "auto" }}
      />
      {variant === "full" && (
        <span className="flex flex-col leading-none">
          <span
            className="text-text"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: Math.round(size * 0.46),
              letterSpacing: "0.04em",
              fontWeight: 500,
            }}
          >
            Planalto Negócios
          </span>
          <span
            className="text-text-muted mt-1"
            style={{
              fontSize: Math.max(9, Math.round(size * 0.22)),
              letterSpacing: "0.4em",
              textTransform: "uppercase",
            }}
          >
            Est. 2003
          </span>
        </span>
      )}
    </span>
  );
}
