import { ClickEffect } from "@/components/ClickEffect";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { BuiltFor } from "@/home_components/BuiltFor";
import { Faq } from "@/home_components/Faq";
import { GetStarted } from "@/home_components/GetStarted";
import { Hero } from "@/home_components/Hero";
import { LineAnimation } from "@/home_components/LineAnimation";
import { Steriods } from "@/home_components/Steriods";
import { Testimonials } from "@/home_components/Testimonials";

export default function Home() {
  return (
    <ClickEffect>
      <Navbar variant="nav-general" />
      <Hero />
       <LineAnimation/>
      <GetStarted/>
      {/*<BuiltFor/>
      <Steriods/>
      <Testimonials/>
      <Faq/>
      <Footer/> */}
    </ClickEffect>
  );
}
