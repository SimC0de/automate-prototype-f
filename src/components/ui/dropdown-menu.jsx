import React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";
import { cn } from "./utils";

export const DropdownMenu = (props) => <DropdownMenuPrimitive.Root {...props} />;
export const DropdownMenuPortal = (props) => <DropdownMenuPrimitive.Portal {...props} />;
export const DropdownMenuTrigger = (props) => <DropdownMenuPrimitive.Trigger {...props} />;

export function DropdownMenuContent({ className, sideOffset = 4, ...props }) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        sideOffset={sideOffset}
        className={cn(
          "z-50 min-w-[8rem] rounded-md border bg-popover p-1 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out",
          className
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  );
}

export const DropdownMenuGroup = (props) => <DropdownMenuPrimitive.Group {...props} />;

export function DropdownMenuItem({ className, variant = "default", inset, ...props }) {
  return (
    <DropdownMenuPrimitive.Item
      data-variant={variant}
      className={cn(
        "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground",
        className
      )}
      {...props}
    />
  );
}

export function DropdownMenuCheckboxItem({ className, children, checked, ...props }) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      checked={checked}
      className={cn("relative flex items-center pl-8 pr-2 py-1.5 text-sm", className)}
      {...props}
    >
      <span className="absolute left-2 flex items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  );
}

export function DropdownMenuRadioGroup(props) {
  return <DropdownMenuPrimitive.RadioGroup {...props} />;
}

export function DropdownMenuRadioItem({ className, children, ...props }) {
  return (
    <DropdownMenuPrimitive.RadioItem
      className={cn("relative flex items-center pl-8 pr-2 py-1.5 text-sm", className)}
      {...props}
    >
      <span className="absolute left-2 flex items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CircleIcon className="size-2 fill-current" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  );
}

export const DropdownMenuLabel = ({ className, ...props }) => (
  <DropdownMenuPrimitive.Label className={cn("px-2 py-1.5 text-sm font-medium", className)} {...props} />
);

export const DropdownMenuSeparator = ({ className, ...props }) => (
  <DropdownMenuPrimitive.Separator className={cn("bg-border my-1 h-px", className)} {...props} />
);

export const DropdownMenuShortcut = ({ className, ...props }) => (
  <span className={cn("ml-auto text-xs text-muted-foreground", className)} {...props} />
);

export const DropdownMenuSub = (props) => <DropdownMenuPrimitive.Sub {...props} />;

export function DropdownMenuSubTrigger({ className, children, ...props }) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      className={cn("flex items-center px-2 py-1.5 text-sm", className)}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto size-4" />
    </DropdownMenuPrimitive.SubTrigger>
  );
}

export const DropdownMenuSubContent = ({ className, ...props }) => (
  <DropdownMenuPrimitive.SubContent
    className={cn("z-50 min-w-[8rem] rounded-md border bg-popover p-1 shadow-lg", className)}
    {...props}
  />
);
