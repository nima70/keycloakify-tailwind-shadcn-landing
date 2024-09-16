import React from "react";
import { Button } from "./components/ui/button";
import { Hero } from "./landingPage/Hero";
import { WhyThisProjectSection } from "./landingPage/WhyThisProjectSection";
import { QuickStartSection } from "./landingPage/QuickStartSection";
import { FeaturesSection } from "./landingPage/FeaturesSection";
import { ContributionSection } from "./landingPage/ContributionSection";
import { LicenseSection } from "./landingPage/LicenseSection";
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200">
        <Navbar />
        <Hero />
        <WhyThisProjectSection />
        <QuickStartSection />
        <FeaturesSection />
        <ContributionSection />
        <LicenseSection />
      </div>
    </Router>
  );
}

export default App;
