export default function QR({ value }: { value: string }) {
  // Minimal inline SVG QR placeholder to avoid extra deps.
  // For a real QR, replace this with a generated SVG or use a lightweight lib.
  const size = 256;
  const encoded = encodeURIComponent(value);
  // Simple placeholder: box with link under it — still useful for print.
  return (
    <div className="flex flex-col items-center text-center text-xs">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        aria-hidden
      >
        <rect width="100%" height="100%" fill="#fff" />
        <rect x="12" y="12" width="56" height="56" fill="#111827" />
        <rect x="188" y="12" width="56" height="56" fill="#111827" />
        <rect x="12" y="188" width="56" height="56" fill="#111827" />
        <g fill="#111827">
          <rect x="84" y="84" width="20" height="20" />
          <rect x="108" y="84" width="12" height="12" />
          <rect x="84" y="108" width="12" height="12" />
          <rect x="140" y="140" width="24" height="24" />
          <rect x="116" y="164" width="8" height="8" />
        </g>
      </svg>
      <a href={value} target="_blank" rel="noreferrer" className="mt-1 text-blue-600 underline break-all">
        {value}
      </a>
    </div>
  );
}
