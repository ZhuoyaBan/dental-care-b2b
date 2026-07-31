export type GiftBoxGalleryItem = {
  slug: string;
  name: string;
  format: string;
  description: string;
  image: string;
  highlights: string[];
};

/**
 * Real packaging concepts made for clear-aligner programmes.  This data is
 * deliberately separate from products: a gallery is design inspiration, not
 * a promise that every pictured component is sold as one fixed SKU.
 */
export const giftBoxGalleryItems: GiftBoxGalleryItem[] = [
  {
    slug: "complete-branded-aligner-care-kit",
    name: "Complete Branded Aligner Care Kit",
    format: "Full Patient Welcome Kit",
    description: "A coordinated delivery experience combining a rigid gift box, branded bag, paperwork and aligner-care accessories.",
    image: "/images/gift-box-gallery/complete-branded-aligner-care-kit.webp",
    highlights: ["Multiple SKUs", "Gift bag", "Private label"],
  },
  {
    slug: "minimalist-rigid-book-box",
    name: "Minimalist Rigid Book-Style Kit",
    format: "Magnetic Book Box",
    description: "A clean, compact layout for an aligner case and selected patient-care essentials.",
    image: "/images/gift-box-gallery/minimalist-book-style-kit.webp",
    highlights: ["Compact kit", "Logo ready", "Rigid board"],
  },
  {
    slug: "split-compartment-magnetic-box",
    name: "Split-Compartment Magnetic Box",
    format: "Rigid Magnetic Box",
    description: "A left-and-right layout that keeps retainers, tools and printed materials visually organised.",
    image: "/images/gift-box-gallery/split-compartment-magnetic-box.webp",
    highlights: ["Two zones", "Colour matched", "Custom insert"],
  },
  {
    slug: "flat-lay-book-style-kit",
    name: "Flat-Lay Aligner Care Kit",
    format: "Book-Style Presentation Box",
    description: "A single-plane presentation for clinics and brands that want every accessory visible at first open.",
    image: "/images/gift-box-gallery/flat-lay-book-style-kit.webp",
    highlights: ["Flat layout", "Patient education", "Custom print"],
  },
  {
    slug: "windowed-dental-kit",
    name: "Windowed Dental Kit",
    format: "Paperboard Display Box",
    description: "A lighter packaging option with a product window for retail, clinic handover or promotional programmes.",
    image: "/images/gift-box-gallery/windowed-cardboard-box.webp",
    highlights: ["Display window", "Lightweight", "Brand graphics"],
  },
  {
    slug: "magnetic-box-with-aligner-drawers",
    name: "Magnetic Box with Aligner Drawers",
    format: "Rigid Box + Card Drawers",
    description: "A premium magnetic opening with dedicated drawers for aligner sets, cases and supporting accessories.",
    image: "/images/gift-box-gallery/magnetic-box-with-aligner-drawers.webp",
    highlights: ["Drawer system", "Premium reveal", "Multi-SKU"],
  },
  {
    slug: "multi-tray-magnetic-book-box",
    name: "Multi-Tray Magnetic Book Box",
    format: "Multi-Level Rigid Box",
    description: "A structured premium solution for programmes that supply several aligner stages or care products together.",
    image: "/images/gift-box-gallery/multi-tray-magnetic-book-box.webp",
    highlights: ["Multi-level", "Aligner storage", "High-end finish"],
  },
  {
    slug: "magnetic-lid-drawer-box",
    name: "Magnetic Lid & Drawer Box",
    format: "Two-Level Gift Box",
    description: "A layered unboxing format that separates the case and daily accessories from other patient materials.",
    image: "/images/gift-box-gallery/magnetic-lid-drawer-box.webp",
    highlights: ["Two layers", "EVA or foam", "Brand story card"],
  },
  {
    slug: "rotating-tray-magnetic-box",
    name: "Rotating-Tray Magnetic Box",
    format: "Interactive Premium Box",
    description: "An engaging multi-level format designed to make a branded patient kit feel more memorable at handover.",
    image: "/images/gift-box-gallery/rotating-tray-magnetic-box.webp",
    highlights: ["Interactive tray", "Premium unboxing", "Custom layout"],
  },
  {
    slug: "six-compartment-aligner-box",
    name: "Six-Compartment Aligner Box",
    format: "Organised Kit Box",
    description: "Six dedicated compartments give aligner stages, a case and accessories a clear place in the kit.",
    image: "/images/gift-box-gallery/six-compartment-aligner-box.webp",
    highlights: ["Six sections", "Structured insert", "Clear workflow"],
  },
  {
    slug: "tall-four-compartment-box",
    name: "Tall Four-Compartment Box",
    format: "Vertical Rigid Gift Box",
    description: "A taller layout for brands looking for generous accessory space and a substantial presentation.",
    image: "/images/gift-box-gallery/tall-four-compartment-box.webp",
    highlights: ["Four sections", "Tall profile", "Custom colour"],
  },
  {
    slug: "tall-black-magnetic-box",
    name: "Tall Black Magnetic Box",
    format: "Premium Magnetic Gift Box",
    description: "A refined monochrome format that pairs a retainer case, brush and aligner sets in a premium package.",
    image: "/images/gift-box-gallery/tall-black-magnetic-box.webp",
    highlights: ["Premium black", "Magnetic lid", "Flocked insert"],
  },
  {
    slug: "foldable-aligner-gift-box",
    name: "Foldable Aligner Gift Box",
    format: "Foldable Paperboard Box",
    description: "A more space-efficient packaging route for branded aligner kits and shipment-friendly programmes.",
    image: "/images/gift-box-gallery/foldable-dental-gift-box.webp",
    highlights: ["Foldable", "Freight efficient", "Printed artwork"],
  },
  {
    slug: "rectangular-book-box-gift-bag",
    name: "Rectangular Book Box & Gift Bag",
    format: "Book Box with Branded Bag",
    description: "A coordinated box-and-bag set for clinic collection, retail presentation or a premium patient welcome kit.",
    image: "/images/gift-box-gallery/rectangular-book-box-gift-bag.webp",
    highlights: ["Gift bag", "Flocked insert", "Large brush space"],
  },
  {
    slug: "two-level-book-box-gift-bag",
    name: "Two-Level Book Box & Gift Bag",
    format: "Layered Rigid Kit",
    description: "A two-level rigid format that allows brands to group products while keeping the outward presentation consistent.",
    image: "/images/gift-box-gallery/two-level-book-box-gift-bag.webp",
    highlights: ["Two levels", "Gift bag", "Cardboard insert"],
  },
  {
    slug: "medium-book-box-gift-bag",
    name: "Medium Book Box & Gift Bag",
    format: "Mid-Size Rigid Kit",
    description: "A versatile mid-size solution for an aligner case, care accessories and a branded handover experience.",
    image: "/images/gift-box-gallery/medium-book-box-gift-bag.webp",
    highlights: ["Mid-size", "Soft insert", "Logo placement"],
  },
  {
    slug: "corrugated-aligner-starter-kit",
    name: "Corrugated Aligner Starter Kit",
    format: "Corrugated Mailer Box",
    description: "A practical starter-kit format with paper inserts for brands that need a durable, more economical delivery option.",
    image: "/images/gift-box-gallery/corrugated-aligner-starter-kit.webp",
    highlights: ["Mailer box", "Paper insert", "Starter kit"],
  },
  {
    slug: "drawer-style-dental-kit",
    name: "Drawer-Style Dental Kit",
    format: "Sliding Paperboard Box",
    description: "A branded drawer presentation that can combine a case, care tools and printed instructions in one package.",
    image: "/images/gift-box-gallery/drawer-style-dental-kit.webp",
    highlights: ["Sliding drawer", "Compact", "Custom graphics"],
  },
  {
    slug: "small-book-box-gift-bag",
    name: "Small Book Box & Gift Bag",
    format: "Compact Rigid Kit",
    description: "A smaller branded format for focused care kits built around an aligner case and daily-use accessories.",
    image: "/images/gift-box-gallery/small-book-box-gift-bag.webp",
    highlights: ["Compact", "Gift bag", "Case + brush"],
  },
  {
    slug: "two-level-drawer-box",
    name: "Two-Level Drawer Gift Box",
    format: "Layered Drawer Box",
    description: "A dual-level structure that gives aligner trays and care accessories their own organised presentation space.",
    image: "/images/gift-box-gallery/two-level-drawer-box.webp",
    highlights: ["Separate levels", "Drawer access", "Custom insert"],
  },
  {
    slug: "multi-compartment-aligner-box",
    name: "Multi-Compartment Aligner Kit Box",
    format: "Sectioned Paperboard Box",
    description: "A stable multi-section format for clear aligner programmes that need to keep several items neatly separated.",
    image: "/images/gift-box-gallery/multi-compartment-aligner-box.webp",
    highlights: ["Multiple compartments", "Easy organisation", "Brand colour"],
  },
];

export const giftBoxCustomisationOptions = [
  {
    title: "Box format",
    description: "Choose a magnetic book box, drawer box, foldable box, mailer or another structure that suits your brand programme.",
    image: "/images/gift-box-gallery/box-type-options.webp",
  },
  {
    title: "Materials & finishes",
    description: "Match the perceived value of your kit with paperboard, rigid board, specialty paper, matte or textured surface treatments.",
    image: "/images/gift-box-gallery/material-options.webp",
  },
  {
    title: "Brand colour & artwork",
    description: "Coordinate box colour, logo position, print design, gift bags and product branding for one recognisable patient experience.",
    image: "/images/gift-box-gallery/colour-options.webp",
  },
  {
    title: "Custom inserts",
    description: "Create a dedicated place for aligner cases, removal tools, chewies, cleaning brushes, bags, instructions and more.",
    image: "/images/gift-box-gallery/insert-options.webp",
  },
];
