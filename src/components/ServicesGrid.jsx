import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Zap, Globe, Smartphone, Users, Palette, Code2, Sparkles, ArrowUpRight } from "lucide-react";
import TiltCard from "@/components/TiltCard";
import { CONFIG } from "@/config";

// Add an entry here whenever a new icon name is used in CONFIG.services.
const ICONS = { Zap, Globe, Smartphone, Users, Palette, Code2, Sparkles };

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
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
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ staggerChildren: 0.08 }}
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          style={{ perspective: 1200 }}
        >
          {CONFIG.services.map((service, i) => {
            const Icon = ICONS[service.icon] ?? Zap;
            return (
              <motion.div key={service.slug} variants={item}>
                <Link to="/services" className="group block h-full">
                  <TiltCard className="group relative h-full overflow-hidden rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/10">
                    <div className="relative z-10 flex h-full flex-col">
                      <div className="flex items-start justify-between">
                        <span className="flex size-11 items-center justify-center rounded-full border border-primary bg-background text-primary">
                          <Icon size={20} />
                        </span>
                        <ArrowUpRight
                          size={18}
                          className="text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                        />
                      </div>

                      <h3 className="mt-5 font-medium text-foreground">{service.name}</h3>
                      <p className="mt-1.5 text-sm text-muted-foreground">{service.summary}</p>

                      <span className="mt-5 inline-flex w-fit items-center gap-1.5 font-mono text-[10px] uppercase tracking-wide text-signal">
                        <span className="size-1.5 rounded-full bg-signal" />
                        Node {String(i + 1).padStart(2, "0")} · Online
                      </span>
                    </div>
                  </TiltCard>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </section>
  );
}
