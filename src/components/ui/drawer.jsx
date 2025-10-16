import React from "react";
import { Drawer as DrawerPrimitive } from "vaul";
import { cn } from "./utils";

export function Drawer(props) {
  return <DrawerPrimitive.Root {...props} />;
}

export function DrawerTrigger(props) {
  return <DrawerPrimitive.Trigger {...props} />;
}

export function DrawerPortal(props) {
  return <DrawerPrimitive.Portal {...props} />;
}

export function DrawerClose(props) {
  return <DrawerPrimitive.Close {...props} />;
}

export function DrawerOverlay({ className, ...props }) {
  return (
    <DrawerPrimitive.Overlay
      className={cn("fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in", className)}
      {...props}
    />
  );
}

export function DrawerContent({ className, children, ...props }) {
  return (
    <DrawerPortal>
      <DrawerOverlay />
      <DrawerPrimitive.Content
        className={cn(
          "fixed z-50 flex flex-col bg-background data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:w-full sm:max-w-sm",
          className
        )}
        {...props}
      >
        <div className="mx-auto mt-4 hidden h-2 w-[100px] rounded-full bg-muted data-[vaul-drawer-direction=bottom]:block" />
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  );
}

export function DrawerHeader({ className, ...props }) {
  return <div className={cn("p-4 flex flex-col gap-1.5", className)} {...props} />;
}

export function DrawerFooter({ className, ...props }) {
  return <div className={cn("mt-auto p-4 flex flex-col gap-2", className)} {...props} />;
}

export function DrawerTitle({ className, ...props }) {
  return <DrawerPrimitive.Title className={cn("font-semibold text-foreground", className)} {...props} />;
}

export function DrawerDescription({ className, ...props }) {
  return <DrawerPrimitive.Description className={cn("text-sm text-muted-foreground", className)} {...props} />;
}
