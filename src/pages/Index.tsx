
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import LifestyleSection from "../components/LifestyleSection";
import FeaturesSection from "../components/FeaturesSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <LifestyleSection />
      <FeaturesSection />
      
      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Experience Luxury Living?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Discover your perfect waterfront sanctuary. Contact us today to schedule a private viewing.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Contact Us Today
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Index;
