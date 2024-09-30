import * as React from "react";
import { Link } from "react-router-dom";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: {
  title: string;
  href: string;
  description: string;
  hrefLogo: string;
}[] = [
  {
    title: "UA3D",
    href: "/ua3d",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
    hrefLogo: "/logo-ua3d.svg",
  },
  {
    title: "Laboratorio IoT",
    href: "laboratorio-iot",
    description:
      "For sighted users to preview content available behind a link.",
    hrefLogo: "/logo-laboratorio-iot.svg",
  },
  {
    title: "Eventos",
    href: "/eventos",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    hrefLogo: "/logo-eventos.svg",
  },
];

export function NavBarMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link className={navigationMenuTriggerStyle()} to="/">
            Inicio
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link className={navigationMenuTriggerStyle()} to="/about">
            Sobre nosotros
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Proyectos</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-row flex-wrap gap-3 p-4 min-w-[400px]">
              {components.map((component) => (
                <ListItem
                  className="flex flex-row gap-2"
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          to={href || ""}
          {...props}
        >
          <img src="/logo.svg" alt="Logo" />
          <div>
            <div className="text-sm font-medium leading-none text-center pb-1">
              {title}
            </div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default NavBarMenu;
