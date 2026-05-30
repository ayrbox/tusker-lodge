import Banner from "@/components/sections/Banner";

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Banner title="Privacy Policy" path="How we protect your data." />
      <div className="container mx-auto py-16 px-6 md:px-12 max-w-5xl">
        {children}
      </div>
    </main>
  );
}
