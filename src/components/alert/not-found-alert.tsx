import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { ChevronLeft, SearchSlash, X } from "lucide-react";
import { NavLink } from "react-router";

export function NotFoundAlert() {
  return (
    <div>
      <Empty className="bg-muted/30 w-fit">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <SearchSlash />
          </EmptyMedia>
          <EmptyTitle>404 - Page Not Found</EmptyTitle>
          <EmptyDescription className="max-w-xs text-pretty">
            The page you are looking for does not exist or has been moved.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button variant="outline" asChild>
            <NavLink to="/">
              <ChevronLeft />
              Go Back Home
            </NavLink>
          </Button>
        </EmptyContent>
      </Empty>
    </div>
  );
}
