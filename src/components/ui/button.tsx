import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg active:scale-95",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:shadow-lg active:scale-95",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:shadow-md active:scale-95",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-md active:scale-95",
        ghost: "hover:bg-accent hover:text-accent-foreground hover:shadow-sm active:scale-95",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  withRipple?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, withRipple = false, children, onClick, ...props }, ref) => {
    const [ripples, setRipples] = React.useState<Array<{ x: number; y: number; id: number }>>([])
    
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (withRipple) {
        const rect = event.currentTarget.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top
        const newRipple = { x, y, id: Date.now() }
        
        setRipples(prev => [...prev, newRipple])
        
        // Remove ripple after animation
        setTimeout(() => {
          setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id))
        }, 600)
      }
      
      onClick?.(event)
    }
    
    const Comp = asChild ? Slot : motion.button
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        onClick={handleClick}
        whileHover={variant !== "link" ? { scale: 1.02 } : undefined}
        whileTap={variant !== "link" ? { scale: 0.98 } : undefined}
        {...props}
      >
        {children}
        {withRipple && ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            className="absolute bg-white/30 rounded-full pointer-events-none"
            style={{
              left: ripple.x,
              top: ripple.y,
            }}
            initial={{
              width: 0,
              height: 0,
              x: "-50%",
              y: "-50%",
              opacity: 1,
            }}
            animate={{
              width: 100,
              height: 100,
              opacity: 0,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        ))}
      </Comp>
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
