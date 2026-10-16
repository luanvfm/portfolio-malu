export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <img
      src="/logo-voz.svg"
      alt=""
      aria-hidden="true"
      width={44}
      height={52}
      className={`shrink-0 object-contain ${className}`}
    />
  );
}
