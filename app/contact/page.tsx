import ContactForm from "../../components/ContactForm";

export const metadata = {
  title: "Contact | Punjab Rope Access Calgary",
  description:
    "Get in touch with Punjab Rope Access for rope access and high-rise maintenance services in Calgary.",
};

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-white text-gray-900 py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Punjab Rope Access</h1>
        <p className="text-lg mb-6">
          Speak directly with <strong>Ranjodh</strong> at{" "}
          <a href="tel:+16044018792" className="text-red-600 font-semibold">
            604-401-8792
          </a>{" "}
          or fill out the form below.
        </p>
      </div>
      <ContactForm />
    </section>
  );
}
