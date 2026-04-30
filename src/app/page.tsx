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
    <main className="min-h-screen overflow-hidden">
      <Hero />
      <div className="relative">
        <Countdown />
        <Divider />
        <Ceremony />
        <Divider />
        <Banquet />
        <Divider />
        <Itinerary />
        <Divider />
        <RsvpForm />
        <Divider />
        <GiftRegistry />
        <Divider />
        <Music />
        <Footer />
      </div>
    </main>
  );
}

function Divider() {
  return (
    <div className="w-full flex justify-center py-8 opacity-40">
      <svg width="120" height="20" viewBox="0 0 120 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 10C30 20 40 0 60 10C80 20 90 0 110 10" stroke="#C9A96E" strokeWidth="1" strokeLinecap="round"/>
        <circle cx="60" cy="10" r="3" fill="#C4845A"/>
      </svg>
    </div>
  );
}
