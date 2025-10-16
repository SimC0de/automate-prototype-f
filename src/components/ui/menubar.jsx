"use client";
import React from "react";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";
import { cn } from "./utils";

export function Menubar({ className, ...props }) {
  return (
    <MenubarPrimitive.Root
      data-slot="menubar"
      className={cn(
        "bg-background flex h-9 items-center gap-1 rounded-md border p-1 shadow-xs",
        className
      )}
      {...props}
    />
  );
}

export const MenubarMenu = (props) => (
  <MenubarPrimitive.Menu data-slot="menubar-menu" {...props} />
);

export const MenubarGroup = (props) => (
  <MenubarPrimitive.Group data-slot="menubar-group" {...props} />
);

export const MenubarPortal = (props) => (
  <MenubarPrimitive.Portal data-slot="menubar-portal" {...props} />
);

export const MenubarRadioGroup = (props) => (
  <MenubarPrimitive.RadioGroup data-slot="menubar-radio-group" {...props} />
);

export function MenubarTrigger({ className, ...props }) {
  return (
    <MenubarPrimitive.Trigger
      data-slot="menubar-trigger"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex items-center rounded-sm px-2 py-1 text-sm font-medium outline-hidden select-none",
        className
      )}
      {...props}
    />
  );
}

// The rest of Menubar components (Content, Item, Label, etc.) stay the same — no TS features were used, only prop typing.
