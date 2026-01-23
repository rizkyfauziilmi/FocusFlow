import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import { NavLink } from "react-router";

export function TestPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">This is the Test Page</h1>
      <NavLink to="/">
        <Button>
          <MoveLeft />
          Back to Home
        </Button>
      </NavLink>
    </div>
  );
}
