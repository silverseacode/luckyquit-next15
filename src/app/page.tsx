import AboutUs from "./components/AboutUs";
import Coach from "./components/Coach";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Main from "./components/Home";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import { ThemeProvider } from "./context/ThemeProvider";

export default function Home() {
  return (
    <>
      <main className="w-full md:w-[96rem] mx-auto">
        <ThemeProvider>
          <header>
            <Navbar />
          </header>
          <section>
            <Main />
          </section>
        </ThemeProvider>
      </main>
      <section id="features-section" className="dark:bg-black1 py-12">
        <h1 className="text-center py-[20px] px-0 text-[1.5rem] md:text-[2.2rem] dark:text-white">
          Features
        </h1>
        <Features />
      </section>
      <main className="w-full  mx-auto">
        <section id="coach-section">
          <h1 className="text-center  px-0 text-[1.5rem] md:text-[2.2rem] py-[20px] md:mt-[50px] md:mb-[50px] dark:text-white">
            Are you a Coach?
          </h1>
          <Coach />
        </section>
      </main>
      <section id="aboutus-section" className="mt-[10rem]">
        <AboutUs />
      </section>
      <section
        id="testimonials-section"
        className="bg-gradient-to-r from-purple-300 to-purple-500 pb-[3rem]"
      >
        <h1 className="text-center py-[20px] text-[1.5rem] px-0 md:text-[2.2rem]  mb-[50px] pt-10 text-white">
          Testimonials
        </h1>
        <Testimonials />
      </section>
      <main className="w-full  mx-auto">
        <section id="faq-section">
          <h1 className="text-center py-[20px] text-[1.5rem] px-0 md:text-[2.2rem] mt-[50px] mb-[50px] dark:text-white">
            FAQ Quitters
          </h1>
          <FAQ />
        </section>
      </main>
      <section
        id="contact-section"
        className="bg-white dark:bg-black1 mt-12 py-20 "
      >
        <h1 className="text-center py-[5px] px-0 text-[1.5rem] md:text-[2.2rem] mb-12 dark:text-white">
          Contact Us
        </h1>
        <Contact />
      </section>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
