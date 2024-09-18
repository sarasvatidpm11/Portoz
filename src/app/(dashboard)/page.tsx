import About from "@/components/dashboard/About";
import FAQ from "@/components/dashboard/FAQ";
import HeroSection from "@/components/dashboard/HeroSection";
import Service from "@/components/dashboard/Service";
import React from "react";

export default function DashboardPage() {
  return (
    <div>
      <HeroSection />
      <About />
      <Service />
      <FAQ />
    </div>
  );
}
