const faqs = [
  ["What information should I send for a quote?", "Please share the product category or reference image, estimated quantity, branding or packaging needs, and target delivery timing. This lets us recommend the most practical option."],
  ["Can I start with an existing product and add my brand?", "Yes. Selected products are available for logo customization, with MOQ shown on the relevant product pages. Packaging and color options can be discussed with your inquiry."],
  ["What MOQ and lead time should I expect?", "Selected retainer cases and packaging begin at 100 PCS. Lead time shown across the current product range is generally 5–20 days, depending on the model and customization scope."],
  ["Do you support samples before a bulk order?", "Sample requirements can be included in your inquiry. We will confirm the available route after reviewing the product and customization needs."],
] as const;

export default function HomeFaq() {
  return (
    <section aria-labelledby="home-faq-heading" className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Buyer FAQ</p>
          <h2 id="home-faq-heading" className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">Questions procurement teams ask first</h2>
        </div>
        <div className="mt-10 space-y-3">
          {faqs.map(([question, answer]) => (
            <details key={question} className="group rounded-2xl border border-gray-200 bg-white px-6 py-5">
              <summary className="cursor-pointer list-none pr-8 text-base font-bold text-gray-900 marker:content-none">
                {question}<span aria-hidden="true" className="float-right text-xl font-normal text-blue-600 transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="pt-4 text-sm leading-7 text-gray-600">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
