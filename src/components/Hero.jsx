import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CONFIG, LINKS } from "@/config";

export default function Hero() {
  return (
    <section className="bg-muted/50 overflow-hidden">
      <div className="relative py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mx-auto max-w-3xl text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            {CONFIG.companyName}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-foreground/80 mx-auto my-6 max-w-2xl text-balance text-xl sm:text-2xl"
          >
            {CONFIG.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col items-center justify-center gap-3 *:w-full sm:flex-row sm:*:w-fit"
          >
            <Button asChild size="lg">
              <a href={LINKS.messenger} target="_blank" rel="noopener noreferrer">
                <span className="text-nowrap">Message us</span>
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/services">
                <span className="text-nowrap">See services</span>
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
