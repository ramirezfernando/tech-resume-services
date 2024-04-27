import Image from "next/image";
import FloatingMenu from "../components/FloatingMenu";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between pt-8">
      <div className="fixed">
      <FloatingMenu>
        <Navbar/>
      </FloatingMenu>
      </div>

    </main>
  );
}
