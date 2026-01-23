import { Bug, HelpCircle, Settings2 } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";

const items = [
  {
    title: "Settings",
    url: "#",
    icon: Settings2,
  },
  {
    title: "Help",
    url: "#",
    icon: HelpCircle,
  },
  {
    title: "Report Bug",
    url: "#",
    icon: Bug,
  },
];

export function SidebarAppSecondaryContent() {
  return (
    <SidebarGroup className="mt-auto border-t">
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
