export const metadata = {
  title: "Projects | Punjab Rope Access Calgary",
  description:
    "View recent Calgary rope access, window cleaning, and maintenance projects completed by Punjab Rope Access.",
};

export default function ProjectsPage() {
  return (
    <section className="min-h-screen bg-white text-gray-900 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Our Projects</h1>
        <p className="text-lg mb-6">
          Here are a few recent high-rise maintenance and rope access projects
          our Calgary team has completed. More visuals and case studies coming
          soon.
        </p>
        <ul className="list-disc ml-6 text-lg">
          <li>Downtown Calgary Tower – Full facade window cleaning</li>
          <li>Beltline Office Complex – Annual anchor inspection</li>
          <li>Residential High-Rise – Pressure washing and caulking</li>
        </ul>
      </div>
    </section>
  );
}
