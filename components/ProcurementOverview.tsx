const buyerBenefits = [
  {
    title: "Designed for B2B sourcing",
    text: "Choose from proven product formats before investing in a fully custom development route.",
  },
  {
    title: "Customization that buyers can plan",
    text: "Discuss colors, logo printing, packaging and product combinations before bulk production.",
  },
  {
    title: "Clear procurement inputs",
    text: "Share a target quantity and delivery need so we can recommend a practical MOQ and lead-time path.",
  },
] as const;

export default function ProcurementOverview() {
  return (
    <section aria-labelledby="procurement-heading" className="border-y border-slate-100 bg-slate-950 py-16 text-white lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">For procurement teams</p>
            <h2 id="procurement-heading" className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">Everything a buyer needs before requesting a quote.</h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">We make it easier to assess fit, compare product categories and prepare a clear sourcing brief — without requiring you to commit before the specification is right.</p>
          </div>
          <dl className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <dt className="text-2xl font-bold text-white">100 PCS</dt>
              <dd className="mt-2 text-sm leading-5 text-slate-300">Starting MOQ for selected ready-to-brand cases and packaging.</dd>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <dt className="text-2xl font-bold text-white">5–20 days</dt>
              <dd className="mt-2 text-sm leading-5 text-slate-300">Current product lead-time range, depending on model and order scope.</dd>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <dt className="text-2xl font-bold text-white">OEM / ODM</dt>
              <dd className="mt-2 text-sm leading-5 text-slate-300">Logo, color, packaging and product development conversations in one place.</dd>
            </div>
          </dl>
        </div>
        <div className="mt-10 grid gap-4 border-t border-white/10 pt-8 md:grid-cols-3">
          {buyerBenefits.map((benefit) => (
            <article key={benefit.title} className="rounded-xl bg-white/5 p-5">
              <h3 className="font-bold text-white">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{benefit.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
