// QuickStartSection.jsx
import React from "react";

export const QuickStartSection = () => {
  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">🚀 Quick Start</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <p className="text-lg font-semibold mb-4">Clone this repository:</p>
            <pre className="bg-gray-800 text-white p-4 rounded-md">
              <code>
                git clone
                https://github.com/nima70/keycloakify-tailwind-shadcn.git
              </code>
            </pre>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <p className="text-lg font-semibold mb-4">Install dependencies:</p>
            <pre className="bg-gray-800 text-white p-4 rounded-md">
              <code>yarn install</code>
            </pre>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 mt-8">
          <p className="text-lg font-semibold mb-4">Run the project locally:</p>
          <pre className="bg-gray-800 text-white p-4 rounded-md">
            <code>npm start</code>
          </pre>
        </div>
      </div>
    </section>
  );
};

export default QuickStartSection;
