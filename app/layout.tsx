import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: {
    default: "Punjab Rope Access | Rope Access & High-Rise Services Calgary",
    template: "%s | Punjab Rope Access Calgary",
  },
  description:
    "Certified rope access technicians in Calgary offering high-rise window cleaning, anchor inspections, pressure washing, and facade maintenance.",
  openGraph: {
    title: "Punjab Rope Access | Calgary Rope Access Experts",
    description:
      "Professional rope access, window cleaning, and exterior maintenance in Calgary.",
    url: "https://punjabropeaccess.com",
    siteName: "Punjab Rope Access",
    locale: "en_CA",
    type: "website",
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />


        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Punjab Rope Access",
      image: "https://punjabropeaccess.com/logo.png",
      "@id": "https://punjabropeaccess.com",
      url: "https://punjabropeaccess.com",
      telephone: "+1-403-000-0000",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Calgary Downtown",
        addressLocality: "Calgary",
        addressRegion: "AB",
        postalCode: "T2P",
        addressCountry: "CA",
      },
      openingHours: "Mo-Fr 08:00-18:00",
      sameAs: [
        "https://www.facebook.com/punjabropeaccess",
        "https://www.instagram.com/punjabropeaccess",
        "https://www.linkedin.com/company/punjabropeaccess",
      ],
    }),
  }}
/>
      <script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-WTFT4LSMRF"
></script>
<script
  id="ga-init"
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-WTFT4LSMRF');
    `,
  }}
/>

      </body>
    </html>
  );
}
