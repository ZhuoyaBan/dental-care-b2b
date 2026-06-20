const footerProducts = [
  "Aligner Case",
  "UV Sterilizer Case",
  "Ultrasonic Cleaning Case",
  "Regular Cleaning Case",
  "Aligner Removal Hook",
  "Chewies",
  "Effervescent Tablets",
];


const footerLinks = [
  { label: "About Us",         href: "#hero" },
  { label: "Our Products",     href: "#products" },
  { label: "OEM / ODM",        href: "#" },
  { label: "Quality Control",  href: "#" },
  { label: "Contact Us",       href: "#contact" },
];


export default function Footer() {
  const year = new Date().getFullYear();


  return (
    <>
      {/* ── Floating WhatsApp button ── */}
      <a
        href="https://wa.me/8618822885445"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 right-6 z-50 group flex items-center gap-2"
      >
        {/* Tooltip */}
        <span className="hidden sm:block opacity-0 group-hover:opacity-100 transition-all duration-200 bg-gray-800 text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg">
          Chat on WhatsApp
        </span>

