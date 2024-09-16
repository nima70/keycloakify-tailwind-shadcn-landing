// FeaturesSection.jsx
import React from "react";

export const FeaturesSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">🛠 Key Features</h2>
        <p className="text-lg text-gray-600 mb-10">
          Tailwind CSS & ShadCN UI components for modern, customizable Keycloak
          themes.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 shadow-lg rounded-lg">
            <h3 className="font-semibold text-xl mb-2">Login Page</h3>
            <p className="text-gray-600">Enhanced with Tailwind & ShadCN UI.</p>
          </div>
          <div className="bg-gray-50 p-6 shadow-lg rounded-lg">
            <h3 className="font-semibold text-xl mb-2">Terms Page</h3>
            <p className="text-gray-600">
              Modern UI for better user experience.
            </p>
          </div>
          <div className="bg-gray-50 p-6 shadow-lg rounded-lg">
            <h3 className="font-semibold text-xl mb-2">Register Page</h3>
            <p className="text-gray-600">Fully responsive and accessible.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
