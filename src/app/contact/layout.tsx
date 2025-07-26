import ZuttoSushi from "@/components/sections/ZuttoSushi";
import Banner from "@/components/sections/Banner";

export default function RoomsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="font-[family-name:var(--font-geist-sans)]">
      <Banner title="Contact us" path="Call, Email, Visit" />
      <div className="container mx-auto py-24 p-8">{children}</div>
      <ZuttoSushi />
    </main>
  );
}
