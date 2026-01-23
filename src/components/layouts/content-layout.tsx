import { Outlet } from "react-router";
import { SidebarTrigger } from "../ui/sidebar";

export function ContentLayout() {
  return (
    <div className="p-2">
      <SidebarTrigger />
      <Outlet />
    </div>
  );
}
