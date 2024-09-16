// WhyThisProjectSection.jsx
import React from 'react';
import { Button } from '../components/ui/button';

export const WhyThisProjectSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">💡 Why This Project?</h2>
        <p className="text-xl text-gray-700 mb-10">
          This project helps the Keycloak developer community by offering a
          customizable template for building modern Keycloak themes with
          Tailwind CSS & ShadCN UI.
        </p>
        <Button className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700">
          Contribute Now
        </Button>
      </div>
    </section>
  );
};

export default WhyThisProjectSection;
