import Image from "next/image";

export const metadata = {
  title: "High-Rise Painting and Caulking Calgary",
  description:
    "Professional rope access painting and Caulking Services for high-rise buildings in Calgary.",
};

export default function WindowCleaningPage() {
  return (
    <section className="min-h-screen bg-white text-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          High-Rise Painting and Caulking Services
        </h1>
        <p className="text-lg mb-8 leading-relaxed">
          Our painting and caulking services in Calgary help protect and 
          maintain your building’s exterior from weather damage and wear. 
          Punjab Rope Access uses rope access methods to reach high or complex 
          structures efficiently without costly scaffolding. We provide exterior 
          painting, sealing, and joint caulking to prevent water leaks and 
          enhance your property’s look. Choose our Calgary-based team for 
          durable, clean, and precise high-rise painting and caulking solutions.

        </p>

        <Image
          src="/images/service-painting.jpg"
          alt="High-rise painting - high-rise caulking services"
          width={600}
          height={600}
          className="rounded-lg mb-10"
        />

        { /*
        <video
          src="/videos/window-cleaning-demo.mp4"
          controls
          className="w-full rounded-lg mb-10"
        />
          */ }

        <p className="text-lg">
          To schedule your next Painting or Caulking services,{" "}
          <a href="/contact" className="text-red-600 font-semibold underline">
            request a quote here
          </a>
          .
        </p>
      </div>
    </section>
  );
}
