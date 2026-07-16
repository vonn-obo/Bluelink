import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Camera, Zap } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { CONFIG } from "@/config";

// Add an entry here whenever a new icon name is used in CONFIG.services.
const ICONS = { Camera, Zap };

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

export default function ServicesGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {CONFIG.services.map((service) => {
          const Icon = ICONS[service.icon] ?? Zap;
          return (
            <motion.div key={service.slug} variants={item}>
              <Card className="h-full transition-shadow hover:shadow-md">
                <CardHeader>
                  <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon size={20} />
                  </div>
                  <CardTitle>{service.name}</CardTitle>
                  <CardDescription>{service.summary}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/services" className="text-sm font-medium text-primary hover:underline">
                    Learn more
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
