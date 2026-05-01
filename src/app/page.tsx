import EnvelopeIntro from "@/components/EnvelopeIntro";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Ceremony from "@/components/Ceremony";
import Banquet from "@/components/Banquet";
import Itinerary from "@/components/Itinerary";
import RsvpForm from "@/components/RsvpForm";
import GiftRegistry from "@/components/GiftRegistry";
import Music from "@/components/Music";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <EnvelopeIntro>
      <main className="min-h-screen overflow-hidden">
        <Hero />
        <div className="relative">
          <Countdown />
          <Divider variant={1} />
          <Ceremony />
          <Divider variant={2} />
          <Banquet />
          <Divider variant={1} />
          <Itinerary />
          <Divider variant={2} />
          <RsvpForm />
          <Divider variant={1} />
          <GiftRegistry />
          <Divider variant={2} />
          <Music />
          <Footer />
        </div>
      </main>
    </EnvelopeIntro>
  );
}

function Divider({ variant }: { variant: 1 | 2 }) {
  const src = variant === 1 ? "/separador1.png" : "/separador2.png";
  return (
    <div className="w-full flex justify-center py-12">
      <img 
        src={src} 
        alt="Separador decorativo" 
        className="w-[150px] md:w-[200px] h-auto object-contain opacity-80" 
      />
    </div>
  );
}
