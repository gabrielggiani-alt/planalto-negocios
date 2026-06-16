type IconProps = {
  className?: string;
  size?: number;
};

const baseProps = (size: number, className?: string) => ({
  width: size,
  height: size,
  viewBox: "0 0 256 256",
  className,
  "aria-hidden": true as const,
  focusable: false,
});

export const MenuIcon = ({ size = 24, className }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...baseProps(size, className)}>
    <path fill="currentColor" d="M220 128a4 4 0 0 1-4 4H40a4 4 0 0 1 0-8h176a4 4 0 0 1 4 4M40 68h176a4 4 0 0 0 0-8H40a4 4 0 0 0 0 8m176 120H40a4 4 0 0 0 0 8h176a4 4 0 0 0 0-8" />
  </svg>
);

export const CloseIcon = ({ size = 24, className }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...baseProps(size, className)}>
    <path fill="currentColor" d="M202.83 197.17a4 4 0 0 1-5.66 5.66L128 133.66l-69.17 69.17a4 4 0 0 1-5.66-5.66L122.34 128L53.17 58.83a4 4 0 0 1 5.66-5.66L128 122.34l69.17-69.17a4 4 0 1 1 5.66 5.66L133.66 128Z" />
  </svg>
);

export const InstagramIcon = ({ size = 24, className }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...baseProps(size, className)}>
    <path fill="currentColor" d="M128 84a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44m0 80a36 36 0 1 1 36-36a36 36 0 0 1-36 36m48-136H80a52.06 52.06 0 0 0-52 52v96a52.06 52.06 0 0 0 52 52h96a52.06 52.06 0 0 0 52-52V80a52.06 52.06 0 0 0-52-52m44 148a44.05 44.05 0 0 1-44 44H80a44.05 44.05 0 0 1-44-44V80a44.05 44.05 0 0 1 44-44h96a44.05 44.05 0 0 1 44 44ZM188 76a8 8 0 1 1-8-8a8 8 0 0 1 8 8" />
  </svg>
);

export const EnvelopeIcon = ({ size = 24, className }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...baseProps(size, className)}>
    <path fill="currentColor" d="M224 52H32a4 4 0 0 0-4 4v136a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a4 4 0 0 0-4-4m-96 86.57L42.28 60h171.44ZM104.63 128L36 190.91V65.09Zm5.92 5.43L125.3 147a4 4 0 0 0 5.4 0l14.75-13.52L213.72 196H42.28Zm40.82-5.43L220 65.09v125.82Z" />
  </svg>
);

export const PhoneIcon = ({ size = 24, className }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...baseProps(size, className)}>
    <path fill="currentColor" d="M220.78 162.13L173.56 141a12 12 0 0 0-11.38 1a3.4 3.4 0 0 0-.38.28L137 163.42a3.93 3.93 0 0 1-3.7.21c-16.24-7.84-33.05-24.52-40.89-40.57a3.9 3.9 0 0 1 .18-3.69l21.2-25.21c.1-.12.19-.25.28-.38a12 12 0 0 0 1-11.36L93.9 35.28a12 12 0 0 0-12.48-7.19A52.25 52.25 0 0 0 36 80c0 77.2 62.8 140 140 140a52.25 52.25 0 0 0 51.91-45.42a12 12 0 0 0-7.13-12.45m-.78 11.45A44.23 44.23 0 0 1 176 212c-72.78 0-132-59.22-132-132a44.23 44.23 0 0 1 38.42-44a4 4 0 0 1 .48 0a4 4 0 0 1 3.67 2.49l21.11 47.14a4 4 0 0 1-.23 3.6l-21.19 25.2c-.1.13-.2.25-.29.39a12 12 0 0 0-.78 11.75c8.69 17.79 26.61 35.58 44.6 44.27a12 12 0 0 0 11.79-.87l.37-.28l24.83-21.12a3.93 3.93 0 0 1 3.57-.27l47.21 21.16a4 4 0 0 1 2.44 4.12" />
  </svg>
);

export const WhatsAppIcon = ({ size = 24, className }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...baseProps(size, className)}>
    <path fill="currentColor" d="m185.79 148.42l-32-16a4 4 0 0 0-4 .25l-16.64 11.1a44.56 44.56 0 0 1-20.91-20.91l11.1-16.64a4 4 0 0 0 .25-4l-16-32A4 4 0 0 0 104 68a36 36 0 0 0-36 36a84.09 84.09 0 0 0 84 84a36 36 0 0 0 36-36a4 4 0 0 0-2.21-3.58M152 180a76.08 76.08 0 0 1-76-76a28 28 0 0 1 25.58-27.9l13.8 27.61l-11 16.54A4 4 0 0 0 104 124a52.43 52.43 0 0 0 28 28a4 4 0 0 0 3.76-.37l16.54-11l27.61 13.8A28 28 0 0 1 152 180M128 28a100 100 0 0 0-87.47 148.5l-11.9 35.69a12 12 0 0 0 15.18 15.18l35.69-11.9A100 100 0 1 0 128 28m0 192a92 92 0 0 1-46.07-12.35a4.05 4.05 0 0 0-2-.54a4 4 0 0 0-1.27.21l-37.38 12.46a4 4 0 0 1-5.06-5.06l12.46-37.38a4 4 0 0 0-.33-3.27A92 92 0 1 1 128 220" />
  </svg>
);

export const ChevronRightIcon = ({ size = 24, className }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...baseProps(size, className)}>
    <path fill="currentColor" d="m178.83 130.83l-80 80a4 4 0 0 1-5.66-5.66L170.34 128L93.17 50.83a4 4 0 0 1 5.66-5.66l80 80a4 4 0 0 1 0 5.66" />
  </svg>
);

export const ArrowUpRightIcon = ({ size = 24, className }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...baseProps(size, className)}>
    <path fill="currentColor" d="M196 64v104a4 4 0 0 1-8 0V73.66L66.83 194.83a4 4 0 0 1-5.66-5.66L182.34 68H88a4 4 0 0 1 0-8h104a4 4 0 0 1 4 4" />
  </svg>
);

export const ShieldIcon = ({ size = 24, className }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...baseProps(size, className)}>
    <path fill="currentColor" d="M208 44H48a12 12 0 0 0-12 12v56c0 51.16 24.73 82.12 45.47 99.1c22.4 18.32 44.55 24.5 45.48 24.76a4 4 0 0 0 2.1 0c.93-.26 23.08-6.44 45.48-24.76c20.74-17 45.47-47.94 45.47-99.1V56a12 12 0 0 0-12-12m4 68c0 38.44-14.23 69.63-42.29 92.71A132.5 132.5 0 0 1 128 227.82a132.2 132.2 0 0 1-41.71-23.11C58.23 181.63 44 150.44 44 112V56a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Z" />
  </svg>
);
