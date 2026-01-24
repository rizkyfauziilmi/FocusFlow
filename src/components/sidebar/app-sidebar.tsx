import { Sidebar } from "../ui/sidebar";
import { SidebarAppContent } from "./sidebar-app-content";
import { SidebarAppHeader } from "./sidebar-app-header";

export function AppSidebar() {
  return (
    <Sidebar variant="floating" collapsible="icon">
      <SidebarAppHeader />
      <SidebarAppContent />
    </Sidebar>
  );
}
