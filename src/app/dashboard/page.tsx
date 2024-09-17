// pages/dashboardPage.js
import About from "@/components/dashboard/About";
import FAQ  from "@/components/dashboard/FAQ";
import HeroSection from "@/components/dashboard/HeroSection";
import Service from "@/components/dashboard/Service";
import React from "react";

const DashboardPage = () => {
  return (
    <div>
      <HeroSection />
      <About/>
      <Service />
      <FAQ/>
    </div>
  );
};

export default DashboardPage;
