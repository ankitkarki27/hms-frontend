import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import Products from "./components/Products";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
