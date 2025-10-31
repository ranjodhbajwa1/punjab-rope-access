import Image from "next/image";

export const metadata = {
  title: "High-Rise Window Cleaning in Calgary",
  description:
    "Professional rope access window cleaning for high-rise buildings in Calgary.",
};

export default function WindowCleaningPage() {
  return (
    <section className="min-h-screen bg-white text-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          High-Rise Window Cleaning – Calgary
        </h1>
        <p className="text-lg mb-8 leading-relaxed">
          Our IRATA-certified technicians provide spotless high-rise window
          cleaning for commercial and residential towers throughout Calgary.
          We use rope-access methods for maximum safety and minimal disruption.
        </p>

        <Image
          src="/images/service-window.jpg"
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
          To schedule your next cleaning or maintenance,{" "}
          <a href="/contact" className="text-red-600 font-semibold underline">
            request a quote here
          </a>
          .
        </p>
      </div>
    </section>
  );
}
