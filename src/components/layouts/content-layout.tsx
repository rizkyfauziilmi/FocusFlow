import { Outlet } from "react-router";
import { SidebarTrigger } from "../ui/sidebar";

export function ContentLayout() {
  return (
    <div className="p-2 w-full h-full">
      <SidebarTrigger />
      <Outlet />
    </div>
  );
}
