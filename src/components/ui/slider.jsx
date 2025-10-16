"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import { cn } from "./utils"

export function Slider({ className, defaultValue, value, min = 0, max = 100, ...props }) {
  const _values = Array.isArray(value)
    ? value
    : Array.isArray(defaultValue)
    ? defaultValue
    : [min, max]

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn("relative flex w-full items-center select-none", className)}
      {...props}
    >
      <SliderPrimitive.Track className="bg-muted relative grow overflow-hidden rounded-full h-2">
        <SliderPrimitive.Range className="bg-primary absolute h-full" />
      </SliderPrimitive.Track>
      {Array.from({ length: _values.length }, (_, i) => (
        <SliderPrimitive.Thumb
          key={i}
          className="border-primary bg-background block size-4 rounded-full border shadow-sm transition-all hover:ring-4"
        />
      ))}
    </SliderPrimitive.Root>
  )
}
