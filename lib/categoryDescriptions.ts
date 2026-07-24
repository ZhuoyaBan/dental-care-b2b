/* B2B category content is visible on-page and reused for valid structured data. */

export interface CategoryDescription {
  title: string;
  summary: string;
  url: string;
  keyFacts: string[];
  sections: { heading: string; body: string }[];
  links: { label: string; href: string }[];
  faqs: { question: string; answer: string }[];
  ctaText: string;
  whatsAppMessage: string;
}

export const categoryDescriptions: Record<string, CategoryDescription> = {
  "all-products": {
    title: "Custom Aligner Care Products from One Manufacturer",
    summary: "Uvcare, operating at DentalCarePack.com, is a B2B manufacturer and supplier for dental laboratories, orthodontic clinics, clear aligner brands, distributors, and private-label buyers. We help buyers assemble a practical aligner-care program from impression taking through patient storage, hygiene, packaging, and daily-use accessories.",
    url: "https://www.dentalcarepack.com/products",
    keyFacts: [
      "One sourcing route for dental impression kits, retainer cases, cleaning products, gift packaging, and orthodontic accessories",
      "OEM projects can discuss logo application, available colors, packaging, and target order quantity",
      "ODM discussions begin with a product brief, target use, specifications, sample needs, and expected volume",
      "Existing standard products and custom-development projects have different MOQs and lead times",
    ],
    sections: [
      {
        heading: "A Complete Product Path for Clear Aligner Brands",
        body: "A clear aligner program touches more than the aligner itself. Buyers may need an impression kit before treatment, a patient-facing retainer case for storage, cleaning equipment for daily care, a branded presentation box, and practical accessories such as removal tools and chewies. Uvcare brings these connected product categories into one B2B sourcing conversation, so a lab, clinic, or brand can build a coordinated patient kit instead of managing unrelated suppliers.",
      },
      {
        heading: "Manufacturer and Supplier Support for Private Label Programs",
        body: "For an existing product format, buyers can share their logo, preferred color, packaging idea, quantity, destination, and required delivery date. We then confirm the practical product route, MOQ, artwork method, sample path, and production schedule. For a new concept, the ODM route starts with the intended use and product requirements before tooling, materials, electronics, or assembly are discussed. A quotation confirms the details for the selected product rather than applying one claim to every item in the catalog.",
      },
      {
        heading: "Start with the Category That Solves the Buyer Need",
        body: "Use Dental Impression Kit for putty kits and scan-box ODM discussions; Retainer Cases for branded storage and selected UV-C case formats; Cleaning Boxes for soaking boxes and ultrasonic cleaning products; Gift Boxes for patient-kit presentation; and Dental Accessories for the tools that support aligner wear. This category structure helps procurement teams compare the right format before asking for a sample or quotation.",
      },
    ],
    links: [
      { label: "Dental Impression Kit", href: "/products/dental-impression-kit" },
      { label: "Retainer Cases", href: "/products/retainer-case" },
      { label: "Cleaning Boxes", href: "/products/cleaning-box" },
      { label: "Gift Boxes", href: "/products/gift-box" },
      { label: "Dental Accessories", href: "/products/dental-accessories" },
      { label: "Why Choose Uvcare", href: "/why-choose-uvcare" },
    ],
    faqs: [
      { question: "Who does Uvcare supply?", answer: "Uvcare supplies B2B buyers including dental laboratories, orthodontic clinics, clear aligner brands, distributors, patient-kit suppliers, and private-label businesses." },
      { question: "Can one buyer source a complete aligner care kit?", answer: "Yes. Buyers can combine relevant catalog categories such as cases, cleaning products, packaging, and accessories. The practical combination, customization scope, MOQ, and delivery plan are confirmed in the quotation." },
      { question: "What is needed to start an OEM inquiry?", answer: "Share the product category or reference, target quantity, logo artwork if available, preferred color or packaging, destination, and target delivery date." },
      { question: "Does every product have the same MOQ?", answer: "No. MOQ and lead time depend on whether the buyer selects an existing standard product, requests logo or packaging customization, or starts a new ODM development project." },
    ],
    ctaText: "Planning a private-label aligner care range or patient kit? Send us the categories and quantities you need.",
    whatsAppMessage: "Hi, I would like to discuss a complete aligner care product range for my brand, clinic, or lab.",
  },
  "retainer-case": {
    title: "Premium Retainer Cases for Aligner Brands and Dental Clinics",
    summary: "Uvcare manufactures and supplies branded retainer and aligner storage cases for B2B buyers. The range includes standard square, round, slim, mirror, silicone-insert, and selected electronic UV-C case formats for brands that want a more considered patient experience.",
    url: "https://www.dentalcarepack.com/products/retainer-case",
    keyFacts: [
      "Existing formats include square, round, slim, mirror, and silicone-protection options",
      "Selected standard cases can start from 100 PCS, depending on the product and customization",
      "Logo, available colors, and branded packaging can be discussed for private-label projects",
      "Electronic UV-C retainer cases have a separate MOQ, specification, and validation path",
    ],
    sections: [
      {
        heading: "A Daily Brand Touchpoint, Not Just a Storage Box",
        body: "For a clear aligner brand or clinic, a retainer case is a product patients carry and use every day. A well-selected case can support a more premium treatment-kit experience while keeping the appliance protected between uses. Uvcare supplies ready-to-brand formats so buyers can select a practical shape, finish, closure, mirror option, or silicone insert before committing to a fully new design.",
      },
      {
        heading: "Choose a Format Before Starting Custom Development",
        body: "The current range includes classic rectangular cases, round cases, slim V2 and V3 formats, mirror options, and silicone-focused designs. Starting with an existing format is generally the fastest route for logo and packaging projects. Buyers with a new requirement can share reference images, dimensions, closure preferences, material needs, and target appliance so we can assess an existing route or an ODM development path.",
      },
      {
        heading: "Selected UV-C Case Formats",
        body: "Uvcare also offers selected electronic UV-C retainer case formats. Product-specific performance claims, cycle time, LED configuration, charging design, MOQ, and validation conditions must be confirmed for the selected model before a buyer makes a hygiene or marketing claim. This gives brands a safer path to evaluate an electronic hygiene feature without treating it as identical to every standard storage case.",
      },
    ],
    links: [
      { label: "Classic Aligner Case V1", href: "/products/classic-aligner-case-v1" },
      { label: "UV-C Retainer Sterilizer Case", href: "/products/uv-c-retainer-sterilizer-case-with-mirror" },
      { label: "Retainer Case Manufacturer", href: "/retainer-case-manufacturer-china" },
    ],
    faqs: [
      { question: "Can I add my logo to a retainer case?", answer: "Yes. Logo application can be discussed for selected existing case formats. The artwork method, color, MOQ, and packaging are confirmed with the chosen product." },
      { question: "What is the MOQ for standard branded retainer cases?", answer: "Selected standard non-electronic cases can start from 100 PCS. The final MOQ depends on the case format and customization scope." },
      { question: "Can Uvcare develop a new case design?", answer: "Yes. ODM discussions begin with the desired function, dimensions, material, closure, target quantity, and reference information. Tooling and development requirements are assessed case by case." },
      { question: "Do all retainer cases provide UV-C sanitization?", answer: "No. UV-C is an electronic feature available only on selected case models. Standard storage cases should not be represented as UV-C products." },
    ],
    ctaText: "Tell us the case format, quantity, logo, and target market you need for a branded retainer-case quote.",
    whatsAppMessage: "Hi, I would like to discuss custom retainer cases for my dental brand or clinic.",
  },
  "cleaning-box": {
    title: "Aligner Cleaning Products for Daily Care Programs",
    summary: "Uvcare supplies B2B cleaning products for aligners, retainers, night guards, mouth guards, and dentures. Buyers can compare simple soaking boxes with ultrasonic cleaner formats, then select the practical product route for their brand, clinic, or distributor program.",
    url: "https://www.dentalcarepack.com/products/cleaning-box",
    keyFacts: [
      "Standard soaking boxes are available in several shapes and colors for private-label projects",
      "Ultrasonic cleaner models in the current range use 45 kHz cleaning technology",
      "Plug-in and battery-powered ultrasonic formats have different product specifications and MOQs",
      "Any UV-C feature, cleaning claim, compatible cleaning tablet, or hygiene claim must be confirmed for the selected model",
    ],
    sections: [
      {
        heading: "Soaking Boxes for a Simple Daily-Care Routine",
        body: "Standard cleaning and soaking boxes provide a compact place to soak aligners, retainers, night guards, mouth guards, or dentures as part of a daily-care routine. Buyers can select a shape and color from available product formats and discuss logo printing. Where a suitable cleaning tablet is used, the buyer should follow its own directions and then use an appropriate brush or rinse process; the box itself does not replace normal hygiene instructions.",
      },
      {
        heading: "Ultrasonic Cleaner Formats",
        body: "For buyers seeking an electronic cleaning format, Uvcare's current ultrasonic cleaner range is specified at 45 kHz and includes plug-in and battery-powered options. Ultrasonic cleaning uses vibration in water to assist removal of surface residue from compatible appliances. The selected model, power format, tank configuration, MOQ, and intended use should be confirmed before a clinic or brand communicates a particular performance outcome to patients.",
      },
      {
        heading: "Build a Responsible Cleaning Product Offer",
        body: "A useful private-label cleaning offer begins with the customer use case: a low-cost soaking box, a portable battery product, or a counter-top ultrasonic format. Uvcare can discuss logo, color, packaging, and the product combination that fits the buyer's market. UV-C functionality is not assumed across all ultrasonic products; buyers should request the exact product specification and validation information for any electronic hygiene feature.",
      },
    ],
    links: [
      { label: "Planet Cleaning Box", href: "/products/planet-aligner-cleaning-box" },
      { label: "Professional Ultrasonic Cleaner", href: "/products/professional-ultrasonic-cleaner-plug-in" },
      { label: "UV Retainer Case Manufacturer", href: "/uv-retainer-case-manufacturer" },
    ],
    faqs: [
      { question: "What can a soaking box be used for?", answer: "Depending on the selected product and care instructions, soaking boxes can be used as a storage vessel during cleaning routines for aligners, retainers, night guards, mouth guards, and dentures." },
      { question: "What is the ultrasonic frequency of the current cleaner range?", answer: "The current ultrasonic cleaner product information specifies 45 kHz. Confirm the exact model and specification in the quotation." },
      { question: "Do all ultrasonic cleaners include UV-C?", answer: "No universal UV-C claim should be made. Confirm whether a selected model has a UV-C feature and the supporting product documentation before marketing that function." },
      { question: "Can I order a branded cleaning product?", answer: "For selected products, Uvcare can discuss logo, available colors, packaging, quantity, and delivery needs. MOQ varies by the chosen soaking box or electronic cleaner." },
    ],
    ctaText: "Share the appliance type, cleaning format, target quantity, and branding requirement for a practical sourcing recommendation.",
    whatsAppMessage: "Hi, I would like to discuss branded soaking boxes or ultrasonic cleaners for my dental business.",
  },
  "gift-box": {
    title: "Custom Dental Gift Boxes for Branded Patient Kits",
    summary: "Uvcare manufactures and supplies B2B dental gift-box packaging for aligner brands, clinics, and distributors. A branded presentation box can organize the products a patient receives and create a consistent first-use experience around the buyer's own identity.",
    url: "https://www.dentalcarepack.com/products/gift-box",
    keyFacts: [
      "Gift-box projects can discuss size, color, opening style, logo, and internal product layout",
      "A patient-kit insert can be planned around aligners, a retainer case, accessories, and care items",
      "Selected existing gift-box formats can start from 100 PCS; custom structures require a separate assessment",
      "Packaging feasibility, print method, materials, and lead time are confirmed by project rather than assumed",
    ],
    sections: [
      {
        heading: "Make the Patient Kit Feel Like a Brand Experience",
        body: "A dental gift box gives an aligner brand or clinic one place to present the products that accompany treatment. It can hold a retainer case, aligner accessories, care products, instructions, or other agreed kit components. The goal is not simply to wrap products, but to give the buyer a coordinated presentation that patients can recognize as part of the treatment experience.",
      },
      {
        heading: "Packaging Can Be Planned Around the Actual Product Mix",
        body: "A project can begin with an existing box format or with a new structural brief. Buyers can share the items to be packed, internal dimensions, desired opening style, logo artwork, color direction, print finish, and order volume. Uvcare can then discuss a practical insert layout and packaging route. Material, surface finish, and structural options are confirmed for the chosen project rather than presented as a universal specification.",
      },
      {
        heading: "OEM Packaging and ODM Structure Are Different Routes",
        body: "OEM packaging usually means adapting an existing box format with the buyer's logo, artwork, and agreed insert arrangement. ODM packaging begins with a new structural or presentation concept and may require separate sample, tooling, and volume discussions. This distinction helps buyers select the right budget and timeline before production starts.",
      },
    ],
    links: [
      { label: "Dental Gift Box V1", href: "/products/orthodontic-gift-box-v1" },
      { label: "Dental Accessories", href: "/products/dental-accessories" },
      { label: "Custom Product Development", href: "/custom-dental-product-development-partner" },
    ],
    faqs: [
      { question: "What can be placed inside a dental gift box?", answer: "The internal layout can be planned around the agreed product mix, such as aligners, a retainer case, removal tools, chewies, instructions, or other patient-kit items." },
      { question: "Can I use my own logo and colors?", answer: "Yes. Logo artwork, color direction, packaging finish, and insert layout can be discussed for the selected packaging route." },
      { question: "What is the MOQ for dental gift boxes?", answer: "Selected existing formats can start from 100 PCS. A new box structure or special finish may require a different MOQ and development schedule." },
      { question: "Is a new box design possible?", answer: "Yes. Share the product mix, dimensions, opening preference, brand direction, and volume. Uvcare can assess whether an existing format or a custom ODM packaging route is more practical." },
    ],
    ctaText: "Send your patient-kit product list, logo, and target quantity to discuss a branded packaging route.",
    whatsAppMessage: "Hi, I would like to discuss custom dental gift-box packaging for my aligner or clinic brand.",
  },
  "dental-accessories": {
    title: "Orthodontic Accessories for Branded Aligner Care Programs",
    summary: "Uvcare supplies B2B orthodontic accessories that support clear-aligner routines. Current catalog examples include removal hooks, chewies, and combined remover-and-chewie tools; buyers can also discuss accessory requirements as part of a wider private-label kit or product-development project.",
    url: "https://www.dentalcarepack.com/products/dental-accessories",
    keyFacts: [
      "Current catalog examples include aligner removal hooks, chewies, and combined remover-and-chewie tools",
      "Existing products and project-developed accessories have different MOQs, materials, and lead times",
      "Logo, packaging, and combination-kit requirements can be discussed for selected products",
      "Accessories not shown in the current catalog should be treated as sourcing or development requests until specified and quoted",
    ],
    sections: [
      {
        heading: "Practical Accessories for the Clear Aligner Routine",
        body: "Small accessories can make an aligner care program easier to use and easier to brand. Removal hooks help patients handle aligners without relying on fingers, while chewies are commonly used as seating aids. The current catalog also includes a combined remover-and-chewie tool for buyers who want a compact format. These items can be selected as individual products or considered alongside cases and gift packaging for a coordinated patient kit.",
      },
      {
        heading: "Start with the Current Catalog, Then Define the Next Need",
        body: "For listed products, buyers can ask about the available format, quantity, branding, and delivery plan. For a broader accessories request — such as cleaning-related consumables, brushes, or other orthodontic tools — the right approach is to share the product brief and target market first. Uvcare can then assess whether the need fits a sourcing route, an existing product format, or a separate OEM/ODM project.",
      },
      {
        heading: "OEM Accessories and Custom Development",
        body: "An OEM project commonly adapts a suitable existing product with buyer artwork and agreed packaging. An ODM project begins with a new functional brief, material preference, dimensions, sample requirements, and expected volume. This lets a buyer distinguish a fast private-label route from a project that requires product development before mass production.",
      },
    ],
    links: [
      { label: "Professional Dental Hook", href: "/products/professional-dental-hook" },
      { label: "Orthodontic Teether", href: "/products/orthodontic-teether" },
      { label: "Aligner Remover & Chewie", href: "/products/aligner-remover-and-chewie" },
    ],
    faqs: [
      { question: "Which orthodontic accessories are currently shown in the catalog?", answer: "The current catalog shows a professional dental hook, orthodontic teether, and an aligner remover-and-chewie combination tool." },
      { question: "Can accessories be included in a patient kit?", answer: "Yes. Buyers can discuss an accessory combination with a retainer case, gift box, or other relevant product categories as part of a B2B kit plan." },
      { question: "Can I request an accessory not shown on the website?", answer: "Yes. Treat it as a sourcing or development request and share the product requirement, target quantity, market, material expectations, and branding needs for assessment." },
      { question: "Can accessories carry a custom logo?", answer: "Logo and packaging options depend on the selected product, material, and quantity. These details are confirmed during the quotation process." },
    ],
    ctaText: "Tell us which aligner accessories you need and whether you are sourcing an existing item or developing a new one.",
    whatsAppMessage: "Hi, I would like to discuss orthodontic accessories for my aligner care product range.",
  },
  "dental-impression-kit": {
    title: "Dental Impression Solutions: Putty Kits and Scan-Box ODM Projects",
    summary: "Uvcare offers two B2B routes for dental impression workflows: private-label putty impression kits and Dental Scan Box hardware discussions for compatible software projects. These routes are intentionally separate because their specifications, validation needs, MOQ, and product-development requirements are different.",
    url: "https://www.dentalcarepack.com/products/dental-impression-kit",
    keyFacts: [
      "Putty Impression Kit MOQ starts from 500 sets, with lead time from 15 days for the selected configuration",
      "A typical putty kit can combine putty base, catalyst, trays, gloves, and branded gift-box packaging",
      "Dental Scan Box is an ODM hardware concept with MOQ from 2,000 sets and lead time from 30 days",
      "Software compatibility, validation, and regulatory responsibilities must be defined for every scan-box project",
    ],
    sections: [
      {
        heading: "Traditional Putty Impression Kits",
        body: "A putty impression kit supports a familiar tray-based workflow for clear aligner or night-guard projects. A typical configuration can include putty base and matching catalyst, upper and lower trays, gloves, and a presentation box. Buyers can discuss the number of components, tray size and material, logo, and branded packaging. The final kit configuration and material specification should be confirmed in the product quotation for the intended market.",
      },
      {
        heading: "Dental Scan Box: An ODM Hardware Discussion",
        body: "Dental Scan Box is presented as an ODM-ready hardware concept intended to work with compatible dental imaging or monitoring software. It can support a project in which a camera or phone-based setup captures images for processing by the buyer's chosen software solution. The hardware alone does not make a clinical diagnosis or guarantee a treatment outcome. The buyer and relevant software, clinical, and regulatory partners must define validation, professional oversight, data handling, and market requirements before launch.",
      },
      {
        heading: "Choose the Route That Matches the Program",
        body: "The putty kit route is generally suited to a configured private-label product and packaging discussion. The scan-box route is a longer product-development conversation that starts with software compatibility, intended workflow, technical requirements, target market, and volume. Treating these routes separately gives purchasers a more accurate estimate of MOQ, lead time, sample needs, and development work.",
      },
    ],
    links: [
      { label: "Putty Impression Kit", href: "/products/putty-impression-kit" },
      { label: "Dental Scan Box", href: "/products/dental-scan-box" },
      { label: "Custom Product Development", href: "/custom-dental-product-development-partner" },
    ],
    faqs: [
      { question: "What is included in a Putty Impression Kit?", answer: "A typical configuration includes putty base, matching catalyst, upper and lower trays, gloves, and a presentation box. The final component count, tray specification, and packaging are confirmed for the order." },
      { question: "Can the putty kit be private labeled?", answer: "Yes. Buyers can discuss logo, box artwork, component quantity, tray size and material, and packaging for a private-label kit." },
      { question: "Is Dental Scan Box a ready-made clinical diagnostic device?", answer: "No. It is presented as an ODM hardware concept for compatible software projects. Clinical use, software performance, data handling, validation, and regulatory requirements must be defined by the project partners before launch." },
      { question: "What are the MOQs for the two routes?", answer: "Putty Impression Kit MOQ starts from 500 sets. Dental Scan Box ODM discussions start from 2,000 sets; the final scope and lead time depend on the project requirements." },
    ],
    ctaText: "Share whether you need a private-label putty kit or a scan-box ODM discussion, plus your target market and quantity.",
    whatsAppMessage: "Hi, I would like to discuss a dental impression kit or Dental Scan Box ODM project.",
  },
};
