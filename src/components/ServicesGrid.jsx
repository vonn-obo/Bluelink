import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Camera, Zap } from "lucide-react";
import { CONFIG } from "@/config";

// Add an entry here whenever a new icon name is used in CONFIG.services.
const ICONS = { Camera, Zap };

const item = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

export default function ServicesGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <p className="font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground">
        Network / Services
      </p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        What's on the link today
      </h2>

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

        <motion.li variants={item}>
          <div className="flex items-center gap-6 py-6 text-muted-foreground">
            <span className="font-mono text-xs">
              NODE {String(CONFIG.services.length + 1).padStart(2, "0")}
            </span>
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-dashed border-border">
              <Zap size={18} className="opacity-40" />
            </span>
            <span className="text-sm italic">More Bluelink services coming online soon.</span>
          </div>
        </motion.li>
      </motion.ul>
    </section>
  );
}
