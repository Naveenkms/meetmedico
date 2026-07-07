import ChevronDown from "@/components/icons/chevron-down"

export default function NavLinksDropdownTrigger({
  children,
  ...props
}: {
  children: React.ReactNode
}) {
  return (
    <button
      className="group/dropdown-trigger flex cursor-pointer items-center gap-1 text-sm text-neutral-600 transition-all hover:text-primary hover:[&_svg]:stroke-primary"
      {...props}
    >
      {children}
      <ChevronDown className="rotate-0 stroke-neutral-600 transition-transform group-data-[state=open]/dropdown-trigger:rotate-180 data-[state=open]:rotate-180" />
    </button>
  )
}
