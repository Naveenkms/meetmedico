function TypographyH2({ ...props }: React.ComponentProps<"h2">) {
  return (
    <h2
      className="text-center text-xl leading-[1.3rem] font-semibold md:text-[1.75rem]"
      {...props}
    />
  )
}

export { TypographyH2 }
