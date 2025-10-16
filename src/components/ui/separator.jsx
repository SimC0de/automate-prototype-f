"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"
import { cn } from "./utils"

export function Separator({ className, orientation = "horizontal", decorative = true, ...props }) {
  return (
    <SeparatorPrimitive.Root
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=vertical]:w-px",
        className
      )}
      {...props}
    />
  )
}
