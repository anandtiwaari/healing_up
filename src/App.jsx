import React from "react";
import NavigationBar from "./Components/NavigationBar";
import SectionOne from "./Components/SectionOne";
import WhyHealingUp from "./Components/WhyHealingUp";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import GraphicsSection from "./Components/GraphicsSection";
const App = () => {
  return (
    <div>
      {/* <Theme accentColor="crimson" grayColor="sand" radius="large" scaling="95%"> */}
      <NavigationBar />
      <SectionOne />
      <WhyHealingUp />
      <GraphicsSection/>
      {/* </Theme> */}
    </div>
  );
};

export default App;
