import {
  AudioWaveform,
  CalendarDays,
  House,
  ListTodo,
  Notebook,
  Timer,
  Unplug,
} from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import { NavLink, useLocation } from "react-router";

// Menu items.
const items = [
  {
    title: "Home",
    url: "",
    icon: House,
  },
  {
    title: "To-Do",
    url: "todo",
    icon: ListTodo,
  },
  {
    title: "Pomodoro Timer",
    url: "pomodoro",
    icon: Timer,
  },
  {
    title: "Ambient",
    url: "ambient",
    icon: AudioWaveform,
  },
  {
    title: "Calendar",
    url: "calendar",
    icon: CalendarDays,
  },
  {
    title: "Notes",
    url: "notes",
    icon: Notebook,
  },
  {
    title: "Integrations",
    url: "integrations",
    icon: Unplug,
  },
];

export function SidebarAppPrimaryContent() {
  let location = useLocation();

  function isActive(url: string) {
    return location.pathname === `/${url}`;
  }

  return (
    <SidebarGroup className="border-t">
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                tooltip={item.title}
                asChild
                isActive={isActive(item.url)}
              >
                <NavLink to={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
