import * as React from 'react'
import { Link } from 'react-router-dom'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'

const components: {
  title: string
  href: string
  description: string
  hrefLogo: string
}[] = [
  {
    title: 'UA3D',
    href: '/ua3d',
    description:
      'Vive una experiencia única de aprendizaje inmersivo en nuestro campus virtual.',
    hrefLogo: '/logo.svg'
  },
  {
    title: 'Laboratorio IoT',
    href: 'laboratorio-iot',
    description:
      'For sighted users to preview content available behind a link.',
    hrefLogo: '/logos/lab-iot-logo.png'
  },
  {
    title: 'Gestor de eventos Zogui',
    href: '/zogui',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
    hrefLogo: '/logos/zogui-logo.png'
  },
  {
    title: 'Labe',
    href: '/labe',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
    hrefLogo: '/logos/labe-logo.png'
  }
]

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
            <ul className="flex min-w-[400px] flex-row flex-wrap gap-3 p-4">
              {components.map(component => (
                <ListItem
                  className="flex flex-row gap-2"
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  hrefLogo={component.hrefLogo}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, href, hrefLogo, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          to={href || ''}
          {...props}
        >
          <img src={hrefLogo} alt={title} />
          <div>
            <div className="pb-1 text-center text-sm font-medium leading-none">
              {title}
            </div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})

ListItem.displayName = 'ListItem'

export default NavBarMenu
