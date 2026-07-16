import { CONFIG, LINKS } from "@/config";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p className="flex items-center gap-2">
          <span className="inline-block size-1.5 rounded-full bg-signal" />
          <span className="font-mono text-xs uppercase tracking-wide">All systems online</span>
          <span className="text-border">·</span>
          &copy; {new Date().getFullYear()} {CONFIG.companyName}
        </p>
        <div className="flex gap-6">
          <a href={LINKS.messenger} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            Messenger
          </a>
          <a href={LINKS.viber} className="hover:text-foreground">
            Viber
          </a>
          <a href={LINKS.mailto} className="hover:text-foreground">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
