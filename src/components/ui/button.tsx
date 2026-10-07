import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-linear-to-br from-violet to-pink text-white shadow-[0_10px_40px_-8px] shadow-violet hover:-translate-y-0.5 hover:shadow-pink",
        outline: "border border-border bg-card backdrop-blur hover:-translate-y-0.5 hover:border-white/30",
        ghost: "hover:bg-accent text-muted-foreground hover:text-foreground",
      },
      size: { default: "h-11 px-6", sm: "h-9 px-4", lg: "h-13 px-8 text-base", icon: "size-10" },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
)

function Button({ className, variant, size, asChild = false, ...props }:
  React.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button"
  return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />
}

export { Button, buttonVariants }
