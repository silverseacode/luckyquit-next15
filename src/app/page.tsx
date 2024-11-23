import Main from "./components/Home";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="w-[90rem]  mx-auto">
      <Navbar />
    <section>
      <Main/>
    </section>
    
  </main>

  );
}
