import {
  AudioWaveform,
  CalendarDays,
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

// Menu items.
const items = [
  {
    title: "To-Do",
    url: "#",
    icon: ListTodo,
  },
  {
    title: "Pomodoro Timer",
    url: "#",
    icon: Timer,
  },
  {
    title: "Ambient",
    url: "#",
    icon: AudioWaveform,
  },
  {
    title: "Calendar",
    url: "#",
    icon: CalendarDays,
  },
  {
    title: "Notes",
    url: "#",
    icon: Notebook,
  },
  {
    title: "Integrations",
    url: "#",
    icon: Unplug,
  },
];

export function SidebarAppPrimaryContent() {
  return (
    <SidebarGroup className="border-t">
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton tooltip={item.title} asChild>
                <a href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
