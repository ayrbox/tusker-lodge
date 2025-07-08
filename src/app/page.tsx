import CheckAvailablity from "@/components/sections/CheckAvailablity";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <CheckAvailablity />
    </main>
  );
}
