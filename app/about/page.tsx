import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen bg-white">
        <section className="max-w-4xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">About Uvcare</h1>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">Uvcare is a leading B2B manufacturer based in Shenzhen, China, specializing in premium invisible aligner care accessories. With over 10 years of experience in the dental supply industry, we provide comprehensive OEM/ODM solutions for orthodontic clinics and distributors worldwide.</p>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">To enhance the patient experience by providing high-quality, innovative, and hygienic aligner maintenance tools.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">Factory Strength</h3>
              <p className="text-gray-600">Equipped with advanced molding and assembly lines, we ensure rigorous quality control and fast lead times for global shipping.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
