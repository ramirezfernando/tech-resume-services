import FloatingMenu from "../components/FloatingMenu";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import CompanyGrid from "../components/CompanyGrid";
import Testimonials from "../components/Testimonials";
import { testimonials } from "../data/data";

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

      <div className=" pt-40 flex justify-center">
        <Home />
      </div>

      <CompanyGrid />

      <div id="testimonials" className="container">
        <Testimonials testimonials={testimonials} />
      </div>
    </main>
  );
}
