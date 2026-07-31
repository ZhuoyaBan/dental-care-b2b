import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Custom Aligner Care Kit Manufacturer | Private Label Orthodontic Kits | Uvcare",
  description: "Uvcare supplies custom aligner care kits for dental brands: retainer cases, accessories, branded gift boxes, free kit assembly and one consolidated shipment.",
  alternates: { canonical: "/custom-aligner-care-kit-manufacturer" },
  openGraph: {
    title: "Custom Aligner Care Kit Manufacturer | Uvcare",
    description: "One supplier for private-label aligner cases, accessories, gift boxes and coordinated patient-kit assembly.",
    url: "https://www.dentalcarepack.com/custom-aligner-care-kit-manufacturer",
  },
};

const kitComponents = [
  { title: "Retainer & UV cases", description: "Classic, premium and UV-C case formats that can carry your logo and colour direction.", image: "/images/products/aligner-case-v1-blue.webp", href: "/products/retainer-case" },
  { title: "Removal tools & chewies", description: "Daily orthodontic accessories that make an aligner kit more useful from day one.", image: "/images/products/aligner-remover-chewie.webp", href: "/products/dental-accessories" },
  { title: "Cleaning accessories", description: "Brushes, cleaning-care items and storage solutions selected for your patient-care programme.", image: "/images/products/vented-cleaning-box-black-brown.webp", href: "/products/cleaning-box" },
  { title: "Gift boxes & bags", description: "Custom packaging, insert layouts and brand presentation for your finished patient kit.", image: "/images/gift-box-gallery/minimalist-book-style-kit.webp", href: "/products/gift-box" },
];

const buyerProfiles = [
  ["Clear aligner brands", "Launch a consistent private-label patient kit across your product and care touchpoints."],
  ["Dental labs", "Provide partner clinics with a professional kit that supports your aligner workflow and brand."],
  ["Orthodontic clinics & groups", "Create a polished handover kit to improve the patient experience and reinforce your clinic identity."],
  ["Distributors", "Build a coordinated product bundle with fewer sourcing relationships and a clearer offer for customers."],
];

const faqs = [
  {
    question: "What is a custom aligner care kit?",
    answer: "It is a coordinated, branded set of clear-aligner care products—such as a retainer case, removal tools, chewies, cleaning accessories and printed materials—packed in a gift box designed for a dental brand, clinic or lab programme.",
  },
  {
    question: "Can Uvcare supply both the accessories and the gift box?",
    answer: "Yes. Uvcare supplies aligner-care products and custom dental packaging. This lets buyers discuss the product mix, packaging structure and brand presentation with one supplier.",
  },
  {
    question: "Do you assemble the products inside the gift box?",
    answer: "For products purchased from Uvcare as part of the order, we can coordinate complimentary kit assembly into the agreed gift box before shipment. The final approach depends on the product mix, packaging structure and project requirements.",
  },
  {
    question: "Which parts of an aligner care kit can be customised?",
    answer: "Common options include product logo printing, product colour, gift box structure, exterior artwork, internal insert layout, gift bag and printed patient materials. OEM and ODM scopes can be discussed according to the project.",
  },
  {
    question: "Who is this service designed for?",
    answer: "The service is designed for dental brands, clear aligner manufacturers and labs, orthodontic clinics, clinic groups and distributors that need a cohesive branded patient-care solution.",
  },
];

export default function CustomAlignerCareKitManufacturerPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Custom Aligner Care Kit Manufacturer",
    description: "Private-label aligner care kit manufacturing, custom packaging and coordinated product assembly for dental brands, labs and clinics.",
    url: "https://www.dentalcarepack.com/custom-aligner-care-kit-manufacturer",
    about: {
      "@type": "Thing",
      name: "Custom clear aligner care kits and private-label orthodontic accessories",
    },
    publisher: {
      "@type": "Organization",
      name: "Uvcare",
      url: "https://www.dentalcarepack.com",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <Header />
      <main>
        <section className="overflow-hidden bg-gradient-to-br from-blue-50 via-white to-sky-50 pt-32 pb-20 sm:pt-40 sm:pb-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:px-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">Private label • OEM • coordinated pack-out</p>
              <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Custom Aligner Care Kit Manufacturer for Dental Brands</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">Build a branded patient-care kit with one B2B supplier: retainer cases, orthodontic accessories, custom gift boxes and a consolidated shipment. Uvcare helps dental brands, labs and clinics turn the products they need into one cohesive delivery experience.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="https://wa.me/8618822885445" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-200 transition-colors hover:bg-blue-500">Discuss Your Kit on WhatsApp</a>
                <Link href="/dental-gift-box-design-gallery" className="inline-flex items-center justify-center rounded-xl border border-blue-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition-colors hover:border-blue-400 hover:text-blue-700">View Gift Box Design Gallery</Link>
              </div>
              <div className="mt-8 grid max-w-2xl grid-cols-3 gap-3 text-center">
                {[['One supplier', 'Products + packaging'], ['Free assembly', 'For Uvcare order items'], ['One shipment', 'One coordinated delivery']].map(([title, description]) => (
                  <div key={title} className="rounded-xl border border-blue-100 bg-white px-3 py-4 shadow-sm">
                    <p className="text-sm font-bold text-slate-900">{title}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">{description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-3xl bg-white p-3 shadow-2xl shadow-black/30 sm:p-5">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
                <Image src="/images/gift-box-gallery/complete-branded-aligner-care-kit.webp" alt="Private-label aligner care kit with custom dental gift box and accessories" fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="mt-3 rounded-xl border border-blue-100 bg-white p-4 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-600">Your branded kit</p>
                <p className="mt-1 text-sm font-semibold text-slate-900">Selected care products, designed packaging and one consistent handover.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">One source for the essentials</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">Choose the items your patients use, then present them as one brand system.</h2>
              <p className="mt-4 leading-7 text-slate-600">A patient kit can be a focused case-and-tool combination or a fuller welcome package. We help buyers choose practical combinations from the Uvcare range and match the packaging to the required presentation level.</p>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {kitComponents.map((component) => (
                <Link key={component.title} href={component.href} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
                  <div className="relative aspect-[4/3] bg-slate-50">
                    <Image src={component.image} alt={component.title} fill sizes="(min-width: 1024px) 23vw, (min-width: 640px) 45vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-slate-900">{component.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{component.description}</p>
                    <span className="mt-4 inline-flex text-sm font-semibold text-blue-600">Explore options →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-white shadow-lg">
              <Image src="/images/gift-box-gallery/split-compartment-magnetic-box.webp" alt="Custom rigid magnetic dental gift box with compartments" fill sizes="(min-width: 1024px) 44vw, 100vw" className="object-cover" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">How the one-stop model works</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">Less back-and-forth. More control of the finished brand experience.</h2>
              <ol className="mt-7 space-y-5">
                {[
                  ["1", "Define the kit", "Tell us the audience, required products, target price level and branding direction."],
                  ["2", "Select products and packaging", "Choose compatible Uvcare accessories, then decide the gift box format, artwork and insert layout."],
                  ["3", "Approve the coordinated plan", "We confirm the product, customisation and packaging details before production."],
                  ["4", "Assemble and ship", "We pack the Uvcare items in the agreed gift box and arrange one consolidated shipment to your destination."],
                ].map(([step, title, description]) => (
                  <li key={step} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">{step}</span>
                    <div><h3 className="font-bold text-slate-900">{title}</h3><p className="mt-1 leading-6 text-slate-600">{description}</p></div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">Who this is for</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">A practical private-label solution for the teams that deliver aligner treatment.</h2>
            </div>
            <div className="mt-9 grid gap-5 sm:grid-cols-2">
              {buyerProfiles.map(([title, description]) => (
                <article key={title} className="rounded-2xl border border-slate-200 p-6"><h3 className="text-lg font-bold text-slate-900">{title}</h3><p className="mt-2 leading-7 text-slate-600">{description}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-blue-50 py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">Design before you source</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">See what your branded gift box could look like.</h2>
              <p className="mt-4 leading-7 text-slate-600">Our gallery shows reference structures for compact patient kits, premium magnetic boxes, drawer systems, branded bags, multi-compartment layouts and more. It is the fastest way to align on a packaging direction before requesting a quote.</p>
              <Link href="/dental-gift-box-design-gallery" className="mt-7 inline-flex rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-blue-700">Browse the Dental Gift Box Design Gallery</Link>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-white shadow-lg"><Image src="/images/gift-box-gallery/two-level-drawer-box.webp" alt="Two-level custom dental gift box for aligner accessories" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" /></div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-blue-600">Buyer FAQ</p>
            <h2 className="mt-3 text-center text-3xl font-bold tracking-tight text-slate-900">Custom aligner care kits, explained</h2>
            <div className="mt-10 space-y-4">
              {faqs.map((faq) => <article key={faq.question} className="rounded-2xl border border-slate-200 p-6 shadow-sm"><h3 className="font-bold text-slate-900">{faq.question}</h3><p className="mt-3 leading-7 text-slate-600">{faq.answer}</p></article>)}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-16">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-white">Ready to turn your product list into a branded aligner care kit?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-300">Send us your logo, product ideas or a reference packaging concept. We will help you define the next practical sourcing step.</p>
            <a href="https://wa.me/8618822885445" target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-blue-500">Start Your Kit Inquiry on WhatsApp</a>
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
