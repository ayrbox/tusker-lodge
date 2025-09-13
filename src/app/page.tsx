import Featured from "@/components/sections/Featured";
import Hero from "@/components/sections/Hero";
import Rooms from "@/components/sections/Rooms";
import Testimonials from "@/components/sections/Testimonials";
import ZuttoSushi from "@/components/sections/ZuttoSushi";

export default function Home() {
  return (
    <main className="font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <Featured />
      <Rooms />
      <Testimonials />
      <ZuttoSushi />
    </main>
  );
}
