import Hero from "@/components/Hero";
import Reasons from "@/components/Reasons";
import Letter from "@/components/Letter";
import Timeline from "@/components/Timeline";
import HeartGame from "@/components/HeartGame";
import Footer from "@/components/Footer";
import Petals from "@/components/Petals";
import Cursor from "@/components/Cursor";

export default function Page() {
  return (
    <main className="relative">
      <Petals count={20} />
      <Cursor />
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
