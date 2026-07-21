const steps = [
  ["01", "Select a product direction", "Choose a ready-to-brand product, a category mix, or share your reference product."],
  ["02", "Confirm customization", "Align on logo, color, packaging and quantity requirements before a quotation is prepared."],
  ["03", "Review sample and production plan", "For custom projects, confirm the sample route and timing before bulk production."],
  ["04", "Production, QC and shipment", "Confirm the production schedule and shipping arrangement for the finished order."],
] as const;

export default function SourcingProcess() {
  return (
    <section aria-labelledby="process-heading" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">OEM / ODM workflow</p>
            <h2 id="process-heading" className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">A procurement path that stays clear from idea to shipment.</h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-gray-600">B2B orders work better when the product, quantity and branding requirements are defined early. This is the information we use to prepare a relevant sourcing proposal.</p>
            <a href="#contact" className="mt-7 inline-flex items-center rounded-xl border-2 border-blue-600 px-5 py-3 text-sm font-bold text-blue-700 transition-colors hover:bg-blue-50">Start with your sourcing brief <span aria-hidden="true" className="ml-2">→</span></a>
          </div>
          <ol className="grid gap-4 sm:grid-cols-2">
            {steps.map(([number, title, text]) => (
              <li key={number} className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                <span className="text-sm font-black tracking-wider text-blue-600">{number}</span>
                <h3 className="mt-4 text-lg font-bold text-gray-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
