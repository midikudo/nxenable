import Link from "next/link";

export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="brand" aria-label="NXENABLE home">
      <span className="brand-n">N</span>

      <span className="brand-x" aria-hidden="true">
        <i className="brand-x-piece brand-x-tl" />
        <i className="brand-x-piece brand-x-tr" />
        <i className="brand-x-piece brand-x-bl" />
        <i className="brand-x-piece brand-x-br" />
      </span>

      <span className="brand-word">ENABLE</span>
      {!compact && <span className="sr-only">NXENABLE</span>}
    </Link>
  );
}
