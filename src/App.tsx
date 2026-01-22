import { NavLink } from "react-router";
import { ModeToggle } from "./components/mode-toggle";
import { Button } from "./components/ui/button";
import { MoveRight } from "lucide-react";

function App() {
  return (
    <div className="min-h-svh flex flex-col gap-2 items-center justify-center">
      <h1 className="text-3xl font-bold">This is the Home Page</h1>
      <div className="flex gap-4 items-center">
        <ModeToggle />
        <NavLink to="/test">
          <Button>
            Go to Test Page
            <MoveRight />
          </Button>
        </NavLink>
      </div>
    </div>
  );
}

export default App;
