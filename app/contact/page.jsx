import ContactClient from "@/components/contactClient";

export const metadata = {
  title: "Contact Me",
  description: "Connect me thru different ways",
};

export default function ContactPage() {
  return (
    <main className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        <ContactClient />
      </div>
    </main>
  );
}
