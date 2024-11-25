import Coach from "./components/Coach";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Main from "./components/Home";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <main className="w-[90rem]  mx-auto">
        <header> 
          <Navbar />
        </header>
        <section>
          <Main />
        </section>
        <section id="features-section">
          <h1 className="text-center py-[20px] px-0 text-[2.2rem]">Features</h1>
          <Features />
        </section>
        <section id="coach-section">
          <h1 className="text-center py-[20px] px-0 text-[2.2rem] mt-[50px] mb-[50px]">
            Are you a Coach?
          </h1>
          <Coach />
        </section>
        </main>
        <section id="testimonials-section" className="bg-purple1 pb-[3rem]">
          <h1 className="text-center py-[20px] px-0 text-[2.2rem] mt-[50px] mb-[50px] pt-10 text-white">
            Testimonials
          </h1>
          <Testimonials />
        </section>
        <main className="w-[90rem]  mx-auto">
        <section id="faq-section">
          <h1 className="text-center py-[20px] px-0 text-[2.2rem] mt-[50px] mb-[50px]">
            FAQ Quitters
          </h1>
          <FAQ />
        </section>
        </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
