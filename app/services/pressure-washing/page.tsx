import Image from "next/image";

export const metadata = {
  title: "High Pressure wash and Cleaning in Calgary",
  description:
    "Professional rope access window cleaning with pressure washer or general pressure washing for high-rise buildings in Calgary.",
};

export default function WindowCleaningPage() {
  return (
    <section className="min-h-screen bg-white text-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          Pressure Wash Services – Calgary
        </h1>
        <p className="text-lg mb-8 leading-relaxed">
          Punjab Rope Access provides expert pressure washing 
          services in Calgary for commercial buildings, high-rises, 
          and exterior surfaces. We remove dirt, grime, oil, and 
          stains from walls, glass, concrete, and facades using 
          high-pressure cleaning systems. Our rope access technicians 
          can safely reach difficult areas, restoring your property’s 
          appearance and extending its lifespan. Book our Calgary 
          pressure washing service to keep your building looking 
          clean and professional.
        </p>

        <Image
          src="/images/service-pressure.jpg"
          alt="High-rise window cleaning"
          width={1200}
          height={600}
          className="rounded-lg mb-10"
        />

        <video
          src="/videos/window-cleaning-demo.mp4"
          controls
          className="w-full rounded-lg mb-10"
        />

        <p className="text-lg">
          To schedule your next Pressure Wash,{" "}
          <a href="/contact" className="text-red-600 font-semibold underline">
            request a quote here
          </a>
          .
        </p>
      </div>
    </section>
  );
}
