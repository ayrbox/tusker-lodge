import ZuttoSushi from "@/components/sections/ZuttoSushi";
import Banner from "@/components/sections/Banner";

export default function RoomsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="font-[family-name:var(--font-geist-sans)]">
      <Banner title="Our Rooms" path="All Room En-suite &amp; Pet Friendly" />
      <div className="container mx-auto py-24">{children}</div>
      <ZuttoSushi />
    </main>
  );
}
