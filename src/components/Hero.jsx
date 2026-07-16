import { useRef, Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import Magnetic from "@/components/Magnetic";
import { CONFIG, LINKS } from "@/config";

// Three.js/R3F/drei are ~900kB — split into their own chunk so only
// Home (which renders this scene) pays that cost.
const NetworkScene = lazy(() => import("@/components/three/NetworkScene"));

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const sceneOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden border-b border-border">
      <div className="gradient-mesh" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-8 px-4 py-20 lg:grid-cols-[1.1fr_1fr] lg:py-28">
        <motion.div style={{ y: textY, opacity: textOpacity }}>
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
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <Button asChild size="lg">
                <a href={LINKS.messenger} target="_blank" rel="noopener noreferrer">
                  Message us
                </a>
              </Button>
            </Magnetic>
            <Magnetic strength={0.25}>
              <Button asChild size="lg" variant="outline">
                <Link to="/services">See services</Link>
              </Button>
            </Magnetic>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ opacity: sceneOpacity }}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative h-[340px] w-full sm:h-[420px] lg:h-[480px]"
        >
          <Suspense fallback={null}>
            <NetworkScene />
          </Suspense>
        </motion.div>
      </div>
    </section>
  );
}
