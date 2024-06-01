import React from "react";
import NavigationBar from "./Components/NavigationBar";
import SectionOne from "./Components/SectionOne";
import WhyHealingUp from "./Components/WhyHealingUp";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import GraphicsSection from "./Components/GraphicsSection";
import HomePage from "./Components/HomePage";
import AboutPage from "./Components/AboutPage";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
