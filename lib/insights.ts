export interface Post {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  content: string;
}

export const posts: Post[] = [
  {
    id: "ultrasonic-cleaner-guide",
    title: "The Ultimate Guide: Why Ultrasonic Technology is the Best Choice for Aligner Care",
    excerpt: "Discover how 45,000Hz ultrasonic waves provide a clinical-grade clean that manual brushing simply can't match.",
    date: "June 26, 2026",
    category: "Professional Care",
    image: "/images/products/ultrasonic-cleaner-white-plug.webp",
    content: `
      <p>For clear aligner users, maintaining hygiene is not just about aesthetics—it's a critical part of the orthodontic treatment. Traditional manual brushing often fails to reach the microscopic crevices of the aligner material, leading to plaque buildup and cloudiness.</p>
      
      <h3>The Science of Ultrasonic Cleaning</h3>
      <p>Our professional ultrasonic cleaners operate at a frequency of 45,000Hz. This creates millions of microscopic vacuum bubbles that implode upon contact with the aligner surface, a process known as <strong>cavitation</strong>. This energy gently but effectively blasts away stains, bacteria, and buildup from every corner of the device without scratching the delicate medical-grade plastic.</p>
      
      <h3>3 Benefits of Ultrasonic Cleaning for B2B Clients</h3>
      <ul>
        <li><strong>Clinical Grade Results:</strong> Provides a 99.9% clean that increases patient satisfaction.</li>
        <li><strong>Ease of Use:</strong> A simple 5-minute cycle replaces tedious manual scrubbing.</li>
        <li><strong>Longevity:</strong> Preserves the clarity and structural integrity of the aligners throughout the treatment period.</li>
      </ul>
      
      <p>As a leading supplier of dental accessories, Uvcare provides customizable ultrasonic solutions with low MOQ for clinics and distributors worldwide. Contact us today to learn more about our OEM capabilities.</p>
    `
  }
];
