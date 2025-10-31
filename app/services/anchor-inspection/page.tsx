import Image from "next/image";

export const metadata = {
  title: "Anchor Inspection in Calgary",
  description:
    "Professional Anchor Inspection and BEVA testing for high-rise buildings in Calgary.",
};

export default function WindowCleaningPage() {
  return (
    <section className="min-h-screen bg-white text-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          Anchor Inspection – Calgary
        </h1>
        <p className="text-lg mb-8 leading-relaxed">
            Punjab Rope Access provides certified anchor inspection services in Calgary to 
            ensure the safety and compliance of your building’s fall protection systems.
            Our IRATA and SPRAT-trained technicians perform thorough testing, certification, 
            and maintenance of roof anchors as required by Alberta OHS standards. 
            Regular anchor inspections help property managers and building owners stay compliant,
            reduce liability, and protect workers performing high-rise maintenance. Contact us 
            today for professional anchor testing and certification in Calgary.

        </p>

        <Image
          src="/images/service-anchor.jpg"
          alt="anchor inspection Calgary, BEVA testing Calgary"
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
          To schedule your next Inspection or maintenance,{" "}
          <a href="/contact" className="text-red-600 font-semibold underline">
            request a quote here
          </a>
          .
        </p>
      </div>
    </section>
  );
}
