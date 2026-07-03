import { cn } from "@/lib/utils"

export default function Hospital({
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
        // stroke="#1DAA65"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10 15v20h20V15c0-4.714 0-7.071-1.465-8.536C27.072 5 24.714 5 20 5s-7.071 0-8.535 1.464C10 7.93 10 10.286 10 15M3.333 21.667v6.666c0 3.143 0 4.714.976 5.69C5.286 35 6.857 35 10 35V15c-3.142 0-4.713 0-5.69.976-.976.977-.976 2.548-.976 5.69M30 15v20c3.143 0 4.714 0 5.69-.976.977-.977.977-2.548.977-5.69v-6.667c0-3.143 0-4.714-.977-5.69C34.714 15 33.143 15 30 15"
      ></path>
      <path
        // stroke="#1DAA65"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M16.666 30v5h6.667v-5a3.333 3.333 0 1 0-6.667 0M20 11.666v6.667m3.342-3.342h-6.666"
      ></path>
    </svg>
  )
}
