// pages/dashboardPage.js
import About from "@/components/dashboard/About";
import HeroSection from "@/components/dashboard/HeroSection";
import Service from "@/components/dashboard/Service";
import React from "react";

const DashboardPage = () => {
  return (
    <div>
      <HeroSection />
      <About/>
      <Service />
    </div>
  );
};

export default DashboardPage;
