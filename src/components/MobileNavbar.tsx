import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "../components/ui/sheet";
import { NavItem } from "./NavItem";
import { Button } from "../components/ui/button"; // Importing shadcn Button

// SVG icons as reusable components
const MenuIcon = () => (
  <svg
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 6h16M4 12h16m-7 6h7"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export function MobileNavbar() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <Button
            variant="ghost"
            className="inline-flex items-center justify-center p-2 rounded-md text-primary-foreground hover:text-primary-foreground hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-foreground"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <MenuIcon /> {/* Optimized Menu icon */}
          </Button>
        </SheetTrigger>
        <SheetContent className="bg-primary">
          <SheetHeader>
            <SheetClose asChild>
              <Button
                variant="ghost"
                className="absolute top-4 right-4 flex items-center justify-center p-2 rounded-md text-primary-foreground hover:text-primary-foreground hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-foreground"
                aria-label="Close"
              >
                <CloseIcon /> {/* Optimized Close icon */}
              </Button>
            </SheetClose>
          </SheetHeader>
          <nav className="flex flex-col space-y-4 mt-4 text-left">
            <ul className="space-y-4">
              <li>
                <NavItem
                  href="https://github.com/nima70"
                  label="GitHub"
                  isExternal
                />
              </li>
              <li>
                <NavItem
                  href="https://github.com/InseeFrLab/keycloakify"
                  label="Keycloakify"
                  isExternal
                />
              </li>
              <li>
                <NavItem href="/storybook" label="Projects Storybook" />
              </li>
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
