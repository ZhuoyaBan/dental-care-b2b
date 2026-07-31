import Image from "next/image";
import Link from "next/link";

const kitItems = [
  "Retainer cases & UV cases",
  "Removal tools & chewies",
  "Cleaning brushes & care items",
  "Gift boxes, bags & inserts",
];

export default function OneShipmentKitSection() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-sky-50 py-20 sm:py-24" aria-labelledby="one-shipment-heading">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:px-8">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
            Built for private-label aligner programmes
          </p>
          <h2 id="one-shipment-heading" className="max-w-3xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            One Supplier. One Branded Aligner Care Kit. One Shipment.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Source the patient-care essentials for your clear aligner brand from Uvcare, then let us assemble the products you purchase from us into your branded gift box. One coordinated kit means fewer suppliers to manage, consistent brand presentation and one consolidated shipment to your location.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {kitItems.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl border border-blue-100 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white">✓</span>
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              ["Free kit assembly", "For the Uvcare products in your order"],
              ["One contact", "For products, packaging and coordination"],
              ["One shipment", "To reduce handling and freight complexity"],
            ].map(([title, description]) => (
              <div key={title}>
                <p className="font-semibold text-slate-900">{title}</p>
                <p className="mt-1 text-sm leading-5 text-slate-500">{description}</p>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/custom-aligner-care-kit-manufacturer" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-200 transition-colors hover:bg-blue-500">
              Build Your Branded Kit
            </Link>
            <Link href="/dental-gift-box-design-gallery" className="inline-flex items-center justify-center rounded-xl border border-blue-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition-colors hover:border-blue-400 hover:text-blue-700">
              Explore Gift Box Designs
            </Link>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-white p-3 shadow-2xl shadow-black/30 sm:p-5">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
            <Image
              src="/images/gift-box-gallery/complete-branded-aligner-care-kit.webp"
              alt="Custom branded clear aligner care kit with gift box, bag and patient accessories"
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute left-8 top-8 max-w-[20rem] rounded-2xl bg-white/95 p-4 text-slate-900 shadow-lg backdrop-blur sm:left-10 sm:top-10 sm:p-5">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">From SKU selection to pack-out</p>
            <p className="mt-1 text-sm font-semibold sm:text-base">A coordinated patient kit, built around your brand.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
