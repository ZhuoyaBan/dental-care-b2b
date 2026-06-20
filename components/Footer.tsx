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


        {/* Button circle */}
        <div className="w-14 h-14 bg-[#25D366] hover:bg-[#1ebe5c] rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center">
          <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </div>
      </a>


      {/* ── Footer ── */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">


            {/* Brand column */}
            <div className="space-y-5">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2C8 2 5 5 5 9c0 6 3 13 7 13s7-7 7-13c0-4-3-7-7-7z" />
                    <path d="M9 9c0 2 1.5 3 3 3s3-1 3-3" />
                  </svg>
                </div>
                <div>
                  <span className="block text-base font-bold text-white">
                    Uv<span className="text-blue-400">care</span>
                  </span>
                  <span className="block text-[9px] text-gray-500 tracking-[0.15em] uppercase font-semibold">
                    B2B Supply
                  </span>
                </div>
              </div>


              <p className="text-sm text-gray-400 leading-relaxed">
                Professional B2B supplier of premium invisible aligner care
                accessories. OEM / ODM solutions for dental clinics and
                distributors worldwide.
              </p>


              {/* Certifications */}
              <div className="flex flex-wrap gap-2">
                {["ISO 9001", "CE Certified", "FDA Compliant"].map((cert) => (
                  <span
                    key={cert}
                    className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-gray-800 text-gray-400 border border-gray-700"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>


            {/* Products column */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5">
                Products
              </h4>
              <ul className="space-y-2.5">
                {footerProducts.map((item) => (
                  <li key={item}>
                    <a
                      href="#products"
                      className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-150"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>


            {/* Company column */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5">
                Company
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-150"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>


            {/* Contact column */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5">
                Contact
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm text-gray-400">ban@grouprsh.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-[#25D366] mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span className="text-sm text-gray-400">+86 188 2288 5445</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                    <circle cx="12" cy="11" r="3" />
                  </svg>
                  <span className="text-sm text-gray-400">
                    A309, Fanghua Industrial Area, xin&apos;an Street Bao&apos;an District, Shenzhen
                  </span>
                </li>
              </ul>


              {/* CTA */}
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors duration-200"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
                Send Inquiry
              </a>
            </div>
          </div>
        </div>


        {/* Bottom bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-sm text-gray-500">
              &copy; {year} Uvcare Supply. All rights reserved.
            </p>
            <div className="flex gap-5">
              {["Privacy Policy", "Terms of Service", "Sitemap"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-xs text-gray-600 hover:text-gray-300 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
