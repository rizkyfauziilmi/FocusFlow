import { Bug, HelpCircle, Settings2 } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import { useLocation } from "react-router";

const items = [
  {
    title: "Settings",
    url: "settings",
    icon: Settings2,
  },
  {
    title: "Help",
    url: "help",
    icon: HelpCircle,
  },
  {
    title: "Report Bug",
    url: "report-bug",
    icon: Bug,
  },
];

export function SidebarAppSecondaryContent() {
  let location = useLocation();

  function isActive(url: string) {
    return location.pathname === `/${url}`;
  }

  return (
    <SidebarGroup className="mt-auto border-t">
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                tooltip={item.title}
                asChild
                isActive={isActive(item.url)}
              >
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
