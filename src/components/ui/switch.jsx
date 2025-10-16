"use client"

import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"
import { cn } from "./utils"

export function Switch({ className, ...props }) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-switch-background inline-flex h-[1.15rem] w-8 items-center rounded-full border transition-all",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className="bg-card block size-4 rounded-full transition-transform data-[state=checked]:translate-x-[calc(100%-2px)]"
      />
    </SwitchPrimitive.Root>
  )
}
