import FloatingMenu from "../components/FloatingMenu";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Testimonials from "../components/Testimonials";

export default function Page() {
  return (
    <main id="home">

      <div className="flex flex-col items-center justify-between w-screen">
        <div className="fixed pt-8 z-50">
          <FloatingMenu>
            <Navbar/>
          </FloatingMenu>
        </div>
      </div>

      <div className=" pt-40 flex justify-center">
        <Home/>
      </div>

      <Testimonials/>

    </main>
  );
}
