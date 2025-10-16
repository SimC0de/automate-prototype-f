"use client"

import * as React from "react"
import { PanelLeftIcon } from "lucide-react"
import { cn } from "./utils"
import { Button } from "./button"
import { Input } from "./input"
import { Separator } from "./separator"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "./sheet"
import { Skeleton } from "./skeleton"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip"
import { useIsMobile } from "./use-mobile"

const SIDEBAR_COOKIE_NAME = "sidebar_state"
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const SIDEBAR_WIDTH = "16rem"
const SIDEBAR_WIDTH_MOBILE = "18rem"
const SIDEBAR_WIDTH_ICON = "3rem"
const SIDEBAR_KEYBOARD_SHORTCUT = "b"

const SidebarContext = React.createContext(null)

export function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) throw new Error("useSidebar must be used within a SidebarProvider.")
  return context
}

export function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange,
  className,
  style,
  children,
  ...props
}) {
  const isMobile = useIsMobile()
  const [openMobile, setOpenMobile] = React.useState(false)
  const [_open, _setOpen] = React.useState(defaultOpen)
  const open = openProp ?? _open

  const setOpen = React.useCallback(
    (value) => {
      const openState = typeof value === "function" ? value(open) : value
      if (onOpenChange) onOpenChange(openState)
      else _setOpen(openState)
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
    },
    [onOpenChange, open]
  )

  const toggleSidebar = React.useCallback(() => {
    return isMobile ? setOpenMobile((o) => !o) : setOpen((o) => !o)
  }, [isMobile, setOpen, setOpenMobile])

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === SIDEBAR_KEYBOARD_SHORTCUT && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        toggleSidebar()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [toggleSidebar])

  const state = open ? "expanded" : "collapsed"

  const contextValue = React.useMemo(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar,
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
  )

  return (
    <SidebarContext.Provider value={contextValue}>
      <TooltipProvider delayDuration={0}>
        <div
          data-slot="sidebar-wrapper"
          style={{
            "--sidebar-width": SIDEBAR_WIDTH,
            "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
            ...style,
          }}
          className={cn(
            "group/sidebar-wrapper flex min-h-screen w-full",
            className
          )}
          {...props}
        >
          {children}
        </div>
      </TooltipProvider>
    </SidebarContext.Provider>
  )
}

// -----------------------------
// Main Sidebar Component
// -----------------------------
export function Sidebar({
  side = "left",
  variant = "sidebar",
  collapsible = "offcanvas",
  className,
  children,
  ...props
}) {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar()

  if (collapsible === "none") {
    return (
      <div
        data-slot="sidebar"
        className={cn(
          "bg-sidebar text-sidebar-foreground flex h-full w-[var(--sidebar-width)] flex-col",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }

  if (isMobile) {
    return (
      <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
        <SheetContent
          data-slot="sidebar"
          className="bg-sidebar text-sidebar-foreground w-[var(--sidebar-width)] p-0 [&>button]:hidden"
          style={{
            "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
          }}
          side={side}
        >
          <SheetHeader className="sr-only">
            <SheetTitle>Sidebar</SheetTitle>
            <SheetDescription>Displays the mobile sidebar.</SheetDescription>
          </SheetHeader>
          <div className="flex h-full flex-col">{children}</div>
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <div
      className="group peer hidden md:block"
      data-state={state}
      data-collapsible={state === "collapsed" ? collapsible : ""}
      data-variant={variant}
      data-side={side}
      data-slot="sidebar"
    >
      <div
        className={cn(
          "relative w-[var(--sidebar-width)] transition-all duration-200",
          "group-data-[collapsible=offcanvas]:w-0",
          "group-data-[side=right]:rotate-180",
          variant === "floating" || variant === "inset"
            ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+1rem)]"
            : "group-data-[collapsible=icon]:w-[var(--sidebar-width-icon)]"
        )}
      />
      <div
        className={cn(
          "fixed inset-y-0 z-10 hidden h-screen w-[var(--sidebar-width)] transition-all duration-200 ease-linear md:flex",
          side === "left"
            ? "left-0 group-data-[collapsible=offcanvas]:-left-[var(--sidebar-width)]"
            : "right-0 group-data-[collapsible=offcanvas]:-right-[var(--sidebar-width)]",
          variant === "floating" || variant === "inset"
            ? "p-2"
            : "border-r"
        )}
        {...props}
      >
        <div
          data-slot="sidebar-inner"
          className="bg-sidebar flex h-full w-full flex-col rounded-md shadow-sm"
        >
          {children}
        </div>
      </div>
    </div>
  )
}

// -----------------------------
// Sidebar Utilities
// -----------------------------
export function SidebarTrigger({ className, onClick, ...props }) {
  const { toggleSidebar } = useSidebar()
  return (
    <Button
      data-slot="sidebar-trigger"
      variant="ghost"
      size="icon"
      className={cn("size-7", className)}
      onClick={(e) => {
        onClick?.(e)
        toggleSidebar()
      }}
      {...props}
    >
      <PanelLeftIcon />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
}

export function SidebarRail({ className, ...props }) {
  const { toggleSidebar } = useSidebar()
  return (
    <button
      data-slot="sidebar-rail"
      onClick={toggleSidebar}
      className={cn(
        "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 sm:flex hover:after:bg-sidebar-border after:absolute after:inset-y-0 after:left-1/2 after:w-[2px]",
        className
      )}
      {...props}
    />
  )
}

export function SidebarInset({ className, ...props }) {
  return (
    <main
      data-slot="sidebar-inset"
      className={cn(
        "bg-background relative flex w-full flex-1 flex-col md:ml-0 md:rounded-xl md:shadow-sm",
        className
      )}
      {...props}
    />
  )
}

export const SidebarInput = ({ className, ...props }) => (
  <Input className={cn("bg-background h-8 w-full shadow-none", className)} {...props} />
)

export const SidebarHeader = ({ className, ...props }) => (
  <div data-slot="sidebar-header" className={cn("flex flex-col gap-2 p-2", className)} {...props} />
)

export const SidebarFooter = ({ className, ...props }) => (
  <div data-slot="sidebar-footer" className={cn("flex flex-col gap-2 p-2", className)} {...props} />
)

export const SidebarSeparator = ({ className, ...props }) => (
  <Separator className={cn("bg-sidebar-border mx-2 w-auto", className)} {...props} />
)

export const SidebarContent = ({ className, ...props }) => (
  <div
    data-slot="sidebar-content"
    className={cn("flex min-h-0 flex-1 flex-col gap-2 overflow-auto", className)}
    {...props}
  />
)

export const SidebarGroup = ({ className, ...props }) => (
  <div data-slot="sidebar-group" className={cn("relative flex w-full flex-col p-2", className)} {...props} />
)

export const SidebarGroupLabel = ({ className, ...props }) => (
  <div
    data-slot="sidebar-group-label"
    className={cn(
      "text-sidebar-foreground/70 flex h-8 items-center rounded-md px-2 text-xs font-medium",
      className
    )}
    {...props}
  />
)

export const SidebarGroupAction = ({ className, ...props }) => (
  <button
    data-slot="sidebar-group-action"
    className={cn(
      "absolute top-3.5 right-3 flex w-5 items-center justify-center rounded-md p-0 hover:bg-sidebar-accent",
      className
    )}
    {...props}
  />
)

export const SidebarGroupContent = ({ className, ...props }) => (
  <div data-slot="sidebar-group-content" className={cn("w-full text-sm", className)} {...props} />
)

// -----------------------------
// Menu Components
// -----------------------------
export const SidebarMenu = ({ className, ...props }) => (
  <ul data-slot="sidebar-menu" className={cn("flex w-full flex-col gap-1", className)} {...props} />
)

export const SidebarMenuItem = ({ className, ...props }) => (
  <li data-slot="sidebar-menu-item" className={cn("relative", className)} {...props} />
)

export function SidebarMenuButton({ tooltip, isActive, className, children, ...props }) {
  const { isMobile, state } = useSidebar()

  const button = (
    <button
      data-slot="sidebar-menu-button"
      data-active={isActive}
      className={cn(
        "flex w-full items-center gap-2 rounded-md p-2 text-left text-sm hover:bg-sidebar-accent focus-visible:ring-2",
        isActive && "bg-sidebar-accent font-medium text-sidebar-accent-foreground",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )

  if (!tooltip) return button
  if (typeof tooltip === "string") tooltip = { children: tooltip }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent side="right" align="center" hidden={state !== "collapsed" || isMobile} {...tooltip} />
    </Tooltip>
  )
}

export const SidebarMenuAction = ({ className, ...props }) => (
  <button
    data-slot="sidebar-menu-action"
    className={cn(
      "absolute top-1.5 right-1 flex w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
      className
    )}
    {...props}
  />
)

export const SidebarMenuBadge = ({ className, ...props }) => (
  <div
    data-slot="sidebar-menu-badge"
    className={cn(
      "absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium",
      className
    )}
    {...props}
  />
)

export const SidebarMenuSkeleton = ({ className, showIcon }) => {
  const width = `${Math.floor(Math.random() * 40) + 50}%`
  return (
    <div className={cn("flex h-8 items-center gap-2 rounded-md px-2", className)}>
      {showIcon && <Skeleton className="size-4 rounded-md" />}
      <Skeleton className="h-4 flex-1" style={{ width }} />
    </div>
  )
}

export const SidebarMenuSub = ({ className, ...props }) => (
  <ul
    data-slot="sidebar-menu-sub"
    className={cn("border-l border-sidebar-border ml-3.5 flex flex-col gap-1 px-2.5 py-0.5", className)}
    {...props}
  />
)

export const SidebarMenuSubItem = ({ className, ...props }) => (
  <li data-slot="sidebar-menu-sub-item" className={cn("relative", className)} {...props} />
)

export const SidebarMenuSubButton = ({ className, isActive, size = "md", ...props }) => (
  <a
    data-slot="sidebar-menu-sub-button"
    data-active={isActive}
    className={cn(
      "flex items-center gap-2 rounded-md px-2 text-sm hover:bg-sidebar-accent",
      isActive && "bg-sidebar-accent text-sidebar-accent-foreground",
      size === "sm" && "text-xs h-7",
      className
    )}
    {...props}
  />
)
