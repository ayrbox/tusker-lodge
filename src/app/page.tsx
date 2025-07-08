import CheckAvailablity from "@/components/sections/CheckAvailablity";
import Featured from "@/components/sections/Featured";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <CheckAvailablity />
      <Featured />
    </main>
  );
}
