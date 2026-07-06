import { cn } from "@/lib/utils"

export default function Location({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
      className={cn("stroke-primary", className)}
    >
      <path
        strokeOpacity="0.8"
        strokeWidth="1.5"
        d="M9.078 14.245c-.289.271-.675.422-1.077.422s-.789-.151-1.078-.422C4.275 11.751.727 8.965 2.458 4.92 3.393 2.733 5.638 1.334 8 1.334s4.607 1.4 5.543 3.586c1.728 4.04-1.811 6.84-4.466 9.325Z"
      ></path>
    </svg>
  )
}
