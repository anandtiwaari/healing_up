import React from "react";
import NavigationBar from "./NavigationBar";
import SectionOne from "./SectionOne";
import WhyHealingUp from "./WhyHealingUp";
import GraphicsSection from "./GraphicsSection";

const HomePage = () => {
  return (
    <div>
      <NavigationBar />
      <SectionOne />
      <WhyHealingUp />
      <GraphicsSection />
    </div>
  );
};

export default HomePage;
