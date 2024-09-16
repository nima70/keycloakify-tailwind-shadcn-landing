// LicenseSection.jsx
import React from "react";
import { Button } from "../components/ui/button";

export const LicenseSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">📄 License</h2>
        <p className="text-lg text-gray-600 mb-8">
          This project is licensed under the MIT License.
        </p>
        <Button className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700">
          View License
        </Button>
      </div>
    </section>
  );
};

export default LicenseSection;
