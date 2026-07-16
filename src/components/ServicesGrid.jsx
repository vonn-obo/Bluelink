import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Zap } from "lucide-react";
import { CONFIG } from "@/config";

// Add an entry here whenever a new icon name is used in CONFIG.services.
const ICONS = { Zap };

const item = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

function EmptyState() {
  return (
    <div className="mt-10 flex flex-col items-center gap-3 border-y border-dashed border-border py-16 text-center">
      <span className="flex size-11 items-center justify-center rounded-full border border-dashed border-border">
        <Zap size={18} className="opacity-40" />
      </span>
      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
        Network initializing
      </p>
      <p className="max-w-sm text-sm text-muted-foreground">
        Bluelink's first services are coming online soon.
      </p>
    </div>
  );
}

export default function ServicesGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <p className="font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground">
        Network / Services
      </p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        What's on the link
      </h2>

      {CONFIG.services.length === 0 ? (
        <EmptyState />
      ) : (
        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.1 }}
          className="mt-10 divide-y divide-border border-y border-border"
        >
          {CONFIG.services.map((service, i) => {
            const Icon = ICONS[service.icon] ?? Zap;
            return (
              <motion.li key={service.slug} variants={item}>
                <Link
                  to="/services"
                  className="group flex items-center gap-6 py-6 transition-colors hover:bg-accent/50"
                >
                  <span className="font-mono text-xs text-muted-foreground">
                    NODE {String(i + 1).padStart(2, "0")}
                  </span>

                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-primary bg-card text-primary">
                    <Icon size={18} />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="flex items-center gap-2">
                      <span className="font-medium text-foreground">{service.name}</span>
                      <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wide text-signal">
                        <span className="size-1.5 rounded-full bg-signal" />
                        Online
                      </span>
                    </span>
                    <span className="mt-0.5 block text-sm text-muted-foreground">{service.summary}</span>
                  </span>

                  <span className="hidden shrink-0 text-sm font-medium text-primary group-hover:underline sm:inline">
                    Learn more →
                  </span>
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>
      )}
    </section>
  );
}
