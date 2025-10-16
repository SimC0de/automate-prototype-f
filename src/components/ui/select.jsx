"use client"

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react"
import { cn } from "./utils"

export const Select = SelectPrimitive.Root
export const SelectGroup = SelectPrimitive.Group
export const SelectValue = SelectPrimitive.Value

export function SelectTrigger({ className, children, size = "default", ...props }) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "border-input data-[placeholder]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 flex w-full items-center justify-between gap-2 rounded-md border bg-input-background px-3 py-2 text-sm outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="size-4 opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

export function SelectContent({ className, children, position = "popper", ...props }) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          "bg-popover text-popover-foreground relative z-50 min-w-[8rem] overflow-hidden rounded-md border shadow-md",
          className
        )}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport className="p-1">{children}</SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

export const SelectLabel = ({ className, ...props }) => (
  <SelectPrimitive.Label className={cn("text-muted-foreground px-2 py-1.5 text-xs", className)} {...props} />
)

export function SelectItem({ className, children, ...props }) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm select-none",
        className
      )}
      {...props}
    >
      <span className="absolute right-2 flex size-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

export const SelectSeparator = ({ className, ...props }) => (
  <SelectPrimitive.Separator className={cn("bg-border my-1 h-px", className)} {...props} />
)

const SelectScrollUpButton = ({ className, ...props }) => (
  <SelectPrimitive.ScrollUpButton className={cn("flex items-center justify-center py-1", className)} {...props}>
    <ChevronUpIcon className="size-4" />
  </SelectPrimitive.ScrollUpButton>
)

const SelectScrollDownButton = ({ className, ...props }) => (
  <SelectPrimitive.ScrollDownButton className={cn("flex items-center justify-center py-1", className)} {...props}>
    <ChevronDownIcon className="size-4" />
  </SelectPrimitive.ScrollDownButton>
)
