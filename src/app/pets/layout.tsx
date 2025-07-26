import ZuttoSushi from "@/components/sections/ZuttoSushi";
import Banner from "@/components/sections/Banner";

export default function RoomsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="font-[family-name:var(--font-geist-sans)]">
      <Banner title="Pets" path="We love your pets as much as you do." />
      <div className="container mx-auto py-24 p-8">{children}</div>
      <ZuttoSushi />
    </main>
  );
}
