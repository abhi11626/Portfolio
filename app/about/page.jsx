import About from "@/components/aboutMe";

export const metadata = {
  title: "About Me",
  description: "Details about my profile",
};

export default function AboutPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 md:px-20 py-24">
      <About />
    </section>
  );
}
