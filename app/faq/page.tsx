import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Uvcare B2B Aligner Care Manufacturer — Sourcing, OEM & ODM",
  description: "Answers to common questions about MOQ, custom logo printing, lead times, OEM/ODM development, quality control, and how to choose a reliable dental product manufacturer in China.",
  alternates: { canonical: "https://www.dentalcarepack.com/faq" },
};

const orderFaqs = [
  {
    q: "What is your minimum order quantity (MOQ)?",
    a: "Standard MOQs start from 100 PCS for retainer cases and 200 PCS for cleaning boxes. Electronic products (UV-C sterilizer cases, ultrasonic cleaners) start at 500-1,000 PCS. Gift boxes start at 100 PCS. Dental impression kits start at 500 sets. We also support smaller sample orders for quality evaluation before bulk commitment.",
  },
  {
    q: "Can I customize the logo on the cases?",
    a: "Yes. We offer professional silk-screen printing and laser engraving for all retainer cases, UV-C sterilizer cases, and cleaning products. We support full OEM customization — your logo, your colors, your packaging. Custom Pantone color matching is available from 3,000 PCS for most products.",
  },
  {
    q: "What customization options are available?",
    a: "Logo printing (silk-screen, laser engraving, UV printing), custom Pantone colors, custom packaging (color box, blister pack, gift box, poly bag), material selection (PP, ABS, silicone, food-grade plastics), and product modifications (mold changes, feature additions). For completely new designs, see our ODM service.",
  },
  {
    q: "How long is the typical lead time?",
    a: "Standard orders: 7-12 days for retainer cases and accessories, 15-20 days for ultrasonic cleaners and UV-C cases. Custom OEM orders: 15-30 days depending on complexity. Full ODM projects: 2-4 months including design, prototyping, tooling, and mass production. We provide photo and video updates throughout production.",
  },
  {
    q: "Do you ship internationally?",
    a: "Yes. We ship to 50+ countries via DHL, FedEx, UPS, and sea freight. Express shipping typically takes 3-7 days. Sea freight takes 15-35 days depending on destination. We handle export documentation and customs requirements.",
  },
  {
    q: "Are your products BPA-free and food-grade?",
    a: "Yes. All retainer cases, cleaning boxes, and accessories are made from BPA-free, food-grade, medical-grade materials that are safe for oral contact. Our silicone products use medical-grade silicone, not industrial-grade. Materials comply with FDA 21 CFR and EU 10/2011 standards.",
  },
  {
    q: "Can I order samples before placing a bulk order?",
    a: "Yes, we strongly encourage it. Free samples are available for quality evaluation — you only pay shipping. Contact us via WhatsApp (+86 188 2288 5445) with your product interest and shipping address, and we'll send samples within 2-3 days.",
  },
  {
    q: "What certifications do your products have?",
    a: "Our factory meets ISO 9001 (quality management system), CE (EU compliance), and FDA compliance standards. All materials are BPA-free and food-grade. Certificates and test reports are available upon request for buyer verification.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept T/T (bank transfer), PayPal, Western Union, and Alibaba Trade Assurance. For new customers, we typically require 30% deposit before production and 70% balance before shipping. Payment terms can be discussed for repeat customers with established trust.",
  },
  {
    q: "What is the difference between OEM and ODM?",
    a: "OEM (Original Equipment Manufacturing): We print your logo on existing product designs. You choose the model, color, and packaging. Lower MOQ (100-1,000 PCS), faster lead time. ODM (Original Design Manufacturing): We develop a completely new product from your concept — new shape, new materials, new functionality. Higher MOQ (5,000+ PCS), longer development time, but you get a unique product no competitor can copy. Learn more on our custom dental product development page.",
  },
  {
    q: "Can you develop a completely new custom product?",
    a: "Yes. Our ODM service covers the full development cycle: concept discussion, industrial design, 3D modeling, prototyping, tooling, mass production, and packaging. Past innovations include the 2-in-1 aligner remover and chewie, UV-C sterilizer cases, and dental scan box concepts. ODM MOQ typically starts at 5,000 PCS. See our custom dental product development partner page for details.",
  },
  {
    q: "What is the cooperation process from idea to delivery?",
    a: "Step 1: Share your logo (AI/EPS format) and product requirements. Step 2: We create design mockups and ship samples for evaluation. Step 3: After sample approval, we begin production with photo/video updates throughout. Step 4: Quality control inspection before shipping. Step 5: Worldwide delivery via DHL/FedEx/UPS. Total timeline: 2-6 weeks for OEM, 2-4 months for ODM.",
  },
];

const sourcingFaqs = [
  {
    q: "How do I verify a reliable dental product manufacturer in China?",
    a: "Look for these signals: (1) They own their factory and molds, not just a trading company. (2) They have ISO 9001, CE, or FDA certifications. (3) They offer factory video tours or photos. (4) They provide free samples for quality evaluation. (5) They have verifiable export experience to 50+ countries. (6) They respond professionally with detailed product specifications, not just price lists. Uvcare meets all of these criteria — we are a manufacturer in Shenzhen with 10+ years of experience and 500+ B2B clients worldwide.",
  },
  {
    q: "What should I look for when choosing a retainer case supplier?",
    a: "Check for: genuine BPA-free food-grade materials (request material certificates), consistent color matching (Pantone), smooth mold finishes (no flash or rough edges), reliable logo printing (won't scratch off), and proper packaging for international shipping. Also verify MOQ flexibility — a real manufacturer can often accommodate smaller test orders. Ask for samples from 2-3 suppliers and compare quality side by side. Visit our retainer case manufacturer page for a detailed comparison.",
  },
  {
    q: "Do you offer UV-C sterilizer cases for OEM brands?",
    a: "Yes. We are one of the few factories in China that actually manufactures UV-C retainer sterilizer cases with genuine germicidal LEDs (254nm-275nm wavelength). Most UV case sellers on Amazon or Alibaba are trading companies reselling generic products. Our UV-C cases kill 99.99% of bacteria in 3-5 minutes, feature USB-C charging and auto-shutoff safety, and are available with custom OEM logo printing (MOQ 1,000 PCS). See our UV retainer case manufacturer page.",
  },
  {
    q: "Can you manufacture custom Invisalign-compatible accessories?",
    a: "Yes. We manufacture retainer cases, cleaning products, and accessories that are compatible with Invisalign, Angel Aligner, and all major clear aligner systems. Our cases are designed to fit standard aligner dimensions. We use 'compatible with clear aligner workflows' language rather than claiming official Invisalign partnership — we are an independent manufacturer, not an authorized Invisalign accessory maker. Custom logo printing is available on all compatible products.",
  },
  {
    q: "What products can I private-label under my dental brand?",
    a: "You can private-label our entire product range: retainer cases (square, round, slim, silicone, UV-C), cleaning boxes (soaking, ultrasonic), gift boxes, dental accessories (removal hooks, chewies, 2-in-1 tools, cleaning tablets, brushes, foam), and dental impression kits. Each product can carry your brand logo, custom colors, and branded packaging. This lets you build a complete aligner care product line under one brand identity without investing in your own factory.",
  },
  {
    q: "Can you supply a complete aligner care product line?",
    a: "Yes — this is our core value proposition. Uvcare is a one-stop manufacturer covering the entire aligner care lifecycle: dental impression kits (putty and digital scan), retainer cases (standard and UV-C), cleaning solutions (soaking boxes, ultrasonic cleaners, tablets, foam), orthodontic accessories (hooks, chewies, brushes), and premium gift packaging. Instead of sourcing from 5-6 different suppliers, partner with one manufacturer. Browse our full product catalog.",
  },
  {
    q: "How do you handle quality control and defective products?",
    a: "Every batch goes through a 3-step QC process: (1) Raw material inspection — verifying material certificates and BPA-free compliance. (2) In-line inspection during production — checking dimensions, logo printing quality, and assembly. (3) Final batch inspection before shipping — random sampling for function, finish, and packaging. If any defective units are found after delivery, we replace them free of charge in the next order or issue a credit. We document all QC steps with photos.",
  },
  {
    q: "What export documents and support do you provide?",
    a: "We provide: commercial invoice, packing list, certificate of origin (CO), material safety data sheets (MSDS), and product test reports as needed. For EU customers, we provide CE compliance documentation. For US customers, we provide FDA compliance information. We can also assist with FOB, CIF, or DDP shipping terms depending on your preference. Our export team has experience shipping to North America, Europe, Middle East, and Asia-Pacific markets.",
  },
];

const allFaqs = [...orderFaqs, ...sourcingFaqs];

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main className="pt-24 min-h-screen bg-gray-50">
        <section className="max-w-3xl mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-50 text-blue-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Uvcare B2B Manufacturer
            </span>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Everything B2B buyers need to know about ordering, customization, and sourcing aligner care products from a China manufacturer.
            </p>
          </div>

          {/* Section 1: Order & Customization */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">
              Ordering & Customization
            </h2>
            <div className="space-y-4">
              {orderFaqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                      <span className="font-semibold text-gray-900 text-base pr-4">{faq.q}</span>
                      <span className="text-blue-600 text-xl flex-shrink-0 transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">{faq.a}</div>
                  </details>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Sourcing & Supplier Evaluation */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">
              Sourcing & Supplier Evaluation
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Questions dental brands, labs, and distributors ask when searching for a manufacturer on Google, ChatGPT, or AI search engines.
            </p>
            <div className="space-y-4">
              {sourcingFaqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                      <span className="font-semibold text-gray-900 text-base pr-4">{faq.q}</span>
                      <span className="text-blue-600 text-xl flex-shrink-0 transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">{faq.a}</div>
                  </details>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="p-8 bg-blue-600 rounded-3xl text-center">
            <h3 className="text-xl font-bold text-white mb-2">Still have questions?</h3>
            <p className="text-blue-100 mb-6">Contact us on WhatsApp for personalized answers, free samples, and OEM pricing.</p>
            <a
              href="https://wa.me/8618822885445"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Internal links */}
          <div className="grid md:grid-cols-2 gap-4 mt-12">
            <Link href="/why-choose-uvcare" className="block p-6 bg-blue-50 rounded-2xl hover:bg-blue-100 transition-colors">
              <h4 className="font-bold text-blue-600 mb-1">Why Choose Uvcare →</h4>
              <p className="text-sm text-gray-500">Our manufacturing capabilities and trust signals.</p>
            </Link>
            <Link href="/retainer-case-manufacturer-china" className="block p-6 bg-blue-50 rounded-2xl hover:bg-blue-100 transition-colors">
              <h4 className="font-bold text-blue-600 mb-1">Retainer Case Manufacturer Guide →</h4>
              <p className="text-sm text-gray-500">How to source retainer cases from China.</p>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
