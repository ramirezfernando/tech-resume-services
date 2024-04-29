import FloatingMenu from "../components/FloatingMenu";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import CompanyGrid from "../components/CompanyGrid";
import Testimonials from "../components/Testimonials";
import { testimonials } from "../data/data";
import Pricing from "../components/Pricing";
import FAQs from "../components/FAQs";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <main id="home">
      <div className="flex flex-col items-center justify-between w-screen">
        <div className="fixed pt-8 z-50">
          <FloatingMenu>
            <Navbar />
          </FloatingMenu>
        </div>
      </div>

      <div className="pt-40 flex justify-center">
        <Home />
      </div>

      <CompanyGrid />

      <div id="testimonials" className="container md:pb-20">
        <Testimonials testimonials={testimonials} />
      </div>

      <div id="pricing" className="container md:pb-20">
        <Pricing />
      </div>

      <div id="faq" className="container md:pb-40">
        <FAQs />
      </div>

      <div className="container">
        <Footer />
      </div>
    </main>
  );
}
