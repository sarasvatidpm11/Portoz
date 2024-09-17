// pages/dashboardPage.js
import About from "@/components/dashboard/About";
import HeroSection from "@/components/dashboard/HeroSection";
import React from "react";

const DashboardPage = () => {
  return (
    <div>
      <HeroSection />
      <About/>
    </div>
  );
};

export default DashboardPage;
