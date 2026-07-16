import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import NodeMap from "@/components/NodeMap";
import { CONFIG, LINKS } from "@/config";

export default function Hero() {
  return (
    <section className="overflow-hidden border-b border-border">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 lg:grid-cols-[1.1fr_1fr] lg:py-28">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground"
          >
            <span className="inline-block size-1.5 rounded-full bg-signal" />
            Bluelink Technology · Iloilo City
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="mt-5 text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl"
          >
            {CONFIG.tagline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="mt-5 max-w-lg text-balance text-lg text-muted-foreground"
          >
            {CONFIG.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button asChild size="lg">
              <a href={LINKS.messenger} target="_blank" rel="noopener noreferrer">
                Message us
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/services">See services</Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto w-full max-w-sm lg:max-w-none"
        >
          <NodeMap />
        </motion.div>
      </div>
    </section>
  );
}
