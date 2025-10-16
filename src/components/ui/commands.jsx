import React from "react";
import { Command as CommandPrimitive } from "cmdk";
import { SearchIcon } from "lucide-react";
import { cn } from "./utils";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./dialog";

export function Command({ className, ...props }) {
  return (
    <CommandPrimitive
      data-slot="command"
      className={cn("bg-popover text-popover-foreground flex flex-col rounded-md", className)}
      {...props}
    />
  );
}

export function CommandDialog({ title = "Command Palette", description = "Search...", children, ...props }) {
  return (
    <Dialog {...props}>
      <DialogHeader className="sr-only">
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogContent className="p-0 overflow-hidden">
        <Command className="w-full">{children}</Command>
      </DialogContent>
    </Dialog>
  );
}

export function CommandInput({ className, ...props }) {
  return (
    <div className="flex items-center gap-2 border-b px-3">
      <SearchIcon className="size-4 opacity-50" />
      <CommandPrimitive.Input
        data-slot="command-input"
        className={cn("h-10 w-full bg-transparent text-sm", className)}
        {...props}
      />
    </div>
  );
}

export const CommandList = (props) => <CommandPrimitive.List data-slot="command-list" {...props} />;
export const CommandEmpty = (props) => <CommandPrimitive.Empty data-slot="command-empty" {...props} />;
export const CommandGroup = (props) => <CommandPrimitive.Group data-slot="command-group" {...props} />;
export const CommandSeparator = (props) => <CommandPrimitive.Separator data-slot="command-separator" {...props} />;
export const CommandItem = (props) => <CommandPrimitive.Item data-slot="command-item" {...props} />;

export function CommandShortcut({ className, ...props }) {
  return <span className={cn("ml-auto text-xs text-muted-foreground", className)} {...props} />;
}
