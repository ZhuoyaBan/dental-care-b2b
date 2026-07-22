import type { Metadata } from "next";
import { getProductByRouteValue, getProductUrl } from "@/lib/products";
import { permanentRedirect } from "next/navigation";

const siteUrl = "https://www.dentalcarepack.com";

const categories = {
  "retainer-case": {
    name: "Wholesale Retainer Cases",
    description:
      "Custom wholesale retainer and aligner cases for dental clinics, orthodontic distributors, and clear aligner brands. Low MOQ and OEM logo printing.",
  },
  "cleaning-box": {
    name: "Wholesale Aligner Cleaning Boxes",
    description:
      "Wholesale cleaning boxes, UV sterilizer cases, and ultrasonic cleaner solutions for aligner and retainer care brands. OEM/ODM support available.",
  },
  "gift-box": {
    name: "Custom Orthodontic Gift Boxes",
    description:
      "Custom wholesale orthodontic gift boxes and patient welcome-kit packaging for dental clinics and aligner brands. Low MOQ OEM/ODM supply.",
  },
  "dental-accessories": {
    name: "Wholesale Aligner Accessories",
    description:
      "Wholesale aligner removal tools, chewies, and dental accessories for orthodontic clinics and distributors. Custom branding and OEM/ODM support.",
  },
} as const;

type ProductRouteLayoutProps = {
  children: React.ReactNode;
  params: { id: string };
};

export function generateMetadata({ params }: ProductRouteLayoutProps): Metadata {
  const category = categories[params.id as keyof typeof categories];

  if (category) {
    const url = `${siteUrl}/products/${params.id}`;
    return {
      title: `${category.name} | Uvcare B2B Supply`,
      description: category.description,
      alternates: { canonical: url },
      openGraph: { title: category.name, description: category.description, url, type: "website" },
    };
  }

  const product = getProductByRouteValue(params.id);

  if (!product) {
    return { title: "Product Not Found | Uvcare B2B Supply", robots: { index: false, follow: false } };
  }

  const url = `${siteUrl}${getProductUrl(product)}`;
  const description = `${product.name} — ${product.tagline}. Wholesale B2B supply with OEM/ODM custom branding, ${product.moq} MOQ, and ${product.leadTime.toLowerCase()} lead time.`;

  return {
    title: `${product.name} | Wholesale Aligner Accessories | Uvcare`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${product.name} | Uvcare B2B Supply`,
      description,
      url,
      type: "website",
      images: product.images.slice(0, 1).map((image) => `${siteUrl}${image}`),
    },
  };
}

export default function ProductRouteLayout({ children, params }: ProductRouteLayoutProps) {
  const product = getProductByRouteValue(params.id);
  const category = categories[params.id as keyof typeof categories];

  if (product && params.id === String(product.id)) {
    permanentRedirect(getProductUrl(product));
  }

  const schema = product
    ? {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Product",
            name: product.name,
            description: product.description,
            image: product.images.map((image) => `${siteUrl}${image}`),
            brand: { "@type": "Brand", name: "Uvcare" },
            category: product.category,
            additionalProperty: [
              { "@type": "PropertyValue", name: "MOQ", value: product.moq },
              { "@type": "PropertyValue", name: "Lead Time", value: product.leadTime },
              { "@type": "PropertyValue", name: "Customization", value: "OEM/ODM logo printing available" },
            ],
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
              { "@type": "ListItem", position: 2, name: "Products", item: `${siteUrl}/products` },
              { "@type": "ListItem", position: 3, name: product.name, item: `${siteUrl}${getProductUrl(product)}` },
            ],
          },
        ],
      }
    : category
      ? {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: category.name,
          description: category.description,
          url: `${siteUrl}/products/${params.id}`,
        }
      : undefined;

  return (
    <>
      {schema ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ) : null}
      {children}
    </>
  );
}
