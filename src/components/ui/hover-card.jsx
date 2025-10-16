import React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { cn } from "./utils";

export const HoverCard = (props) => <HoverCardPrimitive.Root {...props} />;
export const HoverCardTrigger = (props) => <HoverCardPrimitive.Trigger {...props} />;

export function HoverCardContent({ className, align = "center", sideOffset = 4, ...props }) {
  return (
    <HoverCardPrimitive.Portal>
      <HoverCardPrimitive.Content
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "z-50 w-64 rounded-md border bg-popover p-4 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out",
          className
        )}
        {...props}
      />
    </HoverCardPrimitive.Portal>
  );
}
