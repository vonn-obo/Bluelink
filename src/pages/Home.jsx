import PageTransition from "@/components/PageTransition";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <ServicesGrid />
    </PageTransition>
  );
}
