import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Portfolio } from "@/components/sections/Portfolio";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";
import PageLayout from "@/components/layout/page-layout";

export default function Home() {
  return (
    <>
      <span id="top" aria-hidden="true" />
      <Navbar />

      <PageLayout>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </PageLayout>
    </>
  );
}
