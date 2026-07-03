import { cn } from "@/lib/utils"

export default function Events({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
      viewBox="0 0 40 40"
      className={cn("stroke-primary", className)}
      {...props}
    >
      <path
        // stroke="#257CFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14.166 28.334h-7.5c-2.757 0-3.333.576-3.333 3.333v1.667c0 2.758.576 3.333 3.333 3.333h26.667c2.758 0 3.333-.575 3.333-3.333v-1.667c0-2.758-.575-3.333-3.333-3.333h-7.5M15 20h-5c-2.757 0-3.333.576-3.333 3.333v5M25 20h5c2.758 0 3.334.576 3.334 3.333v5M10 20v-5c0-2.758.575-3.334 3.333-3.334h13.334c2.757 0 3.333.576 3.333 3.333v5"
      ></path>
      <path
        // stroke="#257CFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 11.667v-5c0-2.757.575-3.333 3.333-3.333h3.334c2.757 0 3.333.576 3.333 3.333v5M22.5 11.666l4.166 25m-9.166-25-4.167 25"
      ></path>
    </svg>
  )
}
