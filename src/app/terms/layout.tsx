import Banner from "@/components/sections/Banner";

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Banner title="Terms & Conditions" path="Our commitment to your stay." />
      <div className="container mx-auto py-16 px-6 md:px-12 max-w-5xl">
        {children}
      </div>
    </main>
  );
}
