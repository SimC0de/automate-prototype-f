import React from "react";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";
import { cn } from "./utils";

export const ContextMenu = (props) => <ContextMenuPrimitive.Root {...props} />;
export const ContextMenuTrigger = (props) => <ContextMenuPrimitive.Trigger {...props} />;
export const ContextMenuGroup = (props) => <ContextMenuPrimitive.Group {...props} />;
export const ContextMenuPortal = (props) => <ContextMenuPrimitive.Portal {...props} />;
export const ContextMenuSub = (props) => <ContextMenuPrimitive.Sub {...props} />;
export const ContextMenuRadioGroup = (props) => <ContextMenuPrimitive.RadioGroup {...props} />;

export function ContextMenuSubTrigger({ className, children, ...props }) {
  return (
    <ContextMenuPrimitive.SubTrigger
      className={cn("flex items-center px-2 py-1.5 text-sm", className)}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto" />
    </ContextMenuPrimitive.SubTrigger>
  );
}

export function ContextMenuSubContent({ className, ...props }) {
  return (
    <ContextMenuPrimitive.SubContent
      className={cn("bg-popover rounded-md border p-1 shadow-lg", className)}
      {...props}
    />
  );
}

export function ContextMenuContent({ className, ...props }) {
  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Content
        className={cn("bg-popover rounded-md border p-1 shadow-md", className)}
        {...props}
      />
    </ContextMenuPrimitive.Portal>
  );
}

export function ContextMenuItem({ className, ...props }) {
  return (
    <ContextMenuPrimitive.Item
      className={cn("flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm", className)}
      {...props}
    />
  );
}

export function ContextMenuCheckboxItem({ className, children, checked, ...props }) {
  return (
    <ContextMenuPrimitive.CheckboxItem
      className={cn("flex items-center pl-8 pr-2 py-1.5 text-sm relative", className)}
      checked={checked}
      {...props}
    >
      <span className="absolute left-2 flex items-center justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  );
}

export function ContextMenuRadioItem({ className, children, ...props }) {
  return (
    <ContextMenuPrimitive.RadioItem
      className={cn("flex items-center pl-8 pr-2 py-1.5 text-sm relative", className)}
      {...props}
    >
      <span className="absolute left-2 flex items-center justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <CircleIcon className="size-2 fill-current" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.RadioItem>
  );
}

export const ContextMenuLabel = (props) => <ContextMenuPrimitive.Label {...props} />;
export const ContextMenuSeparator = (props) => <ContextMenuPrimitive.Separator {...props} />;
export const ContextMenuShortcut = ({ className, ...props }) => (
  <span className={cn("ml-auto text-xs text-muted-foreground", className)} {...props} />
);
