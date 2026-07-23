/* SEO + GEO category description blocks for product category pages */

export interface CategoryDescription {
  title: string;
  keyFacts: string[];
  sections: { heading: string; body: string }[];
  ctaText: string;
}

export const categoryDescriptions: Record<string, CategoryDescription> = {
  "all-products": {
    title: "One-Stop Aligner Care Manufacturing Partner",
    keyFacts: [
      "Uvcare is a B2B manufacturer and supplier for invisible aligner labs, brands, and dental clinics worldwide",
      "Full product range: dental impression kits, scan boxes, retainer cases, UV-C sterilizers, ultrasonic cleaners, cleaning tablets, accessories",
      "OEM/ODM customization with low MOQ starting at 100 PCS for standard products",
      "ISO 9001, CE, and FDA compliant materials — safe for oral contact",
      "Clients only need to provide a logo and an idea — Uvcare delivers the product or the complete solution",
    ],
    sections: [
      {
        heading: "Your Complete Aligner Care Supply Chain — From Impression to Maintenance",
        body: "Uvcare is a Shenzhen-based B2B manufacturer specializing in one-stop solutions for invisible aligner laboratories, clear aligner brands, and dental clinics. Our product portfolio covers the entire aligner care lifecycle: dental impression kits (putty and digital scan box), retainer cases (standard, UV-C sterilizer, and premium round designs), cleaning solutions (soaking boxes, ultrasonic cleaners, effervescent tablets, and cleaning foam), orthodontic accessories (removal hooks, chewies, interdental brushes), and premium gift box packaging. Instead of sourcing from multiple suppliers, partner with one manufacturer that understands the full workflow — from taking the first impression to delivering the final branded patient kit.",
      },
      {
        heading: "Supplier, Manufacturer, and Solution Provider",
        body: "We are not a trading company or a reseller. Uvcare is the manufacturer — we own the molds, control the production lines, and guarantee quality at every stage. Our factory in Shenzhen's Bao'an District is equipped with injection molding, UV-C LED assembly, silk-screen printing, and packaging lines. Whether you need 100 custom-logo retainer cases for a single clinic or 10,000 UV-C sterilizer cases for a national brand rollout, we scale production to meet your demand with 7-30 day lead times and worldwide shipping via DHL, FedEx, and UPS.",
      },
      {
        heading: "How It Works — Bring Your Logo, We Handle the Rest",
        body: "Our process is designed for B2B simplicity. You provide your brand logo (vector format) and a brief description of what you need — whether it's a single product or a complete patient kit. Our in-house design team creates mockups, confirms specifications (colors, materials, MOQ, packaging), and manages production from tooling to final assembly. We send photo and video updates throughout production so you always know the status of your order. Free samples are available for quality evaluation before placing a bulk order.",
      },
    ],
    ctaText: "Ready to build your custom aligner care product line? Contact us for free samples and OEM pricing.",
  },

  "retainer-case": {
    title: "Premium Retainer Cases for Aligner Brands and Dental Clinics",
    keyFacts: [
      "Available in square, round, and slim designs — with or without mirror, with or without silicone insert",
      "UV-C sterilizer cases achieve up to 99.99% bacteria elimination using germicidal UV-C LEDs (254nm–275nm)",
      "Custom logo printing with MOQ starting at just 100 PCS for standard cases",
      "Premium positioning helps aligner brands deliver a VIP patient experience",
      "Full OEM/ODM support — clients bring the concept, Uvcare manufactures the product",
    ],
    sections: [
      {
        heading: "Retainer Cases That Elevate Your Brand",
        body: "A retainer case is not just a container — it is a daily touchpoint between your brand and your patient. Every time a patient opens their case at a restaurant, at work, or while traveling, your logo is on display. That is why we design and manufacture retainer cases that feel premium: smooth magnetic closures, integrated mirrors, medical-grade materials, and a finish that communicates quality. For clear aligner brands, the retainer case becomes a mobile brand ambassador that patients carry everywhere.",
      },
      {
        heading: "Designs for Every Patient Need",
        body: "Our retainer case lineup includes: Classic V1 with mirror and magnetic closure (the industry standard, available in 4+ colors); Pro Round Switchable Case with adjustable ventilation; Round Retainer Cases with mirror or double silicone protection; Slim V2 and ultra-slim V3 for modern minimalists; Soft Silicone Cases for sensitive patients; and UV-C Sterilizer Cases that kill 99.99% of bacteria in 3-5 minutes. Whether your patient needs basic storage or premium UV sanitization, we have the right case — all available with your custom logo.",
      },
      {
        heading: "UV-C Sterilizer Cases — Next-Level Hygiene",
        body: "Our UV-C sterilizer cases use genuine germicidal UV-C LEDs at 254nm–275nm wavelength to destroy bacteria, viruses, and fungi at the DNA level. A 3-5 minute cycle kills 99.99% of microorganisms. USB-C rechargeable with auto-shutoff safety. These cases are ideal for dental clinics offering premium hygiene upgrades and for aligner brands that want to differentiate with advanced sanitization technology. MOQ: 1,000 PCS with full OEM/ODM customization.",
      },
      {
        heading: "Custom Manufacturing — Your Idea, Our Production Line",
        body: "We welcome custom requirements. If you have a unique case design, a specific material requirement, or a new functionality in mind, our ODM team can bring it to life. From concept sketches to tooling, prototyping, and mass production, we handle the entire process. Clients only need to share their idea and logo — we deliver a finished, branded product ready for market. MOQ for ODM projects typically starts at 5,000 PCS depending on complexity.",
      },
    ],
    ctaText: "Want to create custom-branded retainer cases for your clinic or brand? Contact us for free samples and OEM pricing.",
  },

  "cleaning-box": {
    title: "Aligner Cleaning Solutions — From Soaking Boxes to Ultrasonic + UV-C",
    keyFacts: [
      "Two product categories: standard soaking boxes and ultrasonic cleaners with built-in UV-C",
      "Ultrasonic cleaners operate at 45,000Hz — physically removes plaque, stains, and biofilm",
      "All ultrasonic models include UV-C LEDs (254nm–275nm) for simultaneous sanitization during cleaning",
      "Available in both plug-in and battery-powered versions for clinic and travel use",
      "Cleaning effect is enhanced when used with effervescent tablets",
    ],
    sections: [
      {
        heading: "Two Cleaning Technologies, One Supplier",
        body: "Uvcare manufactures two categories of aligner cleaning products. Standard soaking boxes are simple, affordable containers for soaking aligners, retainers, mouth guards, night guards, and dentures with effervescent tablets. After soaking, a quick brush removes loosened debris. These boxes come in multiple shapes (planet design, vented design, classic) and colors, all available with custom logo printing. For deeper cleaning, our ultrasonic cleaners use 45,000Hz high-frequency sound waves to create microscopic cavitation bubbles that physically blast away plaque, stains, and biofilm from every crevice — something manual brushing simply cannot achieve.",
      },
      {
        heading: "Ultrasonic + UV-C: Clean and Sterilize in One Cycle",
        body: "Our ultrasonic cleaners are not just ultrasonic — every model includes built-in UV-C LEDs (254nm–275nm wavelength) that simultaneously sanitize the aligner during the cleaning cycle. This means one 5-minute cycle both removes physical debris (ultrasonic cavitation) and kills 99.9% of bacteria, viruses, and fungi (UV-C germicidal light). Adding an effervescent tablet to the water further enhances the cleaning effect. Available in plug-in (for clinic counter-top use) and battery-powered (for travel) versions. MOQ: 500 PCS (battery) / 1,000 PCS (plug-in) with OEM/ODM logo customization.",
      },
      {
        heading: "Why Dental Clinics Choose Uvcare Cleaning Products",
        body: "As a manufacturer, we offer factory-direct pricing that no retail brand can match. Dental clinics and aligner brands can offer patients a professional-grade cleaning solution under their own brand name, with margins that make business sense. All products are BPA-free, food-grade, and made from medical-grade materials. ISO 9001, CE, and FDA compliant. Compatible with Invisalign, Angel Aligner, and all major clear aligner and retainer brands.",
      },
    ],
    ctaText: "Looking for wholesale ultrasonic cleaners or soaking boxes with your brand logo? Contact us for OEM pricing.",
  },

  "gift-box": {
    title: "Custom Dental Gift Boxes — Premium Packaging for Aligner Brands",
    keyFacts: [
      "Dental gift boxes are premium packaging used by aligner brands to deliver products to patients",
      "Customizable: material, color, opening mechanism, branding, and internal structure",
      "Standard interior includes compartments for aligners, retainer case, removal hook, and chewies",
      "Custom logo printing and ODM structural design available",
      "MOQ starts at 100 PCS with 15-20 day lead times",
    ],
    sections: [
      {
        heading: "The Unboxing Experience That Builds Brand Loyalty",
        body: "When a patient receives their clear aligner treatment kit, the packaging is their first physical impression of your brand. A premium gift box creates an unboxing experience that communicates quality, builds trust, and reinforces brand identity every time the patient opens it. For aligner brands, orthodontic clinics, and dental distributors, custom gift boxes are not just packaging — they are a brand investment that pays dividends in patient satisfaction and referral business.",
      },
      {
        heading: "Fully Customizable to Your Brand",
        body: "Every aspect of our dental gift boxes can be customized: exterior material (rigid board, kraft, eco-friendly bamboo), color (Pantone matching), opening mechanism (magnetic lid, drawer, flip-top), surface finish (matte lamination, glossy, foil stamping, spot UV), and internal structure. The standard interior layout includes compartments for aligners, a retainer case, a removal hook, and chewies — but we can redesign the interior for any product combination you need. Full ODM support means we can create a completely new box design from scratch based on your concept.",
      },
      {
        heading: "Manufacturer-Direct Pricing for B2B Buyers",
        body: "As the manufacturer, Uvcare eliminates middleman markups. Whether you need 100 boxes for a single clinic launch or 10,000+ for a national brand, we offer competitive factory-direct pricing with 15-20 day lead times. Custom logo printing, branded packaging inserts, and individual poly bag packaging are all available. Contact us with your design concept or let our team create one for you.",
      },
    ],
    ctaText: "Want to create custom dental gift boxes for your brand? Contact us for design mockups and OEM pricing.",
  },

  "dental-accessories": {
    title: "Wholesale Orthodontic Accessories — The Complete Aligner Care Toolkit",
    keyFacts: [
      "Full range of aligner care accessories: removal hooks, chewies, 2-in-1 tools, cleaning tablets, brushes, cleaning foam, interdental brushes",
      "Medical-grade silicone and BPA-free materials across all products",
      "Custom logo printing and OEM packaging available",
      "MOQ starting at 500 PCS with 5-10 day lead times",
      "One supplier for all aligner accessory needs — simplify your sourcing",
    ],
    sections: [
      {
        heading: "Every Accessory Your Patients Need — From One Supplier",
        body: "Uvcare manufactures the complete range of orthodontic accessories that complement clear aligner treatment. Our product line includes: professional aligner removal hooks for hygienic tray removal, orthodontic chewies (seating aids) in multiple flavors and colors, innovative 2-in-1 remover and chewie combination tools, effervescent cleaning tablets for daily soaking, specialized aligner cleaning brushes with ultra-soft bristles, cleaning foam for on-the-go hygiene, and interdental brushes for gap cleaning. Instead of sourcing each accessory from a different supplier, dental clinics and aligner brands can consolidate their entire accessory procurement with one manufacturer.",
      },
      {
        heading: "Quality and Safety Standards",
        body: "All accessories are made from medical-grade silicone, BPA-free plastics, and food-grade materials that are safe for oral contact. Every product meets ISO 9001, CE, and FDA compliance standards. Our chewies are available in multiple flavors (mint, strawberry, grape) and the removal tools feature ergonomic grips designed for patient comfort. Custom logo printing is available on all products — turn every accessory into a branded touchpoint that reinforces your clinic or brand identity.",
      },
      {
        heading: "OEM/ODM for Custom Product Development",
        body: "Have an idea for a new aligner accessory? Our ODM team can develop it. From the 2-in-1 remover and chewie (our innovation) to custom-flavored chewies, branded cleaning tablets, or entirely new tool designs, we welcome custom development projects. Bring your concept and logo — we handle material selection, prototyping, tooling, and mass production. MOQ for custom ODM projects varies by product complexity.",
      },
    ],
    ctaText: "Need wholesale aligner accessories with your brand logo? Contact us for a complete product quote.",
  },

  "dental-impression-kit": {
    title: "Dental Impression Solutions — From Traditional Putty to Digital Scanning",
    keyFacts: [
      "Two impression methods available: traditional putty impression kits and ODM digital scan boxes",
      "Putty kits are fully customizable: box design, putty quantity, tray size and material, branded packaging",
      "Dental Scan Box is an ODM-ready concept for AI-powered dental monitoring and micro-adjustments during aligner treatment",
      "Private-label (OEM) and custom design (ODM) both available",
      "MOQ: 500 sets for putty kits, 2,000 sets for scan box ODM projects",
    ],
    sections: [
      {
        heading: "Two Paths to a Perfect Dental Impression",
        body: "Uvcare offers two distinct dental impression solutions. The first is our traditional Putty Impression Kit — a proven workflow where base and catalyst putties are mixed, placed in a tray, and bitten into to capture a physical dental impression. Each kit typically includes putty base cups, catalyst cups, upper and lower impression trays, gloves, and a branded gift box. Everything is customizable: box design, putty quantity, tray sizes and materials, and logo printing. This is the most cost-effective method for clinics and brands that need reliable impressions without digital infrastructure.",
      },
      {
        heading: "Dental Scan Box — AI-Powered Monitoring for Aligner Treatment",
        body: "The second method is our Dental Scan Box — an ODM-ready concept device that uses a camera mount and compatible software to capture dental images. The software is designed to analyze the image data using AI models to create a digital dental impression, enabling remote monitoring and micro-adjustments during aligner treatment. This is the latest approach for brands that want to offer tele-dentistry and remote treatment monitoring. The scan box is currently an ODM development project — we work with clients to define software compatibility, technical specifications, and production requirements. MOQ: 2,000 sets.",
      },
      {
        heading: "OEM Private-Label vs ODM Custom Development",
        body: "For the putty impression kit, we offer full OEM private-label service: choose your box design, putty formulation, tray specifications, and packaging — all with your brand logo. MOQ starts at 500 sets with 15-day lead times. For the dental scan box, we offer ODM (Original Design Manufacturing) — clients define the project scope, software requirements, and target market, and our engineering team develops the hardware and integrates compatible software. MOQ for ODM scan box projects starts at 2,000 sets with 30+ day lead times.",
      },
    ],
    ctaText: "Want to launch your own dental impression kit or scan box? Contact us for OEM/ODM development.",
  },
};
