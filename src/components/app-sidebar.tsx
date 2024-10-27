import {
  BookOpen,
  Bot,
  Settings,
  Settings2,
  SquareTerminal
} from 'lucide-react'
import * as React from 'react'

import { NavMain } from '@/components/nav-main'
import { NavUser } from '@/components/nav-user'
import { TeamSwitcher } from '@/components/team-switcher'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail
} from '@/components/ui/sidebar'
import { useAppSelector } from '@/hooks'

const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg'
  },
  navMain: [
    {
      title: 'Playground',
      url: '#',
      icon: SquareTerminal,
      isActive: false,
      items: [
        {
          title: 'History',
          url: '#'
        },
        {
          title: 'Starred',
          url: '#'
        },
        {
          title: 'Settings',
          url: '#'
        }
      ]
    },
    {
      title: 'Models',
      url: '#',
      icon: Bot,
      items: [
        {
          title: 'Genesis',
          url: '#'
        },
        {
          title: 'Explorer',
          url: '#'
        },
        {
          title: 'Quantum',
          url: '#'
        }
      ]
    },
    {
      title: 'Documentation',
      url: '#',
      icon: BookOpen,
      items: [
        {
          title: 'Introduction',
          url: '#'
        },
        {
          title: 'Get Started',
          url: '#'
        },
        {
          title: 'Tutorials',
          url: '#'
        },
        {
          title: 'Changelog',
          url: '#'
        }
      ]
    },
    {
      title: 'Facultades',
      url: '#',
      icon: Settings,
      items: [
        {
          title: 'Facultades',
          url: '/faculty'
        },
        {
          title: 'Programas',
          url: '/program'
        }
      ]
    },
    {
      title: 'Configuraciones',
      url: '#',
      icon: Settings2,
      items: [
        {
          title: 'Roles',
          url: '/rol'
        },
        {
          title: 'Estado de servidor',
          url: '/server-status'
        },
        {
          title: 'Estado de usuarios',
          url: '/user-status'
        }
      ]
    }
  ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const fullUser = useAppSelector(state => state.fullUser)

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser profile={fullUser.profile} person={fullUser.person} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
