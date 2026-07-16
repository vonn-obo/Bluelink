import PageTransition from "@/components/PageTransition";
import { CONFIG, LINKS } from "@/config";

export default function Contact() {
  return (
    <PageTransition>
      <section className="mx-auto max-w-6xl px-4 py-24">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Contact</h1>
        <div className="mt-6 space-y-2 text-muted-foreground">
          <p>
            <a href={LINKS.tel} className="hover:text-foreground">{CONFIG.phoneDisplay}</a>
          </p>
          <p>
            <a href={LINKS.mailto} className="hover:text-foreground">{CONFIG.email}</a>
          </p>
          <p>
            <a href={LINKS.messenger} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
              Message us on Messenger
            </a>
          </p>
        </div>
      </section>
    </PageTransition>
  );
}
