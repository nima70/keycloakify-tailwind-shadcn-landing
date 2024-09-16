import { Button } from "../components/ui/button";

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 bottom-0 opacity-30">
        {/* Fancy background circles */}
        <div className="absolute w-96 h-96 bg-indigo-400 opacity-20 rounded-full blur-3xl -top-20 -left-40"></div>
        <div className="absolute w-72 h-72 bg-purple-500 opacity-25 rounded-full blur-2xl top-40 -right-40"></div>
      </div>

      <div className="relative max-w-7xl mx-auto text-center px-6 z-10">
        <h1 className="text-7xl font-extrabold mb-10 tracking-tight leading-tight animate-fade-in-up">
          🚀 Keycloakify + Tailwind CSS & ShadCN UI 🚀
        </h1>
        <p className="text-3xl mb-14 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-100">
          The ultimate toolkit to enhance Keycloak theming with modern UI
          components and rapid styling.
        </p>
        <Button className="bg-white text-blue-600 px-12 py-5 rounded-full shadow-2xl hover:bg-gray-100 hover:scale-110 transition-transform duration-300 ease-in-out animate-fade-in-up delay-200">
          Get Started
        </Button>
      </div>

      {/* Add some fancy floating shapes for decoration */}
      <div className="absolute bottom-10 right-20 animate-bounce-slow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-24 w-24 text-white opacity-30"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19.428 15.518l-1.9 1.9a6 6 0 11-8.486-8.486l1.9-1.9"
          />
        </svg>
      </div>
      <div className="absolute top-10 left-10 animate-spin-slow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 text-white opacity-30"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 7h-1v6h-2l4 4V7z"
          />
        </svg>
      </div>
    </section>
  );
};
