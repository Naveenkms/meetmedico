import { cn } from "@/lib/utils";

export default function HealthcareProfessional({
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
        d="M33.334 36.668v-5c0-4.714 0-7.071-1.465-8.535-1.464-1.465-3.821-1.465-8.535-1.465L20 25.001l-3.333-3.333c-4.714 0-7.071 0-8.536 1.465-1.464 1.464-1.464 3.821-1.464 8.535v5M25.834 10.834V9.167a5.833 5.833 0 0 0-11.667 0v1.667a5.833 5.833 0 1 0 11.667 0M26.667 26.666v5m2.5-2.5h-5"
      ></path>
    </svg>
  )
}
