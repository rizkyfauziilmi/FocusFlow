import { Outlet } from "react-router";
import { SidebarTrigger } from "../ui/sidebar";

export function CenteredLayout() {
  return (
    <div className="flex w-full h-full items-center justify-center relative flex-col p-2">
      <SidebarTrigger className="absolute top-2 left-2" />
      <Outlet />
    </div>
  );
}
