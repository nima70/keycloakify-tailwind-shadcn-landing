// ContributionSection.tsx
import React from "react";
import { Button } from "../components/ui/button";

export const ContributionSection = () => {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-24">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-8">🤝 How You Can Contribute</h2>
        <p className="text-2xl mb-10">
          Join us in building modern, customizable Keycloak themes!
        </p>
        <Button className="bg-white text-purple-600 px-10 py-4 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300">
          Fork on GitHub
        </Button>
      </div>
    </section>
  );
};

export default ContributionSection;
