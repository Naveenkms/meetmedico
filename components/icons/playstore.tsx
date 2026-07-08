import { cn } from "@/lib/utils"

export default function Playstore({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 21 24"
      className={cn("h-6 w-5.25", className)}
      {...props}
    >
      <path
        fill="#EA4335"
        d="M9.805 11.462.09 22.006l.001.006C.39 23.158 1.411 24 2.625 24c.486 0 .941-.134 1.332-.37l.03-.018 10.936-6.453z"
      ></path>
      <path
        fill="#FBBC04"
        d="m19.633 9.666-.01-.006-4.72-2.799-5.32 4.84 5.339 5.457 4.695-2.77A2.7 2.7 0 0 0 21 12.022a2.69 2.69 0 0 0-1.367-2.356"
      ></path>
      <path
        fill="#4285F4"
        d="M.09 1.993a2.7 2.7 0 0 0-.09.69v18.633q0 .36.09.69L10.14 11.73z"
      ></path>
      <path
        fill="#1DAA65"
        d="m9.877 12 5.027-5.14L3.982.383A2.6 2.6 0 0 0 2.626 0C1.412 0 .389.845.09 1.99v.003z"
      ></path>
    </svg>
  )
}
