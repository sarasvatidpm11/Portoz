import About from "@/components/dashboard/About";
import FAQ from "@/components/dashboard/FAQ";
import HeroSection from "@/components/dashboard/HeroSection";
import Service from "@/components/dashboard/Service";
import React from "react";

export default function DashboardPage() {
  return (
    <>
      <section className="mb-16 mt-24">
        <HeroSection />
      </section>
      <section className="my-16">
        <About />
      </section>
      <section className="my-16">
        <Service />
      </section>
      <section className="my-16">
        <FAQ />
      </section>
    </>
  );
}
