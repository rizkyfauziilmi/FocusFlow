import { SidebarAppSecondaryContent } from "./sidebar-app-secondary-content";
import { SidebarAppPrimaryContent } from "./sidebar-app-primary-content";
import { SidebarContent } from "../ui/sidebar";

export function SidebarAppContent() {
  return (
    <SidebarContent>
      <SidebarAppPrimaryContent />
      <SidebarAppSecondaryContent />
    </SidebarContent>
  );
}
