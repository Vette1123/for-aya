import Hero from "@/components/Hero";
import Reasons from "@/components/Reasons";
import Letter from "@/components/Letter";
import Timeline from "@/components/Timeline";
import HeartGame from "@/components/HeartGame";
import Footer from "@/components/Footer";
import ClientFx from "@/components/ClientFx";
import HeartPattern from "@/components/HeartPattern";
import Aura from "@/components/Aura";

export default function Page() {
  return (
    <main className="relative">
      <Aura />
      <HeartPattern />
      <ClientFx />
      <div className="relative z-10">
        <Hero />
        <Reasons />
        <Letter />
        <Timeline />
        <HeartGame />
        <Footer />
      </div>
    </main>
  );
}
