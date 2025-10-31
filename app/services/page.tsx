export const metadata = {
  title: "Our Services | Punjab Rope Access Calgary",
  description:
    "Explore all rope access services including high-rise window cleaning, anchor inspections, pressure washing, and painting in Calgary.",
};

export default function ServicesPage() {
  return (
    <section className="min-h-screen bg-white text-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center">
          Our Rope Access Services
        </h1>
        <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <li>
            <a href="/services/window-cleaning" className="text-red-600 underline font-semibold">
              High-Rise Window Cleaning
            </a>
          </li>
          <li>
            <a href="/services/anchor-inspection" className="text-red-600 underline font-semibold">
              Anchor Inspections
            </a>
          </li>
          <li>
            <a href="/services/pressure-washing" className="text-red-600 underline font-semibold">
              Pressure Washing
            </a>
          </li>
          <li>
            <a href="/services/painting" className="text-red-600 underline font-semibold">
              Painting & Caulking
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
