export default function ChevronDown({ ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        stroke="#141919"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.8"
        d="M12 6s-2.946 4-4 4-4-4-4-4"
      ></path>
    </svg>
  )
}
