import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--border-glow)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] disabled:pointer-events-none disabled:opacity-60 [&_svg]:pointer-events-none [&_svg]:h-5 [&_svg]:w-5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "border border-[color:var(--border-strong)] bg-primary text-primary-fg shadow-floating-card hover:-translate-y-0.5 hover:bg-[color:rgba(124,58,237,0.88)]",
        secondary:
          "border border-[color:var(--border-subtle)] bg-[color:rgba(10,18,33,0.7)] text-text shadow-glass-card hover:-translate-y-0.5 hover:bg-[color:rgba(12,20,37,0.88)]",
        outline:
          "border border-[color:var(--border-strong)] bg-transparent text-primary shadow-sm hover:-translate-y-0.5 hover:bg-[color:rgba(124,58,237,0.12)]",
        ghost:
          "bg-transparent text-text-mute hover:-translate-y-0.5 hover:bg-[color:rgba(12,20,37,0.7)] hover:text-primary",
        destructive:
          "bg-danger text-white shadow-sm hover:-translate-y-0.5 hover:bg-[color:rgba(248,113,113,0.85)]",
        link: "text-primary underline-offset-4 hover:text-secondary-fg hover:underline",
      },
      size: {
        default: "h-11 px-6 text-sm md:text-base",
        sm: "h-9 px-4 text-sm",
        lg: "h-12 px-7 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "h-11 w-11 rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
