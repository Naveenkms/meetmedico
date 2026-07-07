import Link from "next/link"

import { cn } from "@/lib/utils"

function ExploreMedicalNetworkCard({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("space-y-5", className)} {...props}>
      {children}
    </div>
  )
}

function ExploreMedicalNetworkCardHeader({
  children,
  className,
  ...props
}: React.ComponentProps<"h4">) {
  return (
    <h4
      className={cn(
        "text-sm leading-[1.66] font-semibold text-primary md:text-base",
        className
      )}
      {...props}
    >
      {children}
    </h4>
  )
}

function ExploreMedicalNetworkCardContent({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-4", className)} {...props}>
      {children}
    </div>
  )
}

function ExploreMedicalNetworkCardLink({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Link>) {
  return (
    <Link
      className={cn(
        "text-xs leading-[1.28571] font-medium text-gray-900 transition-all hover:underline md:text-sm",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  )
}

export {
  ExploreMedicalNetworkCard,
  ExploreMedicalNetworkCardContent,
  ExploreMedicalNetworkCardHeader,
  ExploreMedicalNetworkCardLink,
}
