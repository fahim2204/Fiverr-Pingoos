import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Footer from "../components/footer";
import HeroDesc from "../components/heroDesc";
import HeroSlider from "../components/heroSlider";
import Navbar from "../components/navbar";
import SectionAlpha from "../components/sectionAlpha";
import SectionBeta from "../components/sectionBeta";
import SectionDelta from "../components/sectionDelta";
import SectionGamma from "../components/sectionGamma";

export default function Home() {
  return (
    <div>
      <Head>
        <title>PINGOOS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="bg-hero">
          <Navbar />
          <div className="max-w-screen-xl mx-auto px-6 py-10 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-10 lg:gap-20">
            <HeroDesc />
            <HeroSlider />
          </div>
        </div>
        <div className="bg-alpha relative">
          <div className="sec-divider h-20 w-full absolute top-0 -translate-y-1/2 z-20"></div>
          <SectionAlpha />
        </div>
        <div className="bg-beta relative">
          <div className="sec-divider h-20 w-full absolute top-0 -translate-y-1/2 z-20"></div>
          <SectionBeta />
          <h1 className="absolute top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 stroke-beta uppercase font-alpha text-white text-center text-7xl md:text-8xl lg:text-9xl mb-3">
            redacted
          </h1>
        </div>
        <div className="bg-pingo-alpha-800 relative">
          <div className="sec-divider h-20 w-full absolute top-0 -translate-y-1/2 z-20"></div>
          <SectionGamma />
        </div>
        <div className="relative">
          <div className="sec-divider h-20 w-full absolute top-0 -translate-y-1/2 z-20"></div>
          <img className="w-full" src="/img/animation-beta.gif" alt="animation" />
        </div>
        <div className="bg-pingo-alpha-800 relative">
          <div className="sec-divider h-36 w-full absolute top-0 -translate-y-1/2 z-20"></div>
          <SectionDelta />
        </div>
        <footer>
          <Footer />
        </footer>
      </main>
    </div>
  );
}
