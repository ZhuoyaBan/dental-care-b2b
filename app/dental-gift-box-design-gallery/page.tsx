import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { giftBoxCustomisationOptions, giftBoxGalleryItems } from "@/lib/giftBoxGallery";

export const metadata: Metadata = {
  title: "Dental Gift Box Design Gallery | Custom Aligner Packaging | Uvcare",
  description: "Browse custom dental gift box designs for clear aligner brands: magnetic boxes, drawer kits, inserts, logo printing, branded bags and patient starter kits.",
  alternates: { canonical: "/dental-gift-box-design-gallery" },
  openGraph: {
    title: "Dental Gift Box Design Gallery for Clear Aligner Brands | Uvcare",
    description: "Explore real packaging formats and customisation options for private-label aligner care kits.",
    url: "https://www.dentalcarepack.com/dental-gift-box-design-gallery",
  },
};

const faqs = [
  {
    question: "Can Uvcare create a dental gift box around our existing aligner-care products?",
    answer: "Yes. We can help plan a branded gift box around the Uvcare products in your order, including retainer cases, care tools and other accessories, then coordinate the pack-out before shipment.",
  },
  {
    question: "What can be customised on an aligner gift box?",
    answer: "Typical options include the box structure, dimensions, paper and board materials, exterior colour, surface finish, logo printing, artwork, gift bag and the internal insert layout.",
  },
  {
    question: "Can the insert be designed for more than one product?",
    answer: "Yes. Inserts can be planned around multiple aligner sets, a retainer case, removal tools, chewies, cleaning accessories, printed materials and other programme-specific items.",
  },
  {
    question: "Is this gallery a list of fixed off-the-shelf products?",
    answer: "No. These are reference designs showing packaging formats and layouts that can be adapted to a buyer's brand, product selection and patient-kit requirements.",
  },
];

export default function DentalGiftBoxDesignGalleryPage() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Dental Gift Box Design Gallery for Clear Aligner Brands",
    description: "A design gallery of custom dental gift boxes and packaging concepts for private-label clear aligner programmes.",
    url: "https://www.dentalcarepack.com/dental-gift-box-design-gallery",
    publisher: {
      "@type": "Organization",
      name: "Uvcare",
      url: "https://www.dentalcarepack.com",
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: giftBoxGalleryItems.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        image: `https://www.dentalcarepack.com${item.image}`,
      })),
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
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.04fr] lg:items-center lg:px-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">Private-label packaging inspiration</p>
              <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Dental Gift Box Design Gallery for Clear Aligner Brands
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Explore real packaging concepts for aligner patient kits—from compact case-and-accessory boxes to full branded welcome kits. Use the gallery to choose a direction, then we help adapt the structure, artwork and insert layout to your programme.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#design-gallery" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-blue-500">
                  Browse 21 Kit Concepts
                </a>
                <Link href="/custom-aligner-care-kit-manufacturer" className="inline-flex items-center justify-center rounded-xl border border-blue-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition-colors hover:border-blue-400 hover:text-blue-700">
                  Plan a Branded Care Kit
                </Link>
              </div>
              <p className="mt-5 text-sm text-slate-500">For dental brands, clear aligner labs, orthodontic clinics and distributors.</p>
            </div>
            <div className="relative rounded-3xl bg-white p-3 shadow-2xl shadow-black/30 sm:p-5">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
                <Image
                  src="/images/gift-box-gallery/complete-branded-aligner-care-kit.webp"
                  alt="Complete branded dental gift box with clear aligner care accessories"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-8 left-8 rounded-xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur sm:bottom-10 sm:left-10">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-600">One brand system</p>
                <p className="mt-1 text-sm font-semibold text-slate-900">Packaging, accessories and presentation aligned</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">Make the kit yours</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">Start with the patient experience, then build the packaging around it.</h2>
              <p className="mt-4 leading-7 text-slate-600">Whether you need an economical starter kit or a premium delivery box, the variables below can be coordinated with your product mix and brand guidelines.</p>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {giftBoxCustomisationOptions.map((option) => (
                <article key={option.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <div className="relative aspect-[4/3] bg-slate-50">
                    <Image src={option.image} alt={`${option.title} for custom dental gift boxes`} fill sizes="(min-width: 1024px) 23vw, (min-width: 640px) 45vw, 100vw" className="object-cover" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-slate-900">{option.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{option.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="design-gallery" className="scroll-mt-20 bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">Reference concepts</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">Gift box formats for aligner programmes</h2>
              </div>
              <p className="max-w-xl text-sm leading-6 text-slate-600">Every concept can be adapted. Share the products you want to include and your target presentation level; our team will recommend a feasible packaging route.</p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {giftBoxGalleryItems.map((item, index) => (
                <article key={item.slug} className={`group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl ${index === 0 ? "sm:col-span-2 lg:col-span-2" : ""}`}>
                  <div className={`relative overflow-hidden bg-slate-100 ${index === 0 ? "aspect-[16/8]" : "aspect-[4/3]"}`}>
                    <Image
                      src={item.image}
                      alt={`${item.name} custom dental gift box concept`}
                      fill
                      sizes={index === 0 ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 31vw, (min-width: 640px) 47vw, 100vw"}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-blue-600">{item.format}</p>
                    <h3 className="mt-2 text-xl font-bold text-slate-900">{item.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.highlights.map((highlight) => <span key={highlight} className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">{highlight}</span>)}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-slate-100">
              <Image src="/images/gift-box-gallery/gift-box-workshop.webp" alt="Uvcare gift box production workshop" fill sizes="(min-width: 1024px) 44vw, 100vw" className="object-cover" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">A simpler sourcing route</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">Turn selected SKUs into one ready-to-present patient kit.</h2>
              <p className="mt-5 leading-7 text-slate-600">Uvcare supplies aligner cases, UV cases, removal tools, chewies and dental accessories alongside custom packaging. When the products are purchased from us, we can coordinate the kit assembly into your selected gift box before the consolidated shipment—helping your team reduce supplier coordination and keep the presentation consistent.</p>
              <Link href="/custom-aligner-care-kit-manufacturer" className="mt-7 inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-blue-700">See the one-stop aligner care kit process</Link>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-blue-600">Packaging sourcing FAQ</p>
            <h2 className="mt-3 text-center text-3xl font-bold tracking-tight text-slate-900">Questions buyers ask before planning a dental kit</h2>
            <div className="mt-10 space-y-4">
              {faqs.map((faq) => (
                <article key={faq.question} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="font-bold text-slate-900">{faq.question}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-blue-600 py-16">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-white">Have a concept, product list or brand guideline?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-blue-100">Send it to our team. We will help you determine a practical kit configuration, packaging direction and next sourcing step.</p>
            <a href="https://wa.me/8618822885445" target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-blue-700 transition-colors hover:bg-blue-50">Discuss Your Gift Box Project on WhatsApp</a>
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
