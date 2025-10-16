"use client"

import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { XIcon } from "lucide-react"
import { cn } from "./utils"

export const Sheet = SheetPrimitive.Root
export const SheetTrigger = SheetPrimitive.Trigger
export const SheetClose = SheetPrimitive.Close

export const SheetOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out", className)}
    {...props}
  />
))

export function SheetContent({ className, children, side = "right", ...props }) {
  return (
    <SheetPrimitive.Portal>
      <SheetOverlay />
      <SheetPrimitive.Content
        className={cn(
          "bg-background fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out",
          side === "right" && "inset-y-0 right-0 w-3/4 border-l sm:max-w-sm",
          side === "left" && "inset-y-0 left-0 w-3/4 border-r sm:max-w-sm",
          side === "top" && "inset-x-0 top-0 border-b",
          side === "bottom" && "inset-x-0 bottom-0 border-t",
          className
        )}
        {...props}
      >
        {children}
        <SheetPrimitive.Close className="absolute top-4 right-4 opacity-70 hover:opacity-100">
          <XIcon className="size-4" />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPrimitive.Portal>
  )
}

export const SheetHeader = ({ className, ...props }) => <div className={cn("flex flex-col gap-1.5 p-4", className)} {...props} />
export const SheetFooter = ({ className, ...props }) => <div className={cn("mt-auto flex flex-col gap-2 p-4", className)} {...props} />
export const SheetTitle = SheetPrimitive.Title
export const SheetDescription = SheetPrimitive.Description
