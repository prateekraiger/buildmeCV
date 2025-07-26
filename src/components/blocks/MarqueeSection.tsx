import { Marquee } from "@/components/ui/marquee";

export function MarqueeSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Trusted by Developers Worldwide</h2>
        <Marquee pauseOnHover className="[--duration:30s]">
          <div className="mx-4 text-lg font-semibold text-gray-700">React</div>
          <div className="mx-4 text-lg font-semibold text-gray-700">TypeScript</div>
          <div className="mx-4 text-lg font-semibold text-gray-700">Tailwind CSS</div>
          <div className="mx-4 text-lg font-semibold text-gray-700">Framer Motion</div>
          <div className="mx-4 text-lg font-semibold text-gray-700">Shadcn UI</div>
          <div className="mx-4 text-lg font-semibold text-gray-700">Vite</div>
          <div className="mx-4 text-lg font-semibold text-gray-700">Zustand</div>
          <div className="mx-4 text-lg font-semibold text-gray-700">React Router</div>
        </Marquee>
      </div>
    </section>
  );
}