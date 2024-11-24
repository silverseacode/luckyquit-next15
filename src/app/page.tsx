import Coach from "./components/Coach";
import Features from "./components/Features";
import Main from "./components/Home";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="w-[90rem]  mx-auto">
      <Navbar />
      <section>
        <Main />
      </section>
      <section id="features-section">
        <h1 className="text-center py-[20px] px-0 text-[2.2rem]">Features</h1>
        <Features />
      </section>
      <section id="coach-section">
        <h1 className="text-center py-[20px] px-0 text-[2.2rem] mt-[50px] mb-[50px]">Are you a Coach?</h1>
        <Coach />
      </section>
    </main>
  );
}
