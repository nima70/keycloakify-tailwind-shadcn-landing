import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuViewport,
} from "../components/ui/navigation-menu";
import { NavItem } from "./NavItem"; // Reuse the NavItem component

export function DesktopNavbar() {
  return (
    <div className="hidden md:flex space-x-8">
      <NavigationMenu>
        <NavigationMenuList>
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
        </NavigationMenuList>
        <NavigationMenuViewport />
      </NavigationMenu>
    </div>
  );
}
