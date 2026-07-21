import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProcurementOverview from "@/components/ProcurementOverview";
import ProductsSection from "@/components/ProductsSection";
import SourcingProcess from "@/components/SourcingProcess";
import HomeFaq from "@/components/HomeFaq";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProcurementOverview />
        <ProductsSection />
        <SourcingProcess />
        <HomeFaq />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
