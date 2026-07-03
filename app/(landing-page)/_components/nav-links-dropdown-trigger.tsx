import ChevronDown from "@/components/icons/chevron-down"

export default function NavLinksDropdownTrigger({
  children,
  ...props
}: {
  children: React.ReactNode
}) {
  return (
    <button
      className="group/dropdown-trigger flex items-center gap-1 text-sm text-neutral-600"
      {...props}
    >
      {children}
      <ChevronDown className="transition-transform group-data-[state=open]/dropdown-trigger:rotate-180 data-[state=open]:rotate-180" />
    </button>
  )
}
