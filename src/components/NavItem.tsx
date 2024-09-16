import { Link } from "react-router-dom";
import { cn } from "../lib/utils"; // Adjust the path if necessary
import { buttonVariants } from "../components/ui/button"; // Adjust the path if necessary

interface NavItemProps {
  href: string;
  label: string;
  isExternal?: boolean;
}

export const NavItem = ({ href, label, isExternal = false }: NavItemProps) => {
  const commonClasses = cn(
    buttonVariants({ variant: "link" }),
    "text-lg font-medium text-primary-foreground hover:text-primary-foreground"
  );

  if (isExternal) {
    return (
      <a
        href={href}
        className={commonClasses}
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </a>
    );
  }

  return (
    <Link to={href} className={commonClasses}>
      {label}
    </Link>
  );
};
