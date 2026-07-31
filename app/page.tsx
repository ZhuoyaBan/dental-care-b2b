import Header from "@/components/Header";
import HeroSection, { BuyerEntries } from "@/components/HeroSection";
import ProcurementOverview from "@/components/ProcurementOverview";
import ProductsSection from "@/components/ProductsSection";
import OneShipmentKitSection from "@/components/OneShipmentKitSection";
import SourcingProcess from "@/components/SourcingProcess";
import LandingPageEntries from "@/components/LandingPageEntries";
import HomeFaq from "@/components/HomeFaq";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <BuyerEntries />
        <ProcurementOverview />
        <ProductsSection />
        <OneShipmentKitSection />
        <SourcingProcess />
        <LandingPageEntries />
        <HomeFaq />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
