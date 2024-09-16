import { MobileNavbar } from "./MobileNavbar";
import { DesktopNavbar } from "./DesktopNavbar";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="bg-primary text-primary-foreground border-b shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo or Title */}
          <div className="text-2xl font-bold bg-primary text-primary-foreground">
            <Link to="/">Keycloakify Tailwind Shadcn</Link>
          </div>

          {/* Desktop Navbar */}
          <DesktopNavbar />

          {/* Mobile Navbar */}
          <MobileNavbar />
        </div>
      </div>
    </nav>
  );
}
