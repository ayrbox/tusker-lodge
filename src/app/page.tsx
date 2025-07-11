import CheckAvailablity from "@/components/sections/CheckAvailablity";
import Featured from "@/components/sections/Featured";
import Hero from "@/components/sections/Hero";
import Rooms from "@/components/sections/Rooms";

export default function Home() {
  return (
    <main className="font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <CheckAvailablity />
      <Featured />
      <Rooms />
    </main>
  );
}
